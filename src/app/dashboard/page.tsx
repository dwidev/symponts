import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { RiMentalHealthLine } from "react-icons/ri";

export default function DashboardPage() {
  return (
    <>
      {/* <RiMentalHealthLine className="mb-4" /> */}
      <div className="bg-slate-50 p-5 rounded-2xl mb-10">
        <div className="flex flex-row">
          🩺 <p className="ml-1"> What symptoms are you experiencing?</p>
        </div>
        <div className="relative flex items-end">
          <Textarea
            placeholder="Please explain your symptoms"
            className="mt-5 bg-white focus-visible:ring-0 h-30 text-start items-start"
          />
          <Button size="icon" className="rounded-4xl absolute right-4 bottom-2">
            <FaArrowCircleUp color="bg-slate-400" />
          </Button>
        </div>
      </div>
    </>
  );
}
