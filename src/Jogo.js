import styled from "styled-components";

export default function Jogo(props) {
  return (
    <>
      <Photo>
        <img data-test="game-image" src={props.errors} alt="" />
      </Photo>
      <ChooseWordBtn onClick={props.start}>
        Escolher Palavra
      </ChooseWordBtn>
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
  top: 140px;
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