import { PrismaClient } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';

const prisma = new PrismaClient();

const validateName = (req: Request, res:Response, next: NextFunction) => {
  const { name } = req.body;
  if (typeof name !== 'string') {
    return res.status(400).json({ message: 'name must be a string' });
  }

  if (!name) {
    return res.status(400).json({ message: 'name is required' });
  }

  if (name.length < 3) {
    return res.status(400).json(
      { message: 'name length must be at least 3 characters long' },
    );
  }

  next();
};

const isEmailValid = (email: string) => {
  const base = /\S+@+.\S+/;
  return base.test(email);
};

const isEmailUnique = async (email: string) => {
  const found = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  return found === null;
};

const validateEmail = async (req: Request, res:Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'email is required' });
  }

  if (!isEmailValid(email)) {
    return res.status(400).json({ message: 'email must be a valid email' });
  }

  if (!await isEmailUnique(email)) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

const validatePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: 'password is required' });
  }

  if (password.length < 6) {
    return res.status(400).json(
      { message: 'password length must be 6 characters long' },
    );
  }

  next();
};

const isUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  next();
};

export { validateName, validateEmail, validatePassword, isUser };