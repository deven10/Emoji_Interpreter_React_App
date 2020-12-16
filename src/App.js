import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "smiling",
  "😂": "laughing",
  "❤": "love",
  "🤞": "promise",
  "😢": "sad",
  "😒": "annoyance",
  "😴": "sleepy",
  "😎": "cool",
  "😡": "angry"
};
var emojisweknow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Sorry we don't know this emoji.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Check what Emoji's mean</h1>
      <input
        style={{
          borderColor: "black",
          borderRadius: "5px",
          padding: "10px"
        }}
        onChange={emojiInputHandler}
      />
      <h2
        style={{
          textAlign: "center",
          width: "30%",
          margin: "20px auto",
          padding: "10px",
          backgroundColor: "#F5F5F5",
          borderRadius: "5px"
        }}
      >
        {meaning}
      </h2>
      <h3>
        {emojisweknow.map(function (emoji) {
          return (
            <span
              onClick={() => emojiClickHandler(emoji)}
              style={{ cursor: "pointer", fontSize: "2rem", padding: "0.7rem" }}
              key={emoji}
            >
              {emoji}
            </span>
          );
        })}
      </h3>
    </div>
  );
}
