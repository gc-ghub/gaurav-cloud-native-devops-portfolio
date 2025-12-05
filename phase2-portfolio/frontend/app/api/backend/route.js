import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get("http://portfolio-backend:5000/api/data");
    return new Response(JSON.stringify(res.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return new Response(
      JSON.stringify({ error: "Backend unreachable" }),
      { status: 500 }
    );
  }
}
