import React from "react";
import "../App.css";
import "./Translation.css";

const Translation = props => {
  return (
    <div className="translation-component bg-light w-50 h-50">
      <h1 className="translation-this text-center">
        How to translate Stolpersteine
      </h1>
      <h4>Here lived... </h4>
      <p>
        The typical layout of a Stolperstein includes the following information,
        if known:
      </p>
      <ul>
        <li>"Here lived"</li>
        <li>The victim's name (and maiden name if applicable)</li>
        <li>Date of Birth</li>
        <li>
          Information about deportation or incarceration and date of death, if
          known. Some markers will also mention the cause of death, if known.
          Some examples are:
          <ul className="px-5">
            <li>
              <span className="font-italic">
                {" "}
                "Erschossen (auf der Flucht)"{" "}
              </span>{" "}
              - shot (while trying to escape)
            </li>
            <li>
              <span className="font-italic"> "Ermordet" </span> - murdered
            </li>
            <li>
              <span className="font-italic">"Freitod"</span> - suicide
            </li>
            <li>
              <span className="font-italic">"Verschollen"</span> - missing
            </li>
            <li>
              <span className="font-italic">"Für tot erklärt"</span> - declared
              dead
            </li>
          </ul>
        </li>
      </ul>
      <p>
        To learn more about Stolpersteine visit the artist Gunter Demnig's
        website at{" "}
        <a
          href="http://http://www.stolpersteine.eu/en/"
          alt="Link to the artist's webpage"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.stolpersteine.eu/.en
        </a>
        , or{" "}
        <a
          href="https://en.wikipedia.org/wiki/Stolperstein"
          target="_blank"
          rel="noopener noreferrer"
        >
          click here to be referred to Wikipedia
        </a>
        .
      </p>
      <div className="text-center">
        <button
          className="btn btn-light btn-outline-dark btn-sm"
          onClick={props.translationModalClickHandler}
          alt="close the translation help box"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Translation;
