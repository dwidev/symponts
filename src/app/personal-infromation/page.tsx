"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

type GenderType = "male" | "female" | null;

interface OnBoardingData {
  name: string;
  age: number;
  gender: GenderType;
}

export default function OnBoardingPage() {
  const { push } = useRouter();
  const maxStep = 4;
  const [step, setStep] = useState(1);
  const [value, setValue] = useState<OnBoardingData>({
    name: "",
    age: 18,
    gender: null,
  });

  function changeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValue((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function changeGender(value: GenderType) {
    setValue((prev) => {
      return {
        ...prev,
        gender: value,
      };
    });
  }

  function next() {
    if (step == 4) {
      push("/medical-history");
      return;
    }

    setStep((prev) => prev + 1);
  }

  function prev() {
    setStep((prev) => prev - 1);
  }

  return (
    <>
      <section className="">
        <h1 className="mt-5 text-2xl">Haii Fahmi! Welcome to SympontsAI.</h1>
        <h2> We&apos;re to help analyze your health symponts</h2>
        <div className="flex flex-row justify-center items-center mt-10">
          {step > 1 && (
            <BiArrowBack
              className="mr-3 cursor-pointer"
              size={25}
              onClick={prev}
            />
          )}
          <Progress value={(step * 100) / maxStep} className="" />
          <p className="ml-2">
            {step}/{maxStep}
          </p>
        </div>
        <div className="mt-5">
          {step == 1 && (
            <>
              <label htmlFor="name">
                What is your full name? We&apos;d like to get to know you
                better.
                <p className="text-sm text-slate-400 italic">
                  Feel free to use just a nickname
                </p>
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Insert Fullname / Nickname"
                className="mt-3 w-1/2"
                value={value.name}
                onChange={changeValue}
              />
            </>
          )}
          {step == 2 && (
            <>
              <label>
                How old are you? Your age helps us provide more accurate
                results.
              </label>
              <div className="mt-3 flex flex-row items-center">
                <Input
                  placeholder="Ex. 24"
                  name="age"
                  type="number"
                  className="w-30"
                  maxLength={3}
                  max={3}
                  value={value.age}
                  onChange={changeValue}
                />
                <p className="ml-3 text-sm">Years</p>
              </div>
            </>
          )}
          {step == 3 && (
            <>
              <label>
                What is your gender? This is important for accurate health
                analysis.
              </label>
              <div className="mt-4">
                {["Male", "Female"].map((e) => {
                  const isMale = e.toLowerCase() == value.gender;
                  return (
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() =>
                        changeGender(e.toLowerCase() as GenderType)
                      }
                      className={cn(
                        "bg-slate-200 p-4 rounded mb-4 cursor-pointer hover:bg-slate-300 border-2 w-full justify-start",
                        isMale
                          ? "border-slate-400 bg-slate-300"
                          : "border-transparent bg-slate-100"
                      )}
                      key={e}
                    >
                      <p className={isMale ? "font-bold" : ""}>{e}</p>
                    </Button>
                  );
                })}
              </div>
            </>
          )}
          {step == 4 && (
            <>
              <label className="w-2.5">
                What are your height and weight? Your height and weight help us
                calculate your BMI and provide more accurate health insights.
              </label>
              <div className="mt-3 flex flex-row items-center">
                <Input
                  placeholder="Ex. 180"
                  name="height"
                  type="number"
                  className="w-30"
                  maxLength={3}
                  max={3}
                />
                <p className="ml-3 text-sm">CM</p>
              </div>
              <div className="mt-3 flex flex-row items-center">
                <Input
                  placeholder="Ex. 70"
                  name="weight"
                  type="number"
                  className="w-30"
                  maxLength={3}
                  max={3}
                />
                <p className="ml-3 text-sm">Kg</p>
              </div>
            </>
          )}
        </div>
        <Button className="mt-5" onClick={next}>
          Next
        </Button>
      </section>
    </>
  );
}
