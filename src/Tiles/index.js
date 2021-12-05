import { tilesData } from "./tilesData"
import { Wrapper, Item, Content } from "./styled"

export const Tiles = ({ setShowModal }) => {
  const OnButtonClick = () => setShowModal((prev) => !prev);

  return (
    <Wrapper>
      {tilesData.map(element => (
        <Item
          onClick={OnButtonClick}
          key={element.id}
        >
          <Content>{element.content}</Content>
        </Item>
      ))}
    </Wrapper>
  )
}