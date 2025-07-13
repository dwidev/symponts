import { SidebarFooter } from "@/components/ui/sidebar";
import React, { Suspense } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import UserAvatar, { AvatarSkeleton } from "../user-avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function footer() {
  return (
    <SidebarFooter>
      <div className="flex flex-col mb-3">
        <div className="w-full h-auto flex p-2 rounded-2xl shadow-2xl justify-between">
          <div className="flex items-center gap-2 font-semibold text-sm">
            <Suspense fallback={<AvatarSkeleton />}>
              <UserAvatar />
            </Suspense>
            <p>Fahmi</p>
          </div>
          <Button variant="ghost" asChild>
            <Link href="/signout">
            <BiLogOutCircle className="text-red-500" />
            </Link>
          </Button>
        </div>
      </div>
    </SidebarFooter>
  );
}
