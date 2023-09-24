import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TitlePage = ({ title }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Home</Link>
          {<Link to="/">/ Pages</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    background: transparent;
    width: 100%;
    padding-left: 40px;
    color: #07689f;
  }

  h3,
  a {
    color: white;
  }

  a {
    text-decoration: none;
    padding: 0.5rem;
    transition: all 0.3s linear;
  }
`;

export default TitlePage;
