import BigButton from "components/BigButton";
import { forwardRef, PropsWithChildren } from "react";
import styled from "styled-components";

const Wrapper = styled.label`
  & > input {
    width: 0%;
    height: 0%;
    position: absolute;
    opacity: 0;

    &:checked + button {
      background-color: ${({ theme }) => theme.colors.primary};
      /* color: ${({ theme }) => theme.colors.common.white}; */
    }
  }
`;

const Checkbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >
  >
>(function Checkbox({ children, ...inputProps }, ref) {
  return (
    <Wrapper>
      <input ref={ref} type="checkbox" {...inputProps} />
      <BigButton>{children}</BigButton>
    </Wrapper>
  );
});

export default Checkbox;
