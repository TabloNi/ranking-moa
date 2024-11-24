import { NextResponse } from "next/server";
import { categories } from "../data";
export async function GET(request, response) {
  return NextResponse.json({
    status: "success",
    message: "생성이 완료되었습니다",
    data: categories,
  });
}
