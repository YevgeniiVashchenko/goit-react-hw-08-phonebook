import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Slide, Header, Text } from './Slider.styled';

export const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Slide num={0}>
        <Carousel.Caption>
          <Header>Keep your working contacts neat</Header>
          <Text>Use our platform to make meeting scheduling easy.</Text>
        </Carousel.Caption>
      </Slide>
      <Slide num={1}>
        <Carousel.Caption>
          <Header>Stay in touch during vacation</Header>
          <Text>
            Give your trusted contacts all the essential piece of information on
            time wherever you are.
          </Text>
        </Carousel.Caption>
      </Slide>
      <Slide num={2}>
        <Carousel.Caption>
          <Header>Ensure stable connection</Header>
          <Text>
            Provide steady customer experience for your clients even when you
            are out of office.
          </Text>
        </Carousel.Caption>
      </Slide>
    </Carousel>
  );
};