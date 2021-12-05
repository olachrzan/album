import { Background, Content, ExitCross, ImageSide, TextSide, Header } from "./styled";

export const Modal = ({ showModal, setShowModal }) => {
  const OnButtonClick = () => setShowModal((prev) => !prev);

  return (
    <Background show={showModal} >
      <Content>
        <ExitCross onClick={OnButtonClick}>
          X
        </ExitCross>
        <ImageSide />
        <TextSide>
          <Header>Tytuł</Header>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.Non, aliquam, odit, nisi obcaecati vero libero aperiam suscipit neque cupiditate culpa illo debitis doloremque?Cum doloribus nostrum unde voluptates ducimus dolores.
          </p>
        </TextSide>
      </Content>
    </Background>
  )
}