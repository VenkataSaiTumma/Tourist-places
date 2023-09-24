import { styled } from "styled-components";
import about from "./about.jpg";
import { AboutDetails, AboutDetails1 } from "../../data";

const About = () => {
  return (
    <Wrapper>
      <div className="about-container">
        <img src={about} alt="about-click" id="section-2" />

        <div className="about-main">
          <h6>ABOUT US</h6>
          <h2>
            Welcome to <span>Tourist</span>
          </h2>
          <p>
            Nisi labore amet magna id aliquip pariatur sit nulla incididunt
            velit et. Anim amet labore ut proident labore deserunt. Ullamco
            eiusmod mollit non do irure et dolore commodo ipsum.
            <br />
            Officia ut quis enim labore exercitation ullamco. Ullamco culpa
            irure elit dolore eiusmod laboris commodo dolor nisi commodo. Ea non
            esse veniam cupidatat minim labore ut duis cupidatat eiusmod
            occaecat officia eiusmod.
          </p>

          <div className="arrow-flex">
            <div>
              {AboutDetails.map((items) => {
                const { id, icon, name } = items;
                return (
                  <div className="arrow-grid" key={id}>
                    <p className="arrow-text">
                      <i>{icon}</i>
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>

            <div>
              {AboutDetails1.map((item) => {
                const { id, icon, name } = item;
                return (
                  <div className="arrow-grid" key={id}>
                    <p className="arrow-text">
                      <i>{icon}</i>
                      {name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .about-container {
    display: flex;
    padding: 61px 0px 0px 98px;
  }

  img {
    width: 40%;
    height: 438px;
    border-radius: 10px;
    margin: 0px 49px 0px -23px;
  }

  .about-main {
    display: grid;
  }

  span,
  i {
    color: var(--tp-green);
  }

  p {
    line-height: 1.8rem;
  }

  .arrow-flex {
    display: flex;
  }

  .arrow-grid {
    display: grid;
  }

  .arrow-text {
    margin: 11px 66px 7px -6px;
  }

  i {
    margin-right: 10px;
  }

  @media (max-width: 993px) {
    .about-container {
      display: grid;
      padding: 61px 0px 0px 57px;
      max-width: 80%;
    }

    img {
      width: 80%;
      height: 300px;
      border-radius: 10px;
    }

    .arrow-text {
      margin: 11px 66px 7px -6px;
    }

    i {
      margin-right: 10px;
    }
  }

  @media (max-width: 564px) {
    .arrow-flex {
      display: grid;
    }
  }
`;

export default About;
