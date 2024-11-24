import { NextResponse, NextRequest } from "next/server";
import { projects } from "../data";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const item = projects.find((item) => item.id === id);
  if (item) {
    return NextResponse.json(item, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const payloadItem = await request.json();
  const index = projects.findIndex((item) => item.id === params.id);
  if (index !== -1) {
    projects[index] = { ...projects[index], ...payloadItem };
    return NextResponse.json({ message: "Item updated successfully" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;
  const index = projects.findIndex((item) => item.id === id);
  if (index !== -1) {
    projects.splice(index, 1);
    return NextResponse.json({ message: "Item deleted successfully" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Item not found" }, { status: 404 });
  }
}
