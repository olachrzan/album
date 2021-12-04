import { tilesData } from "./tilesData"
import { Wrapper, Item, Content } from "./styled"

export const Tiles = () => {
  return (
    <Wrapper>
      {tilesData.map(element => (
        <Item
          background={element.background}
          key={element.id}
        >
          <Content>{element.content}</Content>
        </Item>
      ))}
    </Wrapper>
  )
}