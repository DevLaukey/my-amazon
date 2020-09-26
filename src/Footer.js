import React, { useEffect } from "react";
import "./Footer.css";
import { Link } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

function Footer() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="footer" data-aos-anchor-placement="bottom-center">
      <Link
        data-aos="fade-left"
        to="https://devlaukey.github.io/Victor-2.0/"
        target="_blank"
      >
        <p className="footer_name">
          Made by <br /> Laukey Mwaura
        </p>
        <p className="footer_copyright">Dev Laukey Mwaura &copy;2020</p>
      </Link>
    </div>
  );
}

export default Footer;
