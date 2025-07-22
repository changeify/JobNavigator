
import React, { useState } from "react";
import { motion } from "framer-motion";

const buttonData = [
  {
    title: "JETZT STARTEN",
    prompt: "Was hast Du in der Standortanalyse über Dich herausgefunden – in Bezug auf Rollen, Beziehungen, Motivation und Sinn?",
  },
];

function App() {
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  const [responses, setResponses] = useState({});

  const handleInputChange = (prompt, value) => {
    setResponses((prev) => ({ ...prev, [prompt]: value }));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
        Willkommen beim changeify JobNavigator
      </h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {buttonData.map((btn, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedPrompt(btn.prompt)}
            style={{
              backgroundColor: "#FFD84A",
              padding: "1.5rem",
              borderRadius: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {btn.title}
          </motion.div>
        ))}
      </div>
      {selectedPrompt && (
        <div style={{ marginTop: "2rem" }}>
          <p style={{ fontStyle: "italic" }}>{selectedPrompt}</p>
          <textarea
            rows="6"
            style={{ width: "100%", padding: "1rem", fontSize: "1rem" }}
            onChange={(e) => handleInputChange(selectedPrompt, e.target.value)}
          />
        </div>
      )}
    </div>
  );
}

export default App;
