import Image from "next/image";
import React from "react";
import VerifyEmail from "./VerifyEmail";
import EmailVerifiedIcon from "./EmailVerifiedIcon";
import EmailSentIcon from "./EmailSentIcon";

interface Props {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const VerifyEmailPage = ({ searchParams }: Props) => {
  // src\collections\users.ts
  // "${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}"
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {token && typeof token === "string" ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : (
          <div className="flex h-full flex-col items-center justify-center space-x-2">
            <div className="mb-4">
              <EmailSentIcon />
            </div>
            <h3 className="semi-vold text-2xl">Check your email</h3>
            {toEmail ? (
              <p className="text-muted-forground text-center">
                We&apos;ve sent a verification link to <span className="font-semibold">{toEmail}</span>
              </p>
            ) : (
              <p className="text-muted-forground text-center">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VerifyEmailPage;
