import { AppDataSouce } from "../data-source";
import { IUser } from "../interfaces/user";
import { User } from "../models/user.entity";

class ListUsersService {
  static async execute(): Promise<IUser[]> {
    const userRepository = AppDataSouce.getRepository(User);

    const users = await userRepository.find();

    return users;
  }
}

export default ListUsersService;
