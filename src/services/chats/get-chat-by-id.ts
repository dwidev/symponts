import { ChatSelect } from "@/lib/db/validator";
import { PrismaClient } from "../../../generated/prisma";

const getChatByID = async (database: PrismaClient, chatId: string) => {
  const chats = await database.chat.findUnique({
    select: ChatSelect,
    where: {
      id: chatId,
    },
  });

  return chats;
};

export default getChatByID;
