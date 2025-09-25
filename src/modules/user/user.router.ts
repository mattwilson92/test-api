import { Hono } from "hono";
import { UserController } from "./user.controller";

export const userRouter = (controller: UserController) => {
  const r = new Hono();

  r.get("/", controller.findAll);
  r.get("/:id", controller.findById);
  r.post("/", controller.create);
  r.put("/:id", controller.update);
  r.delete("/:id", controller.delete);

  return r;
};
