import { Fragment, useState } from "react";
import { data } from "./data"
import { Wrapper, Item, Icon, Content, Footer, Link, Line, Text } from "./styled";
import { Modal } from "./Modal";

export const Tiles = () => {
  const [selectedTile, setSelectedTile] = useState(null);

  return (
    <Wrapper>
      {data.map(element => (
        <Fragment key={element.id}>
          <Item onClick={() => setSelectedTile(element.id)} >
            <Icon src={element.icon} />
            <Content>{element.name}</Content>
          </Item>
          <Modal selectedTile={selectedTile} setSelectedTile={setSelectedTile} />
        </Fragment>
      ))}
      <Footer>
        <Line />
        <Text>
          Wszystkie ikony pochodzą ze strony <Link href="https://icons8.com/">Icons8</Link><br />
          © 2021 Copyright - All Rights Reserved
        </Text>
      </Footer>
    </Wrapper>
  )
}