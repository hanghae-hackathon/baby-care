import styled from "styled-components";
import Tag from "./Tag";
import { mainData } from "data/main";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  width: 100%;
  height: 70px;
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 12px;

  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }

  text-decoration: none;
  color: inherit;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
`;

const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 16px;
  display: flex;
`;
export default function List({ data }: { data: (typeof mainData)[number] }) {
  return (
    <Button to={`/detail/${data.id}`}>
      <Icon src={data.profile} alt="images" />
      <Wrapper>
        <Title>{data.title}</Title>
        <TagWrapper>
          {data.tags.map((tag, index) => (
            <Tag key={index} tag={tag}></Tag>
          ))}
        </TagWrapper>
      </Wrapper>
    </Button>
  );
}
