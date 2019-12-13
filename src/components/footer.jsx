import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <section className="footer">
        <div className="footer__heading">
          <h1>Spear</h1>
        </div>
        <div className="footer__body">
          <div className="footer__nav">
            <ul className="footer__nav--list">
              <li className="footer__nav--item">Home</li>
              <li className="footer__nav--item">Company</li>
              <li className="footer__nav--item">About</li>
              <li className="footer__nav--item">Contact</li>
              <li className="footer__nav--item">Team</li>
              <li className="footer__nav--item">Portfolio</li>
            </ul>
          </div>
          <div className="footer__right">
            © 2020 all reight reserved for islam Mostafa
          </div>
        </div>
      </section>
    );
  }
}
export default Footer;
