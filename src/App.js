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
import Palavras from "./Palavras"
import { useState } from "react"

function App(props) {
  const alphabet = [
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
  ];
  const images = [forca0, forca1, forca2, forca3, forca4, forca5,forca6];
  const [chosenWord, setChosenWord] = useState([]);
  const [screenWord, setScreenWord] = useState([]);
  const [diacritics, setDiacritics] = useState("");

  const start = () => {
    sort();
  }

  const sort = () => {
    const sortWord = Math.floor(Math.random() * Palavras.length);
    const word = Palavras[sortWord];
    const newWord = word.split("");
    setChosenWord(newWord);
    let dots = [];
    newWord.forEach((letter) => dots.push(" _"));
    setScreenWord(dots);
    const subsWord = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    setDiacritics(subsWord);
    console.log(word);
  };

  return (
    <Global>
      <Letras alphabet={alphabet}/>
      <Jogo images={images} start={start} />
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
