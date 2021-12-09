import { Fragment, useState } from "react";
import { data } from "./data"
import { Wrapper, Item, Content } from "./styled";
import { Modal } from "./Modal";

export const Tiles = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  return (
    <Wrapper>
      {data.map(element => (
        <Fragment key={element.id}>
          <Item
            onClick={() => setSelectedTile(element.id)}
          >
            <Content>{element.name}</Content>
          </Item>
          <Modal selectedTile={selectedTile} setSelectedTile={setSelectedTile} />
        </Fragment>
      ))}
    </Wrapper>
  )
}