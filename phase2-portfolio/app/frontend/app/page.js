"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioPage from "./components/PortfolioPage";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/data")
      .then((res) => setData(res.data))
      .catch(() => setError(true));
  }, []);

  if (error)
    return (
      <div className="flex h-screen items-center justify-center text-red-600 text-xl">
        ❌ Error: Cannot reach backend
      </div>
    );

  if (!data)
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading...
      </div>
    );

  return (
    <PortfolioPage
      version={data.version}
      hostname={data.hostname}
      time={data.time}
      color={data.color}
      weight={data.weight}
      message={data.message}
      random={data.random}
    />
  );
}
