import styled from 'styled-components';
import layouts from 'utils/styles/layouts';

const MainContainer = styled.div`
  min-height: 100vh;
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const PagesContainer = styled.main`
  ${layouts.containerLayout}
`;

export { MainContainer, HeaderContainer, PagesContainer };
