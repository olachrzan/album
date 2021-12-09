import { Item, CarouselWrapper } from "./styled";

const defaultControlsConfig = {
  prevButtonText: "<",
  nextButtonText: ">",
  prevButtonStyle: {
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
  },
  nextButtonStyle: {
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "rgb(0, 0, 0, 0.5)",
  },
  pagingDotsStyle: {
    fill: "black",
  }
};

export const Slider = ({ elementDetails }) => {
  const modalPhotos = elementDetails.photos;

  return (
    <CarouselWrapper
      cellSpacing={15}
      wrapAround={true}
      defaultControlsConfig={defaultControlsConfig}
    >
      {modalPhotos.map(i => (
        <Item key={i} imageUrl={process.env.PUBLIC_URL + i} />
      ))}
    </CarouselWrapper>
  )
}