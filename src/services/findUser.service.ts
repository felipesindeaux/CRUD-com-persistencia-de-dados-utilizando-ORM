import { AppDataSouce } from "../data-source";
import { IUser } from "../interfaces/user";
import { User } from "../models/user.entity";

class FindUserService {
  static async execute(id: string) {
    const userRepository = AppDataSouce.getRepository(User);

    const user = await userRepository.findOne({
      where: {
        id,
      },
    });

    return user;
  }
}

export default FindUserService;
