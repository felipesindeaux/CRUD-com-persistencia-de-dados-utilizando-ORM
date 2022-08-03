import { Request, Response, NextFunction } from "express";
import { AppDataSouce } from "../data-source";
import { User } from "../models/user.entity";

class VerifyEmailAvailabilityMiddleware {
  static async execute(req: Request, res: Response, next: NextFunction) {
    const userRepository = AppDataSouce.getRepository(User);

    const { email } = req.body;

    const user = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (user) {
      return res.status(400).json({
        message: "This email is already being used!",
      });
    }

    next();
  }
}

export default VerifyEmailAvailabilityMiddleware;
