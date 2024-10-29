import styled from "styled-components";
import Totalsccore from "./Totalsccore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import { useState } from "react";
import { Button, OutlineButton } from "../styledd/Button";
import Rules from "./Rules";

function GamePlay() {
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const [selected, setSelected] = useState();
  const [show, setShow] = useState(false);
  const [erorr, setError] = useState("");

  const randomGenrate = (min, max) => {
    if (selected === undefined) {
      setError("Select a number first then role dice");
      return;
    }
    setError("");
    let randomNumber = Math.floor(Math.random() * (max - min) + min);
    setCurrent(randomNumber);

    if (randomNumber === selected) {
      setTotal((tot) => tot + randomNumber);
    } else {
      setTotal((tot) => tot - 2);
    }
    setSelected(undefined);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <Totalsccore total={total}></Totalsccore>
        <NumberSelector
          setError={setError}
          erorr={erorr}
          selected={selected}
          setSelected={setSelected}
        ></NumberSelector>
      </div>

      {show ? (
        <Rules setShow={setShow}></Rules>
      ) : (
        <>
          <RoleDice
            setTotal={setTotal}
            randomGenrate={randomGenrate}
            current={current}
          ></RoleDice>
          <div className="btns">
            <OutlineButton onClick={() => setTotal(0)}>
              Reset Score
            </OutlineButton>
            <br></br>
            <Button onClick={() => setShow(true)}>Rules</Button>
          </div>
        </>
      )}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 40px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }
`;
