import styled from "styled-components";

export default function Letras(props) {
  let {alphabet} = props
  return (
    <AlphabetWrapper>
      {alphabet.map((letter) => (
        <ButtonLetters
        >
          {letter}
        </ButtonLetters>
      ))}
    </AlphabetWrapper>
  );
}

const AlphabetWrapper = styled.div`
  display: flex;
  position: relative;
  top: 550px;
  flex-wrap: wrap;
  width: 650px;
`;

const ButtonLetters = styled.button`
  border-radius: 8px;
  border: none;
  margin: 5px;
  width: 40px;
  height: 40px;
  font-size: 15px;
  background-color: #7aa7c7;
  color: #39739d;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;