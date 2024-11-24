import { NextResponse, NextRequest } from "next/server";
import { addUser, User } from "../data";

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const newUser: Omit<User, "id"> = {
      name: reqBody.name || "Unnamed",
      email: reqBody.email,
      password: reqBody.password,
      image: "/images/avatar/avatar-3.jpg",
      resetToken: null,
      resetTokenExpiry: null,
      profile: null,
    };

    const createdUser = await addUser(newUser);

    if (!createdUser) {
      return NextResponse.json({
        status: "fail",
        message: "User already exists",
      }, { status: 400 });
    }

    return NextResponse.json({
      status: "success",
      message: "생성이 완료되었습니다.",
      data: createdUser,
    }, { status: 201 });
  } catch (e) {
    console.error("An error occurred:", e);
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: e,
    }, { status: 500 });
  }
}