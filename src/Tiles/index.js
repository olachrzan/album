import { tilesData } from "./tilesData"
import { Content, Item, List } from "./styled"

export const Tiles = () => {
  return (
    <List>
      {tilesData.map(element => (
        <Item
        key={element.id}
        background={element.background}
        >
          <Content>{element.content}</Content>
        </Item>
      ))}
    </List>
  )
}