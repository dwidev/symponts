import InputPrompt from "@/components/shared/input-promp";
import React from "react";

export default function NewChatPage() {
  return (
    <div className="size-full flex flex-col items-center">
      <div className="lg:w-2xl h-full flex flex-col justify-center gap-20 mx-10">
        <h1 className="text-4xl">Selamat datang di Sysmponts!</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            <div className="bg-white px-4 py-2 cursor-pointer shadow-xl w-fit rounded-2xl">
              <p className="text-sm text-gray-400">Saya sakit kepala</p>
            </div>
            <div className="bg-white px-4 py-2 cursor-pointer shadow-xl w-fit rounded-2xl">
              <p className="text-sm text-gray-400">Saya sakit kepala</p>
            </div>
            <div className="bg-white px-4 py-2 cursor-pointer shadow-xl w-fit rounded-2xl">
              <p className="text-sm text-gray-400">Saya sakit kepala</p>
            </div>
          </div>
          <div className="bg-white px-5 py-2 rounded-2xl shadow-xl">
            <InputPrompt />
          </div>
        </div>
      </div>
    </div>
  );
}
