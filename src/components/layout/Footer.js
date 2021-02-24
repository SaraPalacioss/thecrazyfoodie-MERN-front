import React, {Fragment} from "react";
import "../../styles/layout/Footer.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Fragment>
      <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">
          ©2021 Created by{" "}
          <a
            className="color-footer"
            style={{ textDecoration: "none" }}
            href="https://www.linkedin.com/in/sara-palaciosdepedro/"
          >
            Sara Palacios{" "}
          </a>
          || Powered by{" "}
          <a
            className="color-footer"
            style={{ textDecoration: "none" }}
            href="https://www.themealdb.org/"
          >
            TheMealDB.com{" "}
          </a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
