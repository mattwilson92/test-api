import {Hono} from "hono"
import { buildContainer } from "./container";
import { userRouter } from "./modules/user/user.router";

const app = new Hono();
const container = buildContainer();

app.route("/users", userRouter(container.userController));

export default app;