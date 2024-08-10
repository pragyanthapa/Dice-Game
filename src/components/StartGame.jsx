import { Container } from "postcss";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({toggle}) => {
  return(
    <StyledContainer>
        <div className="image">
        <img 
        src="/images/dices.png"
        />
        </div>
        <div className="content">
            <h1>Dice Game</h1>
            <Button 
            onClick={toggle}>Play Now</Button>
        </div>
    </StyledContainer>
  )
}

export default StartGame;

const StyledContainer = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;

.content {
    h1{
        font-size: 96px;
        white-space: nowrap;
    }
}
.image{
    width: 649px;
    height: 522px;
}
`