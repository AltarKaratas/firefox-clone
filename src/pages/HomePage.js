import React, { Fragment } from "react";

import classes from "./HomePage.module.css";

import svg from "../firefox.svg";

const HomePage = () => {
  return (
    <div className={classes.home}>
      <section className={classes.firstsection}>
        <div className={classes.splitcontainer}>
          <img src={svg} alt="selam" />
          <div className={classes.splitbody}>
            <div className={classes.logocontainer}>
              <img
                className={classes.logo}
                src={
                  "https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo-word-hor.7ff44b5b4194.svg"
                }
                alt="eldek"
              />
            </div>
            <h2>How to talk to kids about online safety</h2>
            <p className={classes.moztext}>
              Check out Firefox’s Tech Talk to get pointers and download the
              Super-Official Family Tech Agreement.
            </p>
            <p className={classes.button}>Start the conversation</p>
          </div>
        </div>
      </section>
      <section className={classes.secondsection}>
        <div className={classes.backgroundsecondary}>
          <div className={classes.grid}>
            <div className={classes.imgcontainer}>
              <img className={classes.treeimage} src="https://images.ctfassets.net/w5er3c7zdgmd/3vukypoPTTpRYctNjWoUkc/03dfba34b9aab288f7c25d257a621cf0/billboard-more-power-high-res.5e9e07e1024c.png?w=800" alt="eldek" />
            </div>
            <div>
              <h2 className={classes.power}>More power to you</h2>
              <p className={classes.text}>Mozilla puts people before profit, creating products, technologies and programs that make the internet healthier for everyone.</p>
              <p className={classes.text}><a>Learn more about us</a></p> 
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
