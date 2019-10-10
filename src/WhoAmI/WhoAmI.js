import React from "react";
import './WhoAmI.css';
//import { Link } from "react-router-dom/cjs/react-router-dom";
import styled from 'styled-components'


const Who = styled.div`
    width: 95%;
    justify-content: space-evenly;
    line-height: 1.5;
    margin: 0 auto;
    text-align: center;
    color: black;
    padding: 20px;

`

function WhoAmI() {
  return (
      <div className='container_W '>
    <Who>
      <p>
        Hi, I am Sonia T. Sanchez, welcome to my personal site.
        <br></br>
        I attended workshops and meetups in the London area and was
        excited by the power of modern JavaScript.
        <br></br>
        Currently studying the last year of Software Development and networking
        degree, I am searching for a junior role within an agile team.
        <br></br>
        I enjoy pairing with other developers and the satisfaction of
        solving a problem together on a team application. Recently, I attended a
        Silicon Roundabout and Kodiri event in which we completed coding
        challenges and I score a maximum of 91 points .
      </p>
      </Who>
      </div>
  );
}

export default WhoAmI;
