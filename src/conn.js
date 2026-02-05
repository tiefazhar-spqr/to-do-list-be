import { prismaClient } from "../src/generated/prisma"

const db = new prismaClient();
export default db;