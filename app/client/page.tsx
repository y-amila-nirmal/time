"use client";

import React from "react";

export default function Page() {
  const [time, setTime] = React.useState(new Date().toLocaleString());
  return <p>{time}</p>;
}
