import { Router } from "express";
import UsersController from "../controllers/users.controller";
import VerifyUserExistence from "../middlewares/verifyUserExistence.middleware";
import VerifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware";
import ValidateUserCreateMiddleware from "../middlewares/validateUserCreateMiddleware";
import { userCreateSchema } from "../middlewares/validateUserCreateMiddleware";

const route = Router();

route.post(
  "",
  ValidateUserCreateMiddleware(userCreateSchema),
  VerifyEmailAvailabilityMiddleware.execute,
  UsersController.store
);
route.get("", UsersController.index);
route.get("/:id", VerifyUserExistence.execute, UsersController.show);
route.patch("/:id", VerifyUserExistence.execute, UsersController.update);
route.delete("/:id", VerifyUserExistence.execute, UsersController.delete);

export default route;
