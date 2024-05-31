import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  max-width: 393px;
  min-height: 100vh;
  margin: 0 auto;
  border: 1px solid #000000;
`;

function MainLayout() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export default MainLayout;
