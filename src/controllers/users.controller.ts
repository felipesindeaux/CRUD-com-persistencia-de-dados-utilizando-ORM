import { Request, Response } from "express";
import CreateUserService from "../services/createUser.service";
import ListUsersService from "../services/listUsers.service";
import FindUserService from "../services/findUser.service";
import DeleteUserService from "../services/deleteUser.service";
import UpdateUserService from "../services/updateUser.service";

class UsersController {
  static async store(req: Request, res: Response) {
    const userCreated = await CreateUserService.execute(req.body.newUser);

    return res.status(201).json(userCreated);
  }
  static async index(req: Request, res: Response) {
    const users = await ListUsersService.execute();

    return res.status(200).json(users);
  }
  static async show(req: Request, res: Response) {
    const { id } = req.params;

    const user = await FindUserService.execute(id);

    return res.status(200).json(user);
  }
  static async update(req: Request, res: Response) {
    const { id } = req.params;

    const updatedUser = await UpdateUserService.execute(id, req.body);

    return res.status(200).json(updatedUser);
  }
  static async delete(req: Request, res: Response) {
    const { id } = req.params;

    await DeleteUserService.execute(id);

    return res.status(204).json();
  }
}

export default UsersController;
