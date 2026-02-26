"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormField } from "@/features/FormField";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/lib/store/authSlice";
import { IRegister } from "@/lib/types";
import { SignInWithEmailAction } from "../actions/SignInAction";
import Link from "next/link";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";

export default function SignInUi() {
  const [isUserExist, setUserExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const [_, setCookies] = useCookies(["access_token", "refresh_token"]);

  const UserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(20),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Omit<IRegister, "name">>({
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (formData: Omit<IRegister, "name">) => {
    setIsLoading(true);

    const auth = await SignInWithEmailAction(formData);

    console.log(auth)

    if (!auth || !auth.tokens) {
      setUserExist(true);
      setIsLoading(false);
      return;
    }

    dispatch(setCredentials(auth));
    setCookies("access_token", auth.tokens.access_token);
    setCookies("refresh_token", auth.tokens.refresh_token);

    router.push("/");
  };

  return (
    <div className="w-[400px] bg-white flex flex-col gap-8 rounded-xl overflow-hidden justify-center items-center px-8 py-16 shadow-lg">
      <h1 className="text-2xl font-semibold">LogIn</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full">
        <FormField
          type="email"
          name="email"
          register={register}
          error={errors.email}
          placeholder="Enter your email"
        />

        <FormField
          type="password"
          name="password"
          register={register}
          error={errors.password}
          placeholder="Enter your password"
        />

        {isUserExist && (
          <label className="-mt-4 text-red-500">User does not exist</label>
        )}

        <Button
          type="submit"
          className="bg-black text-white rounded-sm w-full transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
          disabled={isLoading}
        >
          {isLoading ? "Signing in..." : "SignIn"}
        </Button>
      </form>

      <Link href="/SignUp" className="text-sm transition-colors duration-300 hover:text-gray-700">
        SignUp
      </Link>
    </div>
  );
}
