import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { calendarEvents } from "./data";

export async function GET(request:NextRequest , response: NextResponse) {
  try {
    return NextResponse.json({
      status: "success",
      message: "Event created successfully",
      data: calendarEvents,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}

export async function POST(request: NextRequest, response: NextResponse) {
  try {
    let reqBody = await request.json();
    reqBody.id = calendarEvents.length + 1;
    calendarEvents.push(reqBody);

    return NextResponse.json({
      status: "success",
      message: "생성이 완료되었습니다.",
      data: reqBody,
    });
  } catch (error) {
    return NextResponse.json({
      status: "fail",
      message: "Something went wrong",
      data: error,
    });
  }
}
