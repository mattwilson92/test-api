import { BaseRepository } from '../../base/base.repository';
import { PrismaClient, User } from '@prisma/client';

export class UserRepository extends BaseRepository<User> {
  constructor(prisma: PrismaClient) {
    super(prisma.user);
  }
}
