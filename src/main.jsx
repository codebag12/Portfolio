import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./components/Profile";
import Contact from "./components/Contact.jsx/";
import "./App.jsx";

const experience = {
  company_a: {
    name: "company aaa",
  },

  company_b: {
    name: "company b",
  },
};

const applications = ["google", "Globa", "Canva"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />

    <Profile
      name="Tarzan Rambo"
      position="bank robber"
      experiences={experience}
    />

    {applications.length && (
      <>
        <h2>applications</h2>
        <ul>
          {applications.length ? (
            applications.map((item, index) => {
              return <li key={index}>{item}</li>;
            })
          ) : (
            <li>No Applications</li>
          )}
        </ul>
      </>
    )}
    <Contact />
  </React.StrictMode>
);
