"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("/api/backend")
      .then((res) => setData(res.data))
      .catch((err) => setError(true));
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

  const lightTheme = "bg-white text-black";
  const darkTheme = "bg-gray-900 text-white";

  const theme = data.theme === "dark" ? darkTheme : lightTheme;

  return (
    <div className={`min-h-screen p-10 transition-all ${theme}`}>
      <h1 className="text-4xl font-bold mb-4">
        DevOps Portfolio — <span className="text-blue-500">{data.version}</span>
      </h1>

      <p className="text-xl mb-4">{data.intro}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2">Skills</h2>

      <ul className="list-disc pl-5">
        {data.skills.map((skill, i) => (
          <li key={i}>{skill}</li>
        ))}
      </ul>

      <p className="mt-6 text-lg text-green-400">{data.message}</p>
    </div>
  );
}
