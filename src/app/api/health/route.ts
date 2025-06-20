import { NextResponse } from "next/server";

type ResponseData = {
  message: string;
  status: number;
};

export async function GET() {
  return NextResponse.json<ResponseData>({
    message: "Hello from symptoms AI",
    status: 200,
  });
}
