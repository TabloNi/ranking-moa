import { NextResponse, NextRequest } from "next/server";
import { projects } from "./data";
import { v4 as uuidv4 } from 'uuid'; // UUID 패키지 임포트

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, response: NextResponse) {
  return NextResponse.json(projects, { status: 200 });
}

export async function POST(request: NextRequest, response: NextResponse) {
  const newItem = await request.json();

  // UUID를 사용하여 새로운 id 생성
  newItem.id = uuidv4();

  // 새로운 프로젝트를 배열에 추가
  projects.push(newItem);
  console.log(newItem, "새로운 프로젝트 추가됨");

  return NextResponse.json(newItem, { status: 201 });
}