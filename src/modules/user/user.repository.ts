import { PrismaClient, User } from "@prisma/client";
import { BaseRepository } from "../../base/base.repository";

export class UserRepository extends BaseRepository<User> {
  constructor(prisma: PrismaClient) {
    super(prisma.user);
  }
}
