import styled from "styled-components";

export default function Jogo(props) {
  return (
    <>
      <Photo>
        <img src={props.images[0]} alt="" />
      </Photo>
    </>
  );
}


const Photo = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  position: absolute;
  left: -20px;
`;
