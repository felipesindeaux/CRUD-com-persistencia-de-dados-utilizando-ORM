import { Request, Response, NextFunction } from "express";
import { AppDataSouce } from "../data-source";
import { User } from "../models/user.entity";

class VerifyUserExistence {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const userRepository = AppDataSouce.getRepository(User);

    const { id } = req.params;

    const user = await userRepository.findOne({
      where: {
        id,
      },
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found!",
      });
    }

    next();
  }
}

export default VerifyUserExistence;
