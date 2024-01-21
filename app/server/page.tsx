import React from "react";

export const dynamic = "force-dynamic";

export default async function Page() {
  const time = new Date().toLocaleTimeString();
  return <p>{time}</p>;
}
