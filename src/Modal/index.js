import { ModalBackground, ModalContent, ImageSide, TextSide, Header } from "./styled";

export const Modal = () => (
  <ModalBackground>
    <ModalContent>
      <ImageSide />
      <TextSide>
        <Header>Tytuł</Header>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, aliquam, odit, nisi obcaecati vero libero aperiam suscipit neque cupiditate culpa illo debitis doloremque? Cum doloribus nostrum unde voluptates ducimus dolores.
        </p>
      </TextSide>
    </ModalContent>
  </ModalBackground>
)