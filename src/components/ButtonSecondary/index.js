import { Button as AntButton } from "antd";
import styled from "styled-components";
import "../../assets/styles/_variables.scss";

const ButtonSecondary = styled(AntButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 6px;
  // border-radius: 4px;

  cursor: pointer;
  height: 46px;

  ${(props) =>
    props.type === "primary" &&
    `
  color: #b71d21;
  background-color: #ffffff;
  border: 0.2px solid #b71d21;
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
  color:#ffffff;
  background-color: #b71d21;
  border: 0.2px solid #b71d21;
  `}

  ${(props) =>
    props.type === "third" &&
    `
  color:#ffffff;
  background-color: #288ad6;
  border-radius: 4px;
  `}

  ${(props) =>
    props.type === "fourth" &&
    `
  color:#ffffff;
  background-color: #338dbc;
  border-radius: 4px;
  `}

  ${(props) =>
    props.size === "full-btn" &&
    `
  width: 100%;
  `}
`;

export default ButtonSecondary;
