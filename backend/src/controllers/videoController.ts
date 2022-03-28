import { Request, Response, NextFunction } from 'express';
import User from '../models/Users';

const home = async (req: Request, res: Response) => {
  const user = await User.find();

  return res.send({ user });
};

const create = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const { username, password } = req.body;

    await User.create({
      username,
      password,
    });

    return res.send({ msg: 'completed' });
  } catch (error: any) {
    console.log(error);

    if (error.code == 11000) {
      res.send({ errorMsg: '이미 있는 아이디입니다.' });
    }
  }
};

export default {
  home,
  create,
};
