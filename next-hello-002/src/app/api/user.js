import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

export const userSelectAll = async () => {
  try {
    const users = await db.tbl_users.findMany();
    await db.$disconnect();
    return users;
  } catch (error) {
    await db.$disconnect();
    process.exit(1);
  }
};
