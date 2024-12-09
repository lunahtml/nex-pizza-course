//seed.ts
import { Prisma } from "@prisma/client";
import { categories, ingredients, products } from "./constans";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

const randomNumber = (min: number, max: number) =>
{return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;}

const generateProductItem = ({
    productId,
    pizzaType,
    size,
} :{
    productId: number;
    pizzaType?: 1 | 2 ;
    size?: 20 | 25 | 30;
} ) => {
    return {
        productId,
        price: randomNumber(190, 600),
        pizzaType,
        size
    } as Prisma.ProductItemUncheckedCreateInput;
}
async function up() {
 
await prisma.user.createMany({
    data: [
        {fullName: 'User232323', 
        email: 'user@test.ru', 
        password: hashSync('111211', 10), 
        verified: new Date(),
        role: 'USER', 
    },
        {fullName: 'admin2222222222', 
        email: 'use2@test.ru', 
        password: hashSync('111211', 10), 
      verified: new Date(),
        role: 'ADMIN', 
    },
        {fullName: 'adm3in', 
        email: 'us32@test.ru', 
        password: hashSync('311211', 10), 
      verified: new Date(),
        role: 'ADMIN', 
    },
   

    ]
});
await prisma.category.createMany({
    data: categories,
});
await prisma.ingredient.createMany({
    data: ingredients,
});
await prisma.product.createMany({
    data: products,
});

const pizza2 = await prisma.product.create({
    data: 
      {
        name: '4 Cheese',
        imageUrl:
          'https://media.dodostatic.net/image/r:233x233/11EE7D610CF7E265B7C72BE5AE757CA7.webp',
        categoryId: 1,
        ingredients: {
          connect: ingredients.slice(5, 10),
        },
      },
    
  });
const pizza3 = await prisma.product.create({
    data: 
      {
        name: 'Mocarela',
        imageUrl:
          'https://media.dodostatic.net/image/r:584x584/11EE7D61706D472F9A5D71EB94149304.webp',
        categoryId: 1,
        ingredients: {
            connect: ingredients.slice(10, 15)
        },
      },
    
  });



  await prisma.productItem.createMany({
      data: [
        generateProductItem({ productId: pizza1.id, pizzaType: 1, size: 20 }),
      ]
  })
}

async function down() {
await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
    try {
          await down();
        await up();
      
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}
main().then(async () => {
    await prisma.$disconnect();
});
