"use client";

import React from "react";
import moment from "moment";

export default function Page() {
  const [time, setTime] = React.useState(moment().utc().toLocaleString());
  return <p>{time}</p>;
}
