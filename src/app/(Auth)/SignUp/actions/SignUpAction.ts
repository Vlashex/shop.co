"use server";

import { hashValue } from "@/lib/functions/hashValue";
import { IAuth, IRegister } from "@/lib/types";
import { signUpAction } from "@/app/actions/users";

interface Err {
  statusCode: number;
  message: string;
}

interface Response {
  data: IAuth | null;
  error: Err | null;
}

export const SignUpAction = async (payload: IRegister): Promise<Response> => {
  try {
    const credentials: IRegister = {
      ...payload,
      password: hashValue(payload.password),
    };

    const result = await signUpAction(credentials);

    return {
      data: result.data,
      error: result.error,
    };
  } catch (err) {
    return {
      data: null,
      error: {
        statusCode: 500,
        message: "Internal error",
      },
    };
  }
};
