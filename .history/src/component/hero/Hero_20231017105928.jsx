import "./hero.scss";

export default function Hero() {
  return (
      <div className="hero">
          <div className="textContainer">
              <h2>Mohamed Nasr</h2>
              <h1>Web developer and </h1>
          </div>
      <div className="heroImage">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}
