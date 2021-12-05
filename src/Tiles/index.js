import { tilesData } from "./tilesData"
import { Wrapper, Item, Content } from "./styled"

export const Tiles = ({ setShowModal }) => {
  const onButtonClick = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      {tilesData.map(element => (
        <Item
          onClick={onButtonClick}
          key={element.id}
        >
          <Content>{element.content}</Content>
        </Item>
      ))}
    </Wrapper>
  )
}