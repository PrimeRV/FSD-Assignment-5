
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className="container">
      <h1>Controlled React Form</h1>

      <form>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Phone:</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </form>

      <div className="preview">
        <h2>Live Preview</h2>
        <p>Name: {name || "Not entered yet"}</p>
        <p>Email: {email || "Not entered yet"}</p>
        <p>Phone: {phone || "Not entered yet"}</p>
      </div>
    </div>
  );
}

export default App;
