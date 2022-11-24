import forca0 from "./images/forca0.png"
import forca1 from "./images/forca1.png"
import forca2 from "./images/forca2.png"
import forca3 from "./images/forca3.png"
import forca4 from "./images/forca4.png"
import forca5 from "./images/forca5.png"
import forca6 from "./images/forca6.png"
import Letras from "./Letras";
import Jogo from "./Jogo";
import styled from "styled-components"
import Chute from "./Chute"

function App() {
  const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ];

  const images = [forca0, forca1, forca2, forca3, forca4, forca5,forca6];

  return (
    <Global>
      <Letras alphabet={alphabet}/>
      <Jogo images={images}/>
      <Chute/>
    </Global>
  );
}

const Global = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  font-family: "Roboto", sans-serif;
  margin: 0 auto;
  width: 50%;
  text-align: center;
  padding: 10px;
  width: max-content;
  display: block;
  position: relative;
  width: max-content;
`;


export default App;
