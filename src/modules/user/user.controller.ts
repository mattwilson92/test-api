import { User } from "@prisma/client";
import { BaseController } from "../../base/base.controller";
import { UserService } from "./user.service";

export class UserController extends BaseController<User> {
  constructor(service: UserService) {
    super(service);
  }
}
