import { ChatSelect } from "@/lib/db/validator";
import { PrismaClient } from "../../../generated/prisma";

const getChatByID = async (database: PrismaClient) => {
  const chats = await database.chat.findUnique({
    select: ChatSelect,
    where: {
      id: "chat_room_id_001",
    },
  });

  return chats;
};

export default getChatByID;
