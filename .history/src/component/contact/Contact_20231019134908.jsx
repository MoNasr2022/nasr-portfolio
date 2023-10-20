import "./contact.scss";

export default function Contact() {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <hg1>Mail</hg1>
          <p>mohamednasr@gmail.com</p>
        </div>
        <div className="item">
          <hg1>Phone</hg1>
          <p>+1 980 613 4226</p>
        </div>
        <div className="item">
          <hg1>Address</hg1>
          <p>Charlotte, NC</p>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <hg1>Message me</hg1>
          <input type="text" placeholder="Name" name="name" required />
          <input type="text" placeholder="Email" name="email" required />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
