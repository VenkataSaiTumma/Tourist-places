import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { guides } from "../../data";

const TravelGuide = () => {
  return (
    <Wrapper>
      <div className="travel-container">
        <div className="heading-container">
          <h6>TRAVEL GUIDE</h6>
          <h2>Meet Our Guide</h2>
        </div>

        <div className="Main-container">
          {guides.map((items) => {
            const { id, img, name, title } = items;

            return (
              <div className="travel-box" key={id}>
                <img src={img} alt="travel-click" />
                <div className="social">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebook className="icon" />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaTwitter className="icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="icon" />
                  </a>
                </div>
                <div className="guide-details">
                  <h5>{name}</h5>
                  <small>{title}</small>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }

  .travel-box {
    width: 282px;
    height: 50%;
    margin-left: 49px;
    margin-bottom: 30px;
    box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
  }

  img {
    width: 282px;
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 39px;
    height: 39px;
    border-radius: 50px;
    box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
    margin: -18px 14px 0px 0px;
    background-color: white;
  }

  .icon {
    color: var(--tp-green);
    margin: 9px;
    font-size: 22px;
  }

  a:hover {
    background-color: var(--tp-green);
    .icon {
      color: white;
    }
  }

  h5 {
    font-family: "Nunito", sans-serif;
    font-weight: 800;
    line-height: 1.2;
    color: #2c3e50;
  }

  small {
    font-size: 0.8rem;
    position: absolute;
    margin: -20px 0px 0px -30px;
    color: #808b8d;
    font-weight: 400;
    font-family: "Heebo", sans-serif;
  }

  .guide-details {
    text-align: center;
  }

  @media (max-width: 513px) {
    .travel-box {
      margin-left: 10px;
    }
  }
`;

export default TravelGuide;
