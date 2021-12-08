import { data } from "../Tiles/data";
import { Background, Content, ExitCross, ImageSide, TextSide, Header } from "./styled";

export const Modal = ({ selectedTile, setSelectedTile }) => {

  return (
    <Background show={selectedTile === "" ? false : true} >
      <Content>
        <ExitCross onClick={() => setSelectedTile("")}>
          X
        </ExitCross>
        <ImageSide />
        <TextSide>
          <Header>{selectedTile === "" ? "" : data[selectedTile].details.title}</Header>
          <p>
            {selectedTile === "" ? "" : data[selectedTile].details.content}
          </p>
        </TextSide>
      </Content>
    </Background>
  )
}