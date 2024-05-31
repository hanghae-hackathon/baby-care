import { mainData } from "data/main";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;
export default function Tag({
  tag,
}: {
  tag: (typeof mainData)[number]["tags"][number];
}) {
  return <Wrapper color={tag.color}>{tag.title}</Wrapper>;
}
