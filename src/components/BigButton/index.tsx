import { lighten } from "polished";
import styled from "styled-components";

const BigButton = styled.button`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;
  padding: 24px;

  border-radius: 24px;

  cursor: pointer;
  background-color: ${({ theme }) => lighten(0.98, theme.colors.common.black)};
  margin: 0;
  border: none;

  color: ${({ theme }) => theme.colors.common.black};
  margin-bottom: 4px;
`;

export default BigButton;
