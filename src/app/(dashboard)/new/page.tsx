import InputPrompt from "@/components/shared/input-promp";
import { Button } from "@/components/ui/button";
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
          <div className="bg-white px-5 py-2 rounded-2xl shadow-2xl">
            <InputPrompt />
          </div>
        </div>
      </div>
    </div>
  );
}
