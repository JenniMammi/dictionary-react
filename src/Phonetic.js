import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="pronunciation">"{props.phonetic.text}"</div>
      <div className="listen-button">
        <a href={props.phonetic.audio} target="_blank">
          Listen
        </a>
      </div>
    </div>
  );
}
