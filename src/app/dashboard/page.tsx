import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
// import { RiMentalHealthLine } from "react-icons/ri";

const painLocations: string[] = [
  "Head",
  "Throat",
  "Chest",
  "Stomach",
  "Back",
  "Joints",
  "Abdomen",
  "Neck",
  "Shoulders",
  "Arms",
  "Legs",
  "Feet",
  "Hands",
  "Skin",
  "Eyes",
  "Ears",
  "Whole body",
  "Other",
];

export default function DashboardPage() {
  return (
    <>
      {/* <RiMentalHealthLine className="mb-4" /> */}
      <div className="bg-gray-100 p-5 rounded-2xl mb-10">
        <div className="flex flex-row">
          🩺 <p className="ml-1">Where is your pain or discomfort located?</p>
        </div>

        {/* <div className="relative flex items-end">
          <Textarea
            placeholder="Please explain your symptoms"
            className="mt-5 bg-white focus-visible:ring-0 h-30 text-start items-start"
          />
          <Button size="icon" className="rounded-4xl absolute right-4 bottom-2">
            <FaArrowCircleUp color="bg-slate-400" />
          </Button>
        </div> */}
      </div>
      <div className="bg-gray-100 p-2 lex flex-wrap gap-1.5 mt-5 w-1/2">
        {painLocations.map((e) => {
          if (e == "Other") {
            return <Input key={e} placeholder={e} className="w-30" />;
          }
          return <Button key={e}>{e}</Button>;
        })}
        <p>Please select one</p>
        
      </div>
    </>
  );
}
