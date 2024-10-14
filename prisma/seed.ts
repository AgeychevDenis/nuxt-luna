import { Prisma, PrismaClient } from '@prisma/client'
import { hashSync } from 'bcrypt'

import { categories, ingredients, products } from './constants'

const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

const generateProductItem = ({
  productId,
  pizzaType,
  size,
  price,
}: {
  productId: number
  pizzaType?: number
  size?: number
  price?: number
}) => {
  return {
    productId,
    price: price || randomNumber(500, 3000),
    pizzaType,
    size,
  } as Prisma.ProductItemUncheckedCreateInput
}

const prisma = new PrismaClient()

async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: 'User test',
        email: 'user@test.ru',
        password: hashSync('1111111', 10),
        verified: new Date(),
        role: 'USER',
      },
      {
        fullName: 'Admin',
        email: 'admin@test.ru',
        password: hashSync('1111111', 10),
        verified: new Date(),
        role: 'ADMIN',
      },
    ],
  })

  await prisma.category.createMany({
    data: categories,
  })

  await prisma.ingredient.createMany({
    data: ingredients,
  })

  await prisma.product.createMany({
    data: products,
  })

  const perfume1 = await prisma.product.create({
    data: {
      name: 'TRUSSARDI My Land',
      imageUrl: 'https://i.ibb.co/dtRFNjp/EX-dd4e9433-9eae-47a4-b0f2-c0cbd1a0fd9a-Photoroom.png',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  })

  const perfume2 = await prisma.product.create({
    data: {
      name: 'TOM FORD Tobacco Vanille',
      imageUrl: 'https://i.ibb.co/BjbVYbv/EX-f61956ce-e9be-4cb9-b13c-f8677eacd23f-Photoroom.png',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  })

  const perfume3 = await prisma.product.create({
    data: {
      name: 'TRUSSARDI Delicate Rose',
      imageUrl: 'https://i.ibb.co/sRJd4TL/EX-870724ec-dc76-4274-8a99-adcc962cdb32-Photoroom.png',
      categoryId: 1,
      ingredients: {
        connect: ingredients,
      },
    },
  })

  await prisma.productItem.createMany({
    data: [
      // Парфюмерия TRUSSARDI My Land
      generateProductItem({ productId: perfume1.id, pizzaType: 1, size: 20, price: 5279 }),
      generateProductItem({ productId: perfume1.id, pizzaType: 2, size: 30, price: 7959 }),
      generateProductItem({ productId: perfume1.id, pizzaType: 2, size: 40, price: 8481 }),

      // Парфюмерия TOM FORD Tobacco Vanille
      generateProductItem({ productId: perfume2.id, pizzaType: 1, size: 20, price: 17010 }),
      generateProductItem({ productId: perfume2.id, pizzaType: 1, size: 30, price: 26100 }),
      generateProductItem({ productId: perfume2.id, pizzaType: 1, size: 40, price: 35055 }),
      generateProductItem({ productId: perfume2.id, pizzaType: 2, size: 20, price: 10990 }),
      generateProductItem({ productId: perfume2.id, pizzaType: 2, size: 30, price: 15550 }),
      generateProductItem({ productId: perfume2.id, pizzaType: 2, size: 40, price: 28970 }),

      // Парфюмерия TRUSSARDI Delicate Rose
      generateProductItem({ productId: perfume3.id, pizzaType: 1, size: 20, price: 5599 }),
      generateProductItem({ productId: perfume3.id, pizzaType: 2, size: 30, price: 7999 }),
      generateProductItem({ productId: perfume3.id, pizzaType: 2, size: 40, price: 10639 }),

      // Остальные товары
      generateProductItem({ productId: 1, price: 1205 }),
      generateProductItem({ productId: 2 }),
      generateProductItem({ productId: 3 }),
      generateProductItem({ productId: 4 }),
      generateProductItem({ productId: 5 }),
      generateProductItem({ productId: 6 }),
      generateProductItem({ productId: 7 }),
      generateProductItem({ productId: 8 }),
      generateProductItem({ productId: 9 }),
      generateProductItem({ productId: 10 }),
      generateProductItem({ productId: 11 }),
      generateProductItem({ productId: 12 }),
      generateProductItem({ productId: 13 }),
      generateProductItem({ productId: 14 }),
      generateProductItem({ productId: 15 }),
      generateProductItem({ productId: 16 }),
      generateProductItem({ productId: 17 }),
    ],
  })

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: '2121231',
      },
      {
        userId: 2,
        totalAmount: 0,
        token: '2123661',
      },
    ],
  })

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 1,
      quantity: 2,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
      },
    },
  })
}

async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE;`
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE;`
}

async function main() {
  try {
    await down()
    await up()
  } catch (error) {
    console.error(error)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
