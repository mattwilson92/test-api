import { UserController } from './modules/user/user.controller';
import { UserRepository } from './modules/user/user.repository';
import { UserService } from './modules/user/user.service';
import { PrismaClient } from '@prisma/client';

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
