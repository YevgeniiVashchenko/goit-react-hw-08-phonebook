import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as image from '../../images/backgrounds/login.jpg';
import * as image_reg from '../../images/backgrounds/register.jpg';
import * as bigImage from '../../images/backgrounds/login_2x.jpg';
import * as bigImage_reg from '../../images/backgrounds/register_2x.jpg';

const setBgImage = layout => {
  return layout === 'register'
    ? `url(${image_reg.default})`
    : `url(${image.default})`;
};

const setBigBgImage = layout => {
  return layout === 'register'
    ? `url(${bigImage_reg.default})`
    : `url(${bigImage.default})`;
};

export const Layout = styled(Row)`
  flex-direction: ${prop =>
    prop.layout === 'register' ? 'row-reverse' : 'row'};
  min-height: 90vh;
`;

export const BigColumn = styled(Col)`
  border-right: ${prop =>
    prop.layout === 'register' ? 'none' : '4px solid black'};
  border-left: ${prop =>
    prop.layout === 'register' ? '4px solid black' : 'none'};
  background-image: ${prop => setBgImage(prop.layout)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${prop => setBigBgImage(prop.layout)};
  }
`;

export const SmallColumn = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;