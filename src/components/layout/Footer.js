import React, { Fragment } from "react";

import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
    <Fragment>
      <footer className={classes.footer}>
        <div className={classes.outerdiv}>
          <nav className={classes.footernav}>
            <div className={classes.gridfirefox}>
              <a className={classes.mozlogo}></a>
            </div>
            <div className={classes.footergrid}>
              <div>
                <h5 className={classes.gridh5}>Company</h5>
                <ul className={classes.gridlist}>
                  <li>Mozilla Manifesto</li>
                  <li>Press Center</li>
                  <li>Corporate Blog</li>
                  <li>Careers</li>
                  <li>Contact</li>
                  <li>Donate</li>
                </ul>
              </div>
              <div>
                <h5 className={classes.gridh5}>Resources</h5>
                <ul className={classes.gridlist}>
                  <li>Privacy Hub</li>
                  <li>Browser Comparison</li>
                  <li>Brand Standards</li>
                </ul>
              </div>
              <div>
                <h5 className={classes.gridh5}>Support</h5>
                <ul className={classes.gridlist}>
                  <li>Product Help</li>
                  <li>File a bug</li>
                </ul>
              </div>
              <div>
                <h5 className={classes.gridh5}>Resources</h5>
                <ul className={classes.gridlist}>
                  <li>Developer Edition</li>
                  <li>Beta</li>
                  <li>Beta for Android</li>
                  <li>Nightly</li>
                  <li>Nightly for Android</li>
                  <li>Enterprise</li>
                  <li>Tools</li>
                </ul>
              </div>
              <div>
                <h5 className={classes.gridh5}>Follow @Mozilla</h5>
                <ul className={classes.gridlist}>
                  <li className={classes.twitterlink}>
                    <a href="https://twitter.com"></a>
                  </li>
                  <li className={classes.instagramlink}>    </li>
                  <li className={classes.linkedinlink}></li>
                  <li className={classes.tiktoklink}></li>
                  <li className={classes.spotifylink}></li>
                </ul>
                <h5 className={classes.gridh5}>Follow @Firefox</h5>
                <ul className={classes.socials}>
                  <li className={classes.twitterlink}></li>
                  <li className={classes.instagramlink}></li>
                  <li className={classes.youtubelink}></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className={classes.divideline}></div>
          <nav className={classes.secondfooter}>
            <div></div>
            <div className={classes.legaldiv}>
                <ul className={classes.ullist}>
                    <li className={classes.listitem}>Website Privacy Notice</li>
                    <li className={classes.listitem}>Cookies</li>
                    <li className={classes.listitem}>Legal</li>
                    <li className={classes.listitem}>Community Participation Guidelines</li>
                    <li className={classes.listitem}>About this site</li>
                </ul>
                <p>Visit <a>Eldek Corporation</a></p>
                <p>Portions of this content are ©1998–2022 by individual mozilla.org contributors. Content available under a Creative Commons license.</p>
            </div>
          </nav>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
