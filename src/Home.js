import "./App.css";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);

  const onInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NavLink to="/pokedex">
            <img
              hidden={text === "Ready!" ? isReady : !isReady}
              src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
              className="App-logo"
              alt="logo"
              style={{ padding: "15px" }}
            />
          </NavLink>
        </div>
        <b>
          Requirement: Try to show the hidden image and make it clickable that
          goes to /pokedex when the input below is "Ready!" remember to hide the
          red text away when "Ready!" is in the textbox.
        </b>
        <p>Are you ready to be a pokemon master?</p>
        <input
          type="text"
          id="name"
          name="name"
          value={text}
          onChange={onInputChange}
        />
        <span style={{ color: "red" }}>
          {text === "Ready!" ? "" : "I am not ready yet!"}
        </span>
      </header>
    </div>
  );
}

export default Home;
