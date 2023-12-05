import { mockData } from "../../../data/products";
import { NextResponse } from "next/server";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(request, { params: { categoria } }) {
  const data =
    categoria === "todos"
      ? mockData
      : mockData.filter((item) => item.tipo === categoria);

  await sleep(1000);
  return NextResponse.json(data);
}