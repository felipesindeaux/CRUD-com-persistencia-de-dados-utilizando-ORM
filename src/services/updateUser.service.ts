import { AppDataSouce } from "../data-source";
import { User } from "../models/user.entity";
import { IUser, IUserReq, IUserUpdate } from "../interfaces/user";
import * as bcrypt from "bcryptjs";

class UpdateUserService {
  static async execute(id: string, { name, email, password, age }: IUserReq) {
    const userRepository = AppDataSouce.getRepository(User);

    const user = await userRepository.findOne({
      where: {
        id,
      },
    });

    const dataToUpdate = { ...user };

    name ? (dataToUpdate.name = name) : dataToUpdate.name;
    email ? (dataToUpdate.email = email) : dataToUpdate.email;
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 8);
      dataToUpdate.password = hashedPassword;
    }
    age ? (dataToUpdate.age = age) : dataToUpdate.age;

    await userRepository.update(
      {
        id,
      },
      {
        name: dataToUpdate.name,
        email: dataToUpdate.email,
        password: dataToUpdate.password,
        age: dataToUpdate.age,
        updated_at: new Date(),
      }
    );

    return {
      message: "User successfully updated!",
    };
  }
}

export default UpdateUserService;
