"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/features/FormField";
import { SignUpAction } from "../actions/SignUpAction";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/lib/store/authSlice";
import { useRouter } from "next/navigation";
import { IRegister } from "@/lib/types";
import { useCookies } from "react-cookie";

export default function SignUpUi() {
  const [registerError, setRegisterError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const { replace } = useRouter();
  const [_, setCookies] = useCookies(["access_token", "refresh_token"]);

  const UserSchema = z
    .object({
      email: z.string().email(),
      name: z.string().min(3),
      password: z.string().min(6).max(20),
      confirmedPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmedPassword, {
      message: "Passwords do not match",
      path: ["confirmedPassword"],
    });

  interface SignUp extends IRegister {
    confirmedPassword: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({ resolver: zodResolver(UserSchema) });

  const onSubmit = async (formData: SignUp) => {
    setIsLoading(true);

    const { confirmedPassword, ...credentials } = formData;

    const { error, data } = await SignUpAction(credentials);

    console.log(error, data, 'error, data')

    if (error) {
      setRegisterError(error.message);
      setIsLoading(false);
      return;
    }

    if (data) {
      dispatch(setCredentials(data));
      setCookies("access_token", data.tokens?.access_token);
      setCookies("refresh_token", data.tokens?.refresh_token);
      replace("/");
      return;
    }

    setRegisterError("Something wrong");
    setIsLoading(false);
  };

  return (
    <div className="w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16 shadow-lg">
      <h1 className="text-2xl font-semibold">Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
        <FormField type="name" name="name" register={register} error={errors.name} placeholder="Enter your name" />
        <FormField type="email" name="email" register={register} error={errors.email} placeholder="Enter your email" />

        {registerError && <label className="-mt-4 text-red-500">{registerError}</label>}

        <FormField type="password" name="password" register={register} error={errors.password} placeholder="Enter your password" />
        <FormField type="password" name="confirmedPassword" register={register} error={errors.confirmedPassword} placeholder="Confirm password" />

        <Button className="bg-black text-white rounded-sm w-full" disabled={isLoading}>
          {isLoading ? "Signing up..." : "SignUp"}
        </Button>
      </form>
    </div>
  );
}
