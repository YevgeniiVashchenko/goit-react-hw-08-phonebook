import { BiGroup, BiTimeFive, BiWrench } from 'react-icons/bi';
import { Slider } from 'components/Slider/Slider';
import { List, ListItem, Title } from './Homepage.styled';

const Homepage = () => {
  return (
    <>
      <Slider />
      <List>
        <ListItem>
          <BiGroup />
          <Title>Expand your network</Title>
          <p>
            Make and retain professional and personal connections that will not
            happen any other way.
          </p>
        </ListItem>
        <ListItem>
          <BiTimeFive />
          <Title>Save time</Title>
          <p>
            Maintain all contacts in one location to quickly access any contact
            you need.
          </p>
        </ListItem>
        <ListItem>
          <BiWrench />
          <Title>Automate processes</Title>
          <p>
            Automate some of your working processes by instantly calling any of
            your contacts directly from the App.
          </p>
        </ListItem>
      </List>
    </>
  );
};

export default Homepage;