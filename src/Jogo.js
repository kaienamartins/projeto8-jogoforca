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
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  right: 180px;
`;
