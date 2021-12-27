import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const ContainerDivButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  background-color: #000;
  border: 0;
  outline: none;
  color: #fff;
  padding: 7px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-family: "Catamaran", sans-serif;
  font-size: 16px;
`;
const ListPages = ({ pageInit, pageFinish, prev, next }) => {
  return (
    <ContainerDivButton>
      <Button onClick={prev}>Prev</Button>
      <div
        style={{
          margin: "0 1rem",
        }}
      >
        <span>{pageInit}</span> / <span>{pageFinish}</span>
      </div>
      <Button onClick={next}>Next</Button>
    </ContainerDivButton>
  );
};

ListPages.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  pageInit: PropTypes.string,
  pageFinish: PropTypes.number,
};
export default ListPages;
