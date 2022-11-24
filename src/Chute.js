import styled from "styled-components";

export default function Chute(props) {
  return (
    <GuessArea>
      <h3>Já sei a palavra!</h3>
      <input data-test="guess-input"/>
      <button data-test="guess-button">Chutar</button>
    </GuessArea>
  );
}

const GuessArea = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  display: flex;
  justify-content: space-around;
  position: relative;
  top: 200px;

  h3 {
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 400;
    line-height: 70px;
    color: #000;
    position: relative;
  }

  input {
    width: 300px;
    font-size: 25px;
    outline: #999;
    background-color: #fff;
  }

  input,
  button {
    height: 35px;
    border-radius: 5px;
    display: block;
    position: relative;
    top: 15px;
  }

  button {
    width: 100px;
    height: 40px;
    font-weight: 700;
    background-color: #e1ecf4;
    color: #3C76A1;
    border: 1px solid #7aa7c7;
    font-size: 20px;
    cursor: pointer;
  }
`;