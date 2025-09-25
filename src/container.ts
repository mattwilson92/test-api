import { PrismaClient } from "@prisma/client";
import { UserRepository } from "./modules/user/user.repository";
import { UserService } from "./modules/user/user.service";
import { UserController } from "./modules/user/user.controller";

export interface Container {
  userController: UserController;
}

export const buildContainer = (): Container => {
  const prisma = new PrismaClient();

  const userRepo = new UserRepository(prisma);
  const userService = new UserService(userRepo);
  const userController = new UserController(userService);

  return { userController };
};