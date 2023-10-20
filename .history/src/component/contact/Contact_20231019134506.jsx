import "./contact.scss";

export default function Contact() {
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
        <form>
          <h2>Message me</h2>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
