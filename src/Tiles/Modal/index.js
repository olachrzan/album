import { data } from "../data";
import { Background, Content, ExitCross, TextSide, Header } from "./styled";
import { Slider } from "./Slider";

export const Modal = ({ selectedTile, setSelectedTile }) => {
  if (!selectedTile) {
    return null;
  };
  const elementDetails = data.find(e => e.id === selectedTile).details;

  return (
    <Background>
      <Content>
        <ExitCross onClick={() => setSelectedTile(null)}>
          X
        </ExitCross>
        <Slider elementDetails={elementDetails} />
        <TextSide>
          <Header>
            {elementDetails.title}
          </Header>
          <p>
            {elementDetails.content}
          </p>
        </TextSide>
      </Content>
    </Background>
  )
}