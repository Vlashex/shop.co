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
import { createHash } from "crypto";
import { hashValue } from "@/lib/functions/hashValue";

export default function SignUpUi() {
  const [registerError, setRegisterError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const { replace } = useRouter();
  const [cookies, setCookies] = useCookies(["access_token", "refresh_token"]);

  const UserSchema = z
    .object({
      email: z.string().email(),
      name: z.string().min(3),
      password: z
        .string()
        .min(6, { message: "Password is too short" })
        .max(20, { message: "Password is too long" }),
      confirmedPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmedPassword, {
      message: "Passwords do not match",
      path: ["confirmedPassword"], // path of error
    });

  interface SignUp extends IRegister {
    confirmedPassword: string;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({ resolver: zodResolver(UserSchema) });

  const onSubmit = async(formdData: SignUp) => {
    const { confirmedPassword, ...cred } = formdData;
    const credentials:IRegister = {
      ...cred,
      password: hashValue(formdData.password),
    };

    const { error, data } = await SignUpAction(credentials);

    if (error !== null) {
      setRegisterError(error.message);
      return;
    }
    if (data !== null) {
      dispatch(setCredentials(data));
      setCookies("access_token", data.tokens?.access_token);
      setCookies("refresh_token", data.tokens?.refresh_token);
      replace("/");
    }
    if (data === null && error === null) {
      setRegisterError("Something wrong")
    }
  };

  return (
    <div className="w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16">
      <h1 className="text-2xl">Registration</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 w-full"
      >
        <FormField
          type="name"
          name="name"
          register={register}
          error={errors.name}
          placeholder="Enter your name"
        />
        <FormField
          type="email"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Enter your email"
        />
        {registerError != null ? (
          <label className="-mt-4 text-red-500">{registerError}</label>
        ) : null}
        <FormField
          type="password"
          name="password"
          register={register}
          error={errors.password}
          placeholder="Enter your password"
        />
        <FormField
          type="password"
          name="confirmedPassword"
          register={register}
          error={errors.confirmedPassword}
          placeholder="Confirm password"
        />
        <Button className="bg-black text-white rounded-sm">SignUp</Button>
      </form>
    </div>
  );
}
