import BoxGradient from "@/components/ui/box-gradient";
import { Button } from "@/components/ui/button";
import { SidebarHeader, SidebarTrigger } from "@/components/ui/sidebar";
import { BrainCircuit } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <SidebarHeader>
      <div className="flex items-center justify-between mb-5">
        <SidebarTrigger />
        <Link href="/new">
          <h1 className="font-bold mr-3">SymptomAI</h1>
        </Link>
      </div>
      <BoxGradient isFocused={true}>
        <Button
          className="w-full h-auto rounded-xl py-3 cursor-pointer shadow-xl bg-white text-primary hover:bg-transparent"
          asChild
        >
          <Link href="/new" className="text-black">
            <BrainCircuit />
            <span className="font-semibold">Deteksi Gejala Baru</span>
          </Link>
        </Button>
      </BoxGradient>
    </SidebarHeader>
  );
}
