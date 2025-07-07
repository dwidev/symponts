import InputPrompt from "@/components/shared/input-promp";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";
import React from "react";

export default function NewChatPage() {
  return (
    <div className="size-full flex flex-col items-center">
      <div className="lg:w-2xl h-full flex flex-col justify-center gap-15 mx-10">
        <div>
          <h1 className="text-2xl text-gray-600 font-semibold">Haii Fahmi!</h1>
          <h1 className="text-3xl">Apa keluhan kamu?!</h1>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap gap-2">
            {[0, 1, 2, 3].map((e) => {
              return (
                <Button
                  key={e}
                  variant="ghost"
                  className="bg-white px-4 py-2 rounded-full transition hover:scale-105 shadow-2xl"
                >
                  <p className="text-sm text-gray-600">Saya sakit kepala</p>
                </Button>
              );
            })}
          </div>
          <InputPrompt />
          <div className="flex self-center items-start w-[90%]">
            <AlertCircle size="15" className="text-gray-500" />
            <p className="text-[12px] text-gray-500 text-center">
              Saran dari AI ini bukan diagnosis medis. Mohon tetap berkonsultasi
              dengan dokter untuk penanganan yang tepat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
