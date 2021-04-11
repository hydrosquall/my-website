import React from 'react';
import styled from "styled-components";
import './LoaderCircle.css';

const LoaderStyle = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
`;

const DivStyle = styled.div`
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
  &:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: ${(props) => props.background || '#999999'};
    opacity: ${(props) => props.opacity || '1'};
    margin: -4px 0 0 -4px;
  }
`;

const Loader = ({color, opacity}) => (
  <LoaderStyle className="lds-roller">
    {[...Array(8)].map(() => <DivStyle background={color} opacity={opacity}/>)}
  </LoaderStyle>
)

export default Loader;
