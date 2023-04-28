import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import * as images from '../../images/slider';

const setBgPicture = (num, size) => {
  const currentBgImages = Object.keys(images).filter(img => img.includes(num));
  return size === 'small'
    ? images[currentBgImages[0]].default
    : images[currentBgImages[1]].default;
};

export const Slide = styled(Carousel.Item)`
  width: 100%;
  height: 500px;
  background-color: black;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${props => setBgPicture(props.num, 'small')});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: linear-gradient(
        to right,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
      ),
      url(${props => setBgPicture(props.num, 'big')});
  }
`;

export const Header = styled.h3`
  font-weight: 500;
  font-size: 32px;
`;

export const Text = styled.p`
  font-size: 24px;
`;
