import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function seedDB() {
  await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: 'alice@prisma.io',
      name: 'Alice',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'bill@prisma.io' },
    update: {},
    create: {
      email: 'bill@prisma.io',
      name: 'Bill',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'charles@prisma.io' },
    update: {},
    create: {
      email: 'charles@prisma.io',
      name: 'Charles',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'david@prisma.io' },
    update: {},
    create: {
      email: 'david@prisma.io',
      name: 'David',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'ellen@prisma.io' },
    update: {},
    create: {
      email: 'ellen@prisma.io',
      name: 'Ellen',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'frank@prisma.io' },
    update: {},
    create: {
      email: 'frank@prisma.io',
      name: 'Frank',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'greg@prisma.io' },
    update: {},
    create: {
      email: 'greg@prisma.io',
      name: 'Greg',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'hector@prisma.io' },
    update: {},
    create: {
      email: 'hector@prisma.io',
      name: 'Hector',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'ingrid@prisma.io' },
    update: {},
    create: {
      email: 'ingrid@prisma.io',
      name: 'Ingrid',
      password: 'mypassword',
    },
  });

  await prisma.user.upsert({
    where: { email: 'john@prisma.io' },
    update: {},
    create: {
      email: 'john@prisma.io',
      name: 'John',
      password: 'mypassword',
    },
  });
}

seedDB();
