"use client";

import { useEffect, useState } from "react";
import TallyForm from "../../components/tallyform";

export default function Home() {
  const [word, setWord] = useState("");

  useEffect(() => {
    async function fetchWord() {
      try {
        const res = await fetch("/api/word");
        const data = await res.json();
        setWord(data.word);
      } catch (error) {
        setWord("Error fetching word");
      }
    }

    fetchWord();
  }, []);

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Word from Make.com:</h2>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>{word}</p>

      <hr style={{ margin: "2rem 0" }} />

      <TallyForm />
    </div>
  );
}
