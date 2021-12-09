import { data } from "../data";
import { Background, Content, ExitCross, ImageSide, TextSide, Header } from "./styled";

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
        <ImageSide
          img={process.env.PUBLIC_URL + elementDetails.photo}
        />
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