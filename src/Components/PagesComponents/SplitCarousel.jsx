import React from "react";
import { Carousel } from "primereact/carousel";
import Image1 from "../../Images/1.svg";
import Image2 from "../../Images/2.svg";
import Image3 from "../../Images/3.svg";
import { Image } from "primereact/image";
import { useMediaQuery } from "react-responsive";

const responsiveOptions = [
  {
    breakpoint: "1024px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "768px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "560px",
    numVisible: 1,
    numScroll: 1,
  },
];

const ImageItem = [
  {
    text: "Test1",
    image: Image1,
  },
  {
    text: "Test2",
    image: Image2,
  },
  {
    text: "Test3",
    image: Image3,
  },
];

const SplitCarousel = () => {
  const ImageTemplate = (ImageItem) => {
    const isTabletOrMobile = useMediaQuery({
      query: "(max-width: 1335px)",
    });
    return (
      <div>
        <div className="card">
          <Image
            width={isTabletOrMobile ? "250" : "400"}
            src={ImageItem.image}
            alt="Image Text"
          />
        </div>
        <h2>{ImageItem.text}</h2>
      </div>
    );
  };
  return (
    <div className="carousel-demo">
      <div className="card">
        <div className="card">
          <Carousel
            value={ImageItem}
            numVisible={1}
            numScroll={1}
            circular={true}
            autoplayInterval={3000}
            responsiveOptions={responsiveOptions}
            itemTemplate={ImageTemplate}
          />
        </div>
      </div>
    </div>
  );
};

export default SplitCarousel;
