import styled from "styled-components";
import { footer1, footer2, footer3, footsocial } from "../../data";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-main" id="section-5">
        <div className="footer-one">
          <h4>Company</h4>
          {footer1.map((item1) => {
            const { id, icon, name } = item1;
            return (
              <a href="#/" className="company-hover" key={id}>
                <i>{icon}</i>
                {name}
              </a>
            );
          })}
        </div>

        <div className="footer-two">
          <h4>Contact</h4>
          {footer2.map((item2) => {
            const { id, icon, name } = item2;
            return (
              <a href="#/" className="contact-hover" key={id}>
                <i>{icon}</i>
                {name}
              </a>
            );
          })}

          <div className="social">
            {footsocial.map((social) => {
              const { id, icon } = social;
              return (
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="a"
                  key={id}
                >
                  <p className="icon">{icon}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer-three">
          <h4>Services</h4>
          {footer3.map((item3) => {
            const { id, icon, name } = item3;
            return (
              <a href="#/" className="services-hover" key={id}>
                <i>{icon}</i>
                {name}
              </a>
            );
          })}
        </div>
      </div>

      <div className="all-reserved">
        <h3>
          All rights reserved &copy; {new Date().getFullYear()}
          <span> Classy Luxury</span>
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #14141f;

  .footer-main {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
  }

  .footer-one {
    max-width: 25%;
    display: grid;
  }

  h4,
  a,
  i {
    color: #fff;
    padding-right: 10px;
  }

  a {
    text-decoration: none;
    padding-top: 14px;
  }

  .company-hover:hover {
    letter-spacing: 1px;
  }

  .footer-two {
    display: grid;
  }

  .contact-hover:hover {
    letter-spacing: 1px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .a {
    width: 30px;
    height: 26px;
    border-radius: 50px;

    margin: 22px 6px 0px 0px;
    border: 1px solid #fff;
    background-color: #14141f;
  }

  .icon {
    color: #fff;
    margin: -6px 0px 0px 8px;
    font-size: 22px;
  }

  .a:hover {
    background-color: #fff;
    .icon {
      color: var(--tp-green);
    }
  }

  .footer-three {
    display: grid;
  }

  .services-hover:hover {
    letter-spacing: 1px;
  }

  .all-reserved {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h3 {
    color: #fff;
    letter-spacing: 0.1rem;
    font-size: 15px;
  }

  @media (max-width: 500px) {
    .footer-one {
      max-width: none;
    }
  }
`;

export default Footer;
