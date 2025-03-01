import { saltAndHashPassword } from "../utils/password";
import { PrismaClient, Role, Condition, BookStatus, OrderStatus } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  // 1. Create Users
  // Admin user (for approving/rejecting books)
  const adminPass = await saltAndHashPassword("admin123");
  await prisma.user.create({
    data: {
      name: "ادمین",
      email: "admin@example.com",
      password: adminPass, // In production, hash the password!
      role: Role.ADMIN,
      verified: true,
    },
  });

  // Normal seller user (can buy and sell)
  const sellerPass = await saltAndHashPassword("seller123");

  const sellerUser = await prisma.user.create({
    data: {
      name: "فروشنده",
      email: "seller@example.com",
      password: sellerPass, // In production, hash the password!
      role: Role.USER,
      verified: true,
    },
  });

  // Normal buyer user (can buy and sell)
  const buyerPass = await saltAndHashPassword("buyer123");

  const buyerUser = await prisma.user.create({
    data: {
      name: "خریدار",
      email: "buyer@example.com",
      password: buyerPass, // In production, hash the password!
      role: Role.USER,
      verified: true,
    },
  });

  // 2. Create 5 Books for Each Condition for the Seller
  const conditions: Condition[] = [Condition.NEW, Condition.GOOD, Condition.FAIR, Condition.POOR];

  for (const condition of conditions) {
    for (let i = 1; i <= 5; i++) {
      await prisma.book.create({
        data: {
          title: `کتاب ${condition} ${i}`,
          image:"/book.svg",
          author: `نویسنده ${i}`,
          condition: condition,
          price: 20 + i * 5, // arbitrary price
          isbn: `978-SELLER-${condition}-${i}`, // unique ISBN per book
          sellerId: sellerUser.id,
          status: BookStatus.APPROVED, // Initially pending for admin review
        },
      });
    }
  }


  // 4. Create an Order for one of the approved books
  const approvedBook = await prisma.book.findFirst({
    where: { status: BookStatus.APPROVED },
  });

  if (approvedBook) {
    await prisma.order.create({
      data: {
        buyerId: buyerUser.id,
        bookId: approvedBook.id,
        quantity: 1,
        totalPrice: approvedBook.price,
        status: OrderStatus.PENDING,
      },
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
