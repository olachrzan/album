import { useState } from "react";
import { Header } from "./Header";
import { Modal } from "./Modal";
import { Tiles } from "./Tiles";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <Tiles setShowModal={setShowModal} />
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
