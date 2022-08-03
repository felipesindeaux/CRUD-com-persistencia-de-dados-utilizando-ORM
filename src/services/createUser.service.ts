import { IUserReq } from "../interfaces/user";
import * as bcrypt from "bcryptjs";
import { AppDataSouce } from "../data-source";
import { User } from "../models/user.entity";

class CreateUserService {
  static async execute({
    name,
    email,
    password,
    age,
  }: IUserReq): Promise<IUserReq> {
    const userRepository = AppDataSouce.getRepository(User);
    const hashedPassword = await bcrypt.hash(password, 8);

    const newUser: IUserReq = userRepository.create({
      name,
      email,
      password: hashedPassword,
      age,
    });

    await userRepository.save(newUser);

    return newUser;
  }
}

export default CreateUserService;
