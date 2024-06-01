import AnimatedTitle from "components/AnimatedTitle";
import { mainData } from "data/main";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
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
const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ListItem = styled.div`
  width: 100%;
  height: auto;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  padding: 8px 12px;
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
    color: #ffffff;
    display: inline-block;
    background-color: #52a9da;
    padding: 4px 8px;
    border-radius: 4px;
    white-space: nowrap;
  }
`;
export default function Candidates() {
  const id = 1;
  return (
    <Wrapper to={`/detail/${id}`}>
      <h1>AI를 통해 추천할 베이비 시터를 찾았어요!</h1>
      <List>
        <AnimatedTitle duration={0.7}>
          {mainData.slice(0, 3).map((data, index) => {
            return (
              <ListItem>
                <Profile src={data.profile} alt="images" />
                <div>
                  <Content>{data.content}</Content>
                  <CommentWrapper>
                    <span>AI 추천이유</span>
                    <Comment>
                      <TypeAnimation
                        sequence={[800 * index, data.title]}
                        speed={50}
                        repeat={0}
                        cursor={false}
                      />
                    </Comment>
                  </CommentWrapper>
                </div>
              </ListItem>
            );
          })}
        </AnimatedTitle>
      </List>
      <Link
        to="/main"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <Button>직접 찾아볼래요</Button>
      </Link>
    </Wrapper>
  );
}
