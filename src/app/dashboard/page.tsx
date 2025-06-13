import { cn } from "@/lib/utils"; // jika kamu pakai clsx/twMerge
import SymptomChecker from "./components/symptoms-checker";

export default function DashboardPage() {
  const containerWidth = true ? "w-full" : "w-2xl max-md:w-2xs";

  return (
    <main className="font-mono flex flex-col overflow-hidden">
      <div className={cn(containerWidth)}>
        {/* <div className="flex-1 h-screen pt-20 overflow-y-auto px-10">
          <SymptomChecker />
          <SymptomChecker />
        </div> */}
        <div className="flex flex-row overflow-hidden">
          <div className="pt-20 h-screen w-full overflow-y-auto bg-slate-100">
            <div className="flex flex-col justify-center items-center">
              <div className="w-[50%] flex-1 bg-white">
                {[...Array(50)].map((e, i) => {
                  return (
                    <div key={i}>
                      <p>ANJAY</p>
                    </div>
                  );
                })}
                <p>ANJAYYY</p>
              </div>
            </div>
          </div>

          <div className="pt-20 w-[30%] px-5 py-5 overflow-y-auto h-screen">
            <SymptomChecker />
          </div>
        </div>
      </div>
    </main>
  );
}
