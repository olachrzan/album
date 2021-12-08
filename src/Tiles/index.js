import { data } from "./data"
import { Wrapper, Item, Content } from "./styled"

export const Tiles = ({ setShowModal }) => {
  const onButtonClick = () => {
    setShowModal(true);
  };

  return (
    <Wrapper>
      {data.map(element => (
        <Item
          onClick={onButtonClick}
          key={element.id}
        >
          <Content>{element.name}</Content>
        </Item>
      ))}
    </Wrapper>
  )
}