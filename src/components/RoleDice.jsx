import styled from "styled-components";


function RoleDice({setTotal, current, randomGenrate }) {
  return (
    <DiceContainer>
      <div className="dice" onClick={() => randomGenrate(1, 7)}>
        <img src={`/images/dice/dice_${current}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
      
    </DiceContainer>
  );
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;
