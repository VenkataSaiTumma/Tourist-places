import { styled } from "styled-components";
import B1 from "./B1.jpg";
import { useState } from "react";

const HomePage = () => {
  const [values, setValues] = useState({
    city: "",
  });

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  const HandleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Wrapper id="section-1">
      <img src={B1} alt="bg-click" className="bg-image" />
      <div className="home-content">
        <h1 className="animated slideInDown">Enjoy Your Vacation With Us</h1>
        <p className="animated slideInDown">
          Pariatur ad adipisicing sunt esse nostrud magna voluptate non minim.
        </p>

        <form onSubmit={HandleSubmit} className="animated slideInDown">
          <input
            type="text"
            name="city"
            value={values.city}
            onChange={HandleChange}
            placeholder="Eg: Thailand"
          />
          <button className="search-btn">Search</button>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .home-content {
    color: white;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 20px;
    text-align: center;
    overflow: hidden;
  }

  h1 {
    font-size: calc(1.525rem + 3.3vw);
    font-weight: 800;
    line-height: 1.2;
    font-family: "Nunito", sans-serif;
    color: #fff;
  }

  p {
    font-size: calc(1.275rem + 0.3vw) !important;
  }

  input {
    width: 70%;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: #808b8d;
    padding-left: 27px;
  }

  .search-btn {
    background-color: var(--tp-green);
    width: 80px;
    height: 35px;
    border-radius: 20px;
    border: none;
    color: white;
    letter-spacing: 0.1rem;
    margin-left: -95px;
  }
`;

export default HomePage;
