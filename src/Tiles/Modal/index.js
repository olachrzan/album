import { data } from "../data";
import { Background, Content, ExitCross, ImageSide, TextSide, Header } from "./styled";

export const Modal = ({ selectedTile, setSelectedTile }) => {

  return (
    <Background show={selectedTile === "" ? false : true} >
      <Content>
        <ExitCross onClick={() => setSelectedTile("")}>
          X
        </ExitCross>
        <ImageSide
          img={selectedTile === "" ? "" : process.env.PUBLIC_URL + data[selectedTile].details.photo}
        />
        <TextSide>
          <Header>
            {selectedTile === "" ? "" : data[selectedTile].details.title}
          </Header>
          <p>
            {selectedTile === "" ? "" : data[selectedTile].details.content}
          </p>
        </TextSide>
      </Content>
    </Background>
  )
}