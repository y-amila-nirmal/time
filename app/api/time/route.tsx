import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const time = new Date();
  return NextResponse.json({
    time: time.toLocaleString(),
    timezone: time.getTimezoneOffset(),
    utc: time.getUTCDate(),
  });
}
