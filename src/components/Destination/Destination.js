import { styled } from "styled-components";
import dest1 from "./dest1.jpg";
import dest2 from "./dest2.jpg";
import dest3 from "./dest3.jpg";
import dest4 from "./dest4.jpg";

const Destination = () => {
  return (
    <Wrapper>
      <div className="heading-container">
        <h6>DESTINATION</h6>
        <h2>Popular Destination</h2>
      </div>
      <div className="dest-container">
        <div className="main-container">
          <div className="container">
            <img src={dest1} alt="destination-click" className="dest1-image" />
            <div className="overlay">
              <div className="text"> 30% OFF | Thailand</div>
            </div>
          </div>

          <div className="dest-main2">
            <div className="container">
              <img
                src={dest2}
                alt="destination-click"
                className="dest2-image"
              />
              <div className="overlay">
                <div className="text"> 25% OFF | Malaysia</div>
              </div>
            </div>

            <div className="container">
              <img
                src={dest3}
                alt="destination-click"
                className="dest2-image"
              />
              <div className="overlay">
                <div className="text"> 25% OFF | Malaysia</div>
              </div>
            </div>
          </div>
        </div>

        <div className="third-image">
          <div className="container">
            <img src={dest4} alt="destination-click" className="dest4-image" />
            <div className="overlay-img">
              <div className="text"> 20% OFF | Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .dest-container {
    display: flex;
    margin-bottom: 20px;
  }

  .main-container {
    max-width: 50%;
    padding: 0px 0px 0px 109px;
  }

  .container {
    position: relative;
    margin-right: 5px;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: auto;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--tp-green);
  }

  /* Side Image */
  .overlay-img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 33px;
    right: 0;
    height: 100%;
    width: 90%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: var(--tp-green);
  }

  .container:hover .overlay {
    opacity: 0.8;
  }

  .container:hover .overlay-img {
    opacity: 0.8;
  }

  .text {
    color: black;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  .dest1-image {
    width: 100%;
  }

  .dest-main2 {
    display: flex;
    margin-top: 30px;
  }

  .dest2-image {
    width: 100%;
    height: 250px;
  }

  .dest4-image {
    width: 90%;
    height: 534px;
    margin: 0px 0px 0px 35px;
  }

  @media (max-width: 999px) {
    .dest-main2 {
      display: grid;
    }

    .dest2-image {
      width: 100%;
      height: 180px;
    }

    .dest4-image {
      width: 80%;
      height: 582px;
    }
  }

  @media (max-width: 760px) {
    .dest-container {
      display: grid;
    }

    .dest1-image,
    .dest2-image {
      width: 120%;
    }

    .dest4-image {
      width: 60%;
      height: 300px;
      margin: 20px 2px 0px 105px;
    }

    .overlay {
      width: 120%;
    }

    .overlay-img {
      width: 60%;
      height: 93%;
      left: 14.3%;
      top: 6.8%;
    }
  }

  @media (max-width: 630px) {
    .overlay-img {
      left: 20%;
    }
  }

  @media (max-width: 440px) {
    .overlay-img {
      left: 25.8%;
    }
  }
`;

export default Destination;
