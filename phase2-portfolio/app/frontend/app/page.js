"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import PortfolioPage from "./components/PortfolioPage";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/backend")
      .then((res) => setData(res.data))
      .catch((err) => {
        console.error(err);
        setError(true);
      });
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
      hostname={data.hostname ?? "N/A"}
      time={data.time ?? new Date().toLocaleString()}
      color={data.color}
    />
  );
}
