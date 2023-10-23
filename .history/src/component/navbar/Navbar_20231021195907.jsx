import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar id = "Side"/>

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Nasr
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/profile.php?id=100040938111102"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.png" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/engmahamednasr/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/instagram.png" alt="instagram" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-nasr-b55510174/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/linkedin.png" alt="linledin" />
          </a>
          <a
            href="https://twitter.com/MFM_Nasr"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/twiter.png" alt="twiter" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
