import React, { useState } from "react";
import { data } from "./data"
import { Wrapper, Item, Content } from "./styled";
import { Modal } from "./Modal";

export const Tiles = () => {
  const [selectedTile, setSelectedTile] = useState("");

  const onButtonClick = id => {
    const index = id - 1;
    setSelectedTile(index)
  };

  return (
    <Wrapper>
      {data.map(element => (
        <React.Fragment key={element.id}>
          <Item
            onClick={() => onButtonClick(element.id)}
          >
            <Content>{element.name}</Content>
          </Item>
          <Modal selectedTile={selectedTile} setSelectedTile={setSelectedTile} />
        </React.Fragment>
      ))}
    </Wrapper>
  )
}