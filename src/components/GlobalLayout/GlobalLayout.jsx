import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { Suspense } from 'react';
import {
  MainContainer,
  FooterContainer,
  FooterText,
} from './GlobalLayout.styled';

const GlobalLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <MainContainer>
          <Suspense>
            <Outlet />
          </Suspense>
        </MainContainer>
      </main>
      <footer>
        <FooterContainer bg="dark" expand="lg">
          <FooterText
            href="https://github.com/Milosska/goit-react-hw-08-phonebook"
            target="blank"
          >
            &#169; 2023 Milosska - All rights reserved
          </FooterText>
        </FooterContainer>
      </footer>
    </>
  );
};

export default GlobalLayout;