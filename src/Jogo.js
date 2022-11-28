import styled from "styled-components";

export default function Jogo(props) {
  return (
    <>
      <Photo>
        <img data-test="game-image" src={props.images[props.errors]} alt="" />
      </Photo>
      <ChooseWordBtn onClick={props.start} data-test="choose-word">
        Escolher Palavra
      </ChooseWordBtn>
      <WordArea data-test="word" colours={props.colours} data-answer={props.screenWord}>{props.screenWord}</WordArea>
    </>
  );
}


const Photo = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  right: 180px;
`;

const ChooseWordBtn = styled.div`
  display: block;
  position: absolute;
  top: 120px;
  right: -35px;
  width: 180px;
  height: 50px;
  background-color: #58AF61;
  color: #fafafa;
  border-radius: 7px;
  line-height: 50px;
  font-size: 19px;
  font-weight: 700;
  cursor: pointer;
`;

const WordArea = styled.div`
  display: flex;
  position: absolute;
  top: 280px;
  right: 30px;
  font-size: 30px;
  color: ${(props) => props.colours};
`;