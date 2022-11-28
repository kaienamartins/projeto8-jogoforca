import forca0 from "./images/forca0.png";
import forca1 from "./images/forca1.png";
import forca2 from "./images/forca2.png";
import forca3 from "./images/forca3.png";
import forca4 from "./images/forca4.png";
import forca5 from "./images/forca5.png";
import forca6 from "./images/forca6.png";
import Letras from "./Letras";
import Jogo from "./Jogo";
import styled from "styled-components";
import Chute from "./Chute";
import Palavras from "./Palavras";
import { useState } from "react";

function App() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const images = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];
  const [chosenWord, setChosenWord] = useState([]);
  const [screenWord, setScreenWord] = useState([]);
  const [diacritics, setDiacritics] = useState("");
  const [colours, setColours] = useState("#1a1a1a");
  const [usedLetter, setUsedLetter] = useState(alphabet);
  const [errors, setErrors] = useState(0);
  const [guessing, setGuessing] = useState("");
  const [disabled, setDisabled] = useState(true);

  const start = () => {
    sort();
    setUsedLetter([]);
    setErrors(0);
    setColours("#1a1a1a");
    setDisabled(false);
  };

  const end = () => {
    setDisabled(true);
    setGuessing("");
    setUsedLetter(alphabet);
    setScreenWord(chosenWord);
  };

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

  const right = (letter) => {
    const newScreenWord = [...screenWord];
    chosenWord.forEach((l, i) => {
      if (diacritics[i] === letter) {
        newScreenWord[i] = l;
      }
    });
    setScreenWord(newScreenWord);

    if (!newScreenWord.includes(" _")) {
      setColours("#35ab58");
      end();
    }
  };

  const wrong = () => {
    const errorsOnGame = errors + 1;
    setErrors(errorsOnGame);
    if (setErrors === 6) {
      setColours("#ff1c1c");
      end();
    }
  };

  const guessChosenWord = () => {
    let chosen = "";
    chosenWord.forEach((letter) => (chosen += letter));

    if (guessing === diacritics) {
      setColours("#35ab58");
      setErrors(0);
    } else {
      setErrors(6);
      setColours("#ff1c1c");
    }
    end();
  };

  const clicked = (letter) => {
    setUsedLetter([...usedLetter, letter]);
    if (diacritics.includes(letter)) {
      right(letter);
    } else {
      wrong(letter);
    }
  };

  return (
    <Global>
      <Jogo
        images={images}
        errors={errors}
        colours={colours}
        start={start}
        screenWord={screenWord}
      />
      <Letras clicked={clicked} alphabet={alphabet} usedLetter={usedLetter} />
      <Chute
        disabled={disabled}
        guessing={guessing}
        setGuessing={setGuessing}
        guessChosenWord={guessChosenWord}
      />
    </Global>
  );
}

const Global = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

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
