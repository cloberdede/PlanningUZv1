let currentWord = "initial"; // Temporary in-memory storage

export async function GET() {
  return new Response(JSON.stringify({ word: currentWord }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request) {
  try {
    const { word } = await request.json();

    if (!word) {
      return new Response(JSON.stringify({ error: "Missing word" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    currentWord = word;

    return new Response(JSON.stringify({ message: "Word updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
