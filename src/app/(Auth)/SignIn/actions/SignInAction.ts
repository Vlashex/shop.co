"use server";

import { IAuth, IRegister } from "@/lib/types";
import { signInAction } from "@/app/actions/users";

export const SignInWithEmailAction = async (
  creds: Omit<IRegister, "name">
): Promise<IAuth | null> => {
  try {
    const payload = {
      email: creds.email,
      password: creds.password,
    };

    console.log(payload, 'payload')

    const result = await signInAction(payload);
    console.log(result, 'result')
    return result;
  } catch {
    return null;
  }
};
