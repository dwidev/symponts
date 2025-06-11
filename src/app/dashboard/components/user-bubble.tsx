import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type UserBubbleProps = {
  data: string[];
};

export function UserBubble(props: UserBubbleProps) {
  const { data } = props;

  return (
    <section className="w-4/5 flex flex-row items-end ml-auto">
      <div className="flex flex-col items-end flex-1 mr-3">
        <div className="bg-gray-100 rounded-2xl p-4 flex flex-wrap gap-1.5 ">
          {data.map((e) => {
            if (e == "Other") {
              return (
                <Input
                  key={e}
                  placeholder="type other.."
                  className="w-32 bg-white"
                />
              );
            }
            return (
              <Button
                variant="outline"
                className="transition hover:scale-105"
                key={e}
              >
                {e}
              </Button>
            );
          })}
        </div>
        <p className="mt-2 italic text-sm text-gray-400">Please select one</p>
      </div>
      <Avatar className="size-8 self-end">
        <AvatarImage
          src="https://github.com/shadcn.png"
          className="object-center rounded-full"
          alt="user avatar"
        />
        <AvatarFallback>user avatar</AvatarFallback>
      </Avatar>
    </section>
  );
}
