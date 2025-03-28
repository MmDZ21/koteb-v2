import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { updateOrderSchema } from "@/lib/zod";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const user = session?.user;
  const id = (await params).id
  if (!user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const order = await prisma.order.findUnique({
    where: { id },
    include: { book: true },
  });

  if (!order || (order.book.sellerId !== user.id && user.role !== "ADMIN")) {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  const data = await req.json();
  const parsedData = updateOrderSchema.parse(data);

  const updatedOrder = await prisma.order.update({
    where: { id },
    data: { status: parsedData.status },
  });

  return NextResponse.json(updatedOrder);
}
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const session = await auth();
  const user = session?.user;
  const id = (await params).id
  if (!user || user.role !== "ADMIN") {
    return NextResponse.json({ error: "Not authorized" }, { status: 403 });
  }

  await prisma.order.delete({ where: { id } });
  return NextResponse.json({ message: "Order deleted successfully" });
}
