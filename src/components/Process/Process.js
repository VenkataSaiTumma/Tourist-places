import { styled } from "styled-components";
import { process } from "../../data";

const Process = () => {
  return (
    <Wrapper>
      <div className="process-container">
        <div className="heading-container">
          <h6>PROCESS</h6>
          <h2>3 Easy Steps</h2>
        </div>
        <div className="process-steps">
          {process.map((items) => {
            const { id, icon, name, desc } = items;
            return (
              <div key={id} className="process-one">
                <div className="process-icon">
                  <i>{icon}</i>
                </div>
                <h5>{name}</h5>
                <hr className="hr1" />
                <hr className="hr2" />
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .process-container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .process-steps {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 20px;
  }

  .process-one {
    width: 30%;
    height: auto;
    border-color: #86b817;
    border: 1px solid #dee2e6;
    margin: 32px 0px 0px 39px;
  }

  .process-icon {
    width: 96px;
    height: 85px;
    border-radius: 50%;
    background-color: var(--tp-green);
    position: absolute;
    margin: -24px 0px 0px 158px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  }

  i {
    color: white;
    font-size: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
  }

  h5 {
    text-align: center;
    font-size: 25px;
    padding-top: 35px;
  }

  .hr1,
  .hr2 {
    background-color: #86b817;
    height: 1px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 0.25rem;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  .hr1 {
    width: 25%;
  }

  .hr2 {
    width: 50%;
  }

  p {
    max-width: 80%;
    padding-left: 30px;
    text-align: center;
  }

  @media (max-width: 1326px) {
    .process-icon {
      margin: -30px 0px 0px 136px;
    }
  }

  @media (max-width: 1000px) {
    .process-icon {
      margin: -30px 0px 0px 74px;
    }
  }

  @media (max-width: 800px) {
    .process-icon {
      margin: -30px 0px 0px 67px;
    }
  }

  @media (max-width: 661px) {
    .process-icon {
      margin: -30px 0px 0px 40px;
    }
  }

  @media (max-width: 560px) {
    .process-steps {
      display: grid;
    }

    .process-one {
      width: 80%;
      margin-left: 46px;
      padding: 0px 14px 28px 6px;
    }

    .process-icon {
      left: 32%;
    }
  }
`;

export default Process;
