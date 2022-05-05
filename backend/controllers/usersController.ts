import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const prisma = new PrismaClient();

const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const created = await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });
  return res.status(201).json(created);
};

const getAllUsers = async (_req: Request, res: Response) => {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
  
  return res.status(200).json(users);
};

const getByName = async (req: Request, res: Response) => {
  const { searchString }: { searchString?: string} = req.query;

  const filteredPosts = await prisma.user.findMany({
    where: {
      name: {
        contains: searchString,
        mode: 'insensitive',
      },
    },
  });

  return res.status(200).json(filteredPosts);
};

const getUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  });
  return res.status(200).json(user);
};

const deleteUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  await prisma.user.delete({
    where: {
      email,
    },
  });
  return res.status(204).end();
};

const updateUser = async (req: Request, res: Response) => {
  const { email } = req.params;
  const { name, password } = req.body;

  const user = await prisma.user.update({
    where: {
      email,
    },
    data: {
      name,
      password,
    },
  });

  return res.status(200).json(user);
};

export { createUser, getAllUsers, getUser, deleteUser, updateUser, getByName };