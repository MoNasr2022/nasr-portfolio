import { useState } from "react";
import "./contact.scss";

export default function Contact() {
    const [data, setData] = useState({})

    const handleChange = (e) => {
    e.preventDefault()
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        console.log(data)
  };
    const handleSubmit = () =>{}

  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <p>mohamednasr@gmail.com</p>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <p>+1 980 613 4226</p>
        </div>
        <div className="item">
          <h2>Address</h2>
          <p>Charlotte, NC</p>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Message me</h1>
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            required
            onChange={handleChange}
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
