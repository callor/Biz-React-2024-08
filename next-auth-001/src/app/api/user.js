import { PrismaClient } from "@prisma/client";
import bcript from "bcrypt";

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

export const userFindById = async (username) => {
  try {
    const user = await db.tbl_users.findUnique({
      where: { username: username },
    });
    db.$disconnect();
    return user;
  } catch (error) {
    db.$disconnect();
    console.error(error);
  }
};

export const userCreate = async (user) => {
  const password = user.password;
  const encPassword = await bcript.hash(password, 10);
  user.password = encPassword;

  const result = await db.tbl_users.create({ data: user });
  db.$disconnect();
  return result;
};
