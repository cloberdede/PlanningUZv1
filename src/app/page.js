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

        if (typeof data.word === "string" && data.word.startsWith("https://docs.google.com")) {
          setWord(data.word);
          setLoading(false);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération du mot :", error);
      }
    }

    fetchWord();
  }, []);

  return (
    <div style={{ padding: "1rem", textAlign: "center" }}>

      {loading ? (
        <div style={{ marginTop: "2rem" }}>
          <div className="spinner" />
          <p style={{ marginTop: "1rem", fontSize: "1.1rem" }}>Génération des activités...</p>
        </div>
      ) : (
        <button
          onClick={() => window.open(word, "_blank")}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem"
          }}
        >
          Open link
        </button>
      )}

      <hr style={{ margin: "2rem 0" }} />

      <TallyForm />

      <style jsx>{`
        .spinner {
          margin: 0 auto;
          width: 40px;
          height: 40px;
          border: 4px solid #ddd;
          border-top: 4px solid #0070f3;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
