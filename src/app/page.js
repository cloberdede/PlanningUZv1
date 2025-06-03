"use client";

import { useEffect, useState } from "react";
import TallyForm from "../../components/tallyform";

export default function Home() {
  const [word, setWord] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWord() {
      try {
        const res = await fetch("/api/word");
        const data = await res.json();
        setWord(data.word);  // assuming this is a URL like "https://example.com"
      } catch (error) {
        console.error("Error fetching word:", error);
      } finally {
        setLoading(false); // stop showing "Loading..."
      }
    }

    fetchWord();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Word from Make.com:</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        word && (
          <button
            onClick={() => window.open(word, "_blank")}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#0070f3",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Open link
          </button>
        )
      )}

      <hr style={{ margin: "2rem 0" }} />

      <TallyForm />
    </div>
  );
}
