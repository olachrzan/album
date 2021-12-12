import { Item, CarouselWrapper } from "./styled";

const defaultControlsConfig = {
  prevButtonText: "<",
  nextButtonText: ">",
  prevButtonStyle: {
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "rgb(153, 144, 250, 0.7)",
  },
  nextButtonStyle: {
    fontWeight: "bold",
    fontSize: "20px",
    backgroundColor: "rgb(153, 144, 250, 0.7)",
  },
  pagingDotsStyle: {
    fill: "#4c42b0",
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