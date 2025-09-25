import { User } from "@prisma/client";
import { BaseService } from "../../base/base.service";
import { UserRepository } from "./user.repository";

export class UserService extends BaseService<User> {
  constructor(repository: UserRepository) {
    super(repository);
  }
}
