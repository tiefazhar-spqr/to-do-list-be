import { prismaClient } from "@prisma/client"

const db = new prismaClient();
export default db;