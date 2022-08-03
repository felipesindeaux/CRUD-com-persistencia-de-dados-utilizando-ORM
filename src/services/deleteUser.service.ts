import { AppDataSouce } from "../data-source";
import { User } from "../models/user.entity";

class DeleteUserService {
  static async execute(id: string) {
    const userRepository = AppDataSouce.getRepository(User);

    await userRepository.delete({
      id,
    });

    return;
  }
}

export default DeleteUserService;
