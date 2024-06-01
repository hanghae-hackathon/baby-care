import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(Link)`
  width: 100%;

  margin: 0 auto;
  padding: 20px;
  & > h1 {
    font-size: 26px;
    font-weight: 600;
    color: #333;
    margin-top: 40px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  text-decoration: none;
  color: inherit;
`;
const Lists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const List = styled.div`
  width: 100%;
  height: 100px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
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

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const Button = styled.button`
  width: 351px;
  height: 50px;
  background-color: #e11d60;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const Profile = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100%;
`;

const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
`;

const Comment = styled.div`
  font-size: 12px;
  color: rgb(29 78 216);
  font-weight: 500;
`;
const CommentWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  & > span {
    font-size: 14px;
    color: #333;
  }
`;
export default function Candidates() {
  const id = 1;
  return (
    <Wrapper to={`/detail/${id}`}>
      <h1>AI를 통해 추천할 베이비 시터를 찾았어요!</h1>
      <Lists>
        <List>
          <Profile src="/elder.webp" alt="images" />
          <div>
            <Content>
              "안녕하세요. 저는 50대 중반 여성입니다. 아이들과 잘 어울리고
              친절한 성격을 가지고 있습니다."
            </Content>
            <CommentWrapper>
              <span>Why?</span>
              <Comment>경험이 풍부하며 친절한 성격 입니다.</Comment>
            </CommentWrapper>
          </div>
        </List>
        <List>
          <Profile src="/elder.webp" alt="images" />
          <div>
            <Content>
              "안녕하세요. 저는 50대 중반 여성입니다. 아이들과 잘 어울리고
              친절한 성격을 가지고 있습니다."
            </Content>
            <CommentWrapper>
              <span>Why ?</span>
              <Comment>경험이 풍부하며 친절한 성격 입니다.</Comment>
            </CommentWrapper>
          </div>
        </List>
        <List>
          <Profile src="/elder.webp" alt="images" />
          <div>
            <Content>
              "안녕하세요. 저는 50대 중반 여성입니다. 아이들과 잘 어울리고
              친절한 성격을 가지고 있습니다."
            </Content>
            <CommentWrapper>
              <span>Why ?</span>
              <Comment>경험이 풍부하며 친절한 성격 입니다.</Comment>
            </CommentWrapper>
          </div>
        </List>
      </Lists>
      <Button>둘러보기</Button>
    </Wrapper>
  );
}
