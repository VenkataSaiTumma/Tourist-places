import { styled } from "styled-components";
import {
  MdLocationPin,
  MdCalendarMonth,
  MdPerson,
  MdStar,
} from "react-icons/md";
import { packages } from "../../data";

const Packages = () => {
  return (
    <Wrapper>
      <div className="heading-container" id="section-4">
        <h6>PACKAGES</h6>
        <h2>Awesome Packages</h2>
      </div>

      <div className="Main-container">
        {packages.map((items) => {
          const { id, img, place, price, desc } = items;
          return (
            <article key={id}>
              <div className="pack-box">
                <img src={img} alt="package-click" />
                <div className="package-details">
                  <small>
                    <i>
                      <MdLocationPin />
                      {place}
                    </i>
                  </small>
                  <small>
                    <i>
                      <MdCalendarMonth />3 days
                    </i>
                  </small>
                  <small>
                    <i>
                      <MdPerson /> 2 Person
                    </i>
                  </small>
                </div>

                <div className="align-price">
                  <h3>{price}</h3>
                  <div className="stars-align">
                    <small>
                      <i>
                        <MdStar />
                      </i>
                      <i>
                        <MdStar />
                      </i>
                      <i>
                        <MdStar />
                      </i>
                      <i>
                        <MdStar />
                      </i>
                      <i>
                        <MdStar />
                      </i>
                    </small>
                  </div>
                </div>
                <p>{desc}</p>

                <div className="btns">
                  <a href="#/" className="btn-style">
                    Read More
                  </a>
                  <a href="#/" className="btn-style1">
                    Book Now
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .Main-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pack-box {
    box-shadow: 0 10px 10px rgb(0 0 0 / 0.2);
    margin: 0px 27px 0px 28px;
  }

  img {
    width: 100%;
  }

  .package-details {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid #dee2e6;
  }

  small {
    flex: 1 1 auto !important;
    border-right: 1px solid #dee2e6;
    color: var(--tp-green);
    font-weight: 500;
    text-align: center;
  }

  .align-price {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .stars-align {
    margin-top: -14px;
    font-size: 20px;
  }

  p {
    margin-left: 20px;
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: white;
    font-weight: 500;
    text-decoration: none;
    background-color: var(--tp-green);
    margin-bottom: 14px;
    padding-left: 14px;
    width: 95px;
    height: 26px;
    border-right: 1px solid #dee2e6;
  }

  .btn-style {
    border-radius: 30px 0 0 30px;
  }

  .btn-style1 {
    border-radius: 0 30px 30px 0;
  }

  @media (max-width: 999px) {
    .Main-container {
      display: flex;
      flex-wrap: wrap;
      margin: 0px 0px 0px 92px;
    }

    .pack-box {
      max-width: 80%;
      margin: 16px 0px 12px 0px;
    }

    img {
      width: 100%;
    }
  }
`;

export default Packages;
