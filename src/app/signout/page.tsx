"use client";

import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";

export default function SignOut() {
  const session = useSession();

  useEffect(() => {
    if (!session) {
      redirect("/");
    } else {
      signOut({ redirectTo: "/" });
    }
  }, [session]);

  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <FaSpinner size={35} className="animate-spin" />
        <h3 className="mt-2">Redirecting...</h3>
      </div>
    </div>
  );
}
