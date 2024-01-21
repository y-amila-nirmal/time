"use client";

import React from "react";

export default function Page() {
  const [time, setTime] = React.useState(new Date().toLocaleTimeString());
  return <p>{time}</p>;
}
