import { styled } from "styled-components";
import { services } from "../../data";

const Services = () => {
  return (
    <Wrapper>
      <div className="heading-container" id="section-3">
        <h6>SERVICES</h6>
        <h2>Our Services</h2>
      </div>

      <div className="main-container">
        {services.map((items) => {
          const { id, name, icon, desc } = items;
          return (
            <article key={id}>
              <div className="service-box">
                <div className="service-content">
                  <i>{icon}</i>
                  <h5>{name}</h5>
                  <p>{desc}</p>
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
  .main-container {
    display: flex;
    flex-wrap: wrap;
    padding: 0px 0px 0px 140px;
  }

  .service-box {
    max-width: 250px;
    height: 250px;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.08);
    margin: 15px 0px 0px 32px;
    border-radius: 10px;
  }

  .service-box:hover {
    background-color: var(--tp-green);
    i,
    h5,
    p {
      color: white;
    }
  }

  .service-content {
    padding: 17px 0px 0px 16px;
  }

  i {
    font-size: 50px;
    color: var(--tp-green);
  }

  h5 {
    font-size: 1.5rem;
    margin-top: 15px;
  }

  p {
    margin-top: 15px;
  }

  @media (max-width: 999px) {
    .main-container {
      padding: 0px 0px 0px 35px;
    }

    .service-content {
      margin: 40px 0px 0px 20px;
    }
  }

  @media (max-width: 595px) {
    .service-box {
      max-width: 95%;
      margin-left: -5px;
    }
  }
`;

export default Services;
