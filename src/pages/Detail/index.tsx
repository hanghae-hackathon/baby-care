import { BASE_URL } from "constant";
import { BabysitterProfile, mainData } from "data/main";
import Tag from "pages/Main/Tag";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "theme/colors";

const Wrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;

  gap: 8px;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;
const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 12px;
`;
const MetaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  div: {
    display: flex;
    gap: 4px;
  }
`;
const TagWrapper = styled.div`
  display: flex;
  gap: 4px;
  justify-self: end;
`;
const Content = styled.div`
  margin-top: 20px;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ApplyButton = styled.button`
  width: 351px;
  height: 50px;
  background-color: #e11d60;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  position: absolute;
  bottom: 20px;
  font-size: 16px;
`;
const Cursor = styled.div`
  cursor: pointer;
`;
const Modal = styled.div`
  width: 400px;
  height: 180px;
  position: fixed;
  border: 1px solid rgb(226 232 240);
  background-color: #fff;
  border-radius: 8px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  & > h1 {
    font-size: 20px;
    font-weight: 500;
  }

  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const Button = styled.button`
  width: 80%;
  height: 35px;
  display: flex;
  padding: 4px 12px;
  align-items: center;
  justify-content: center;
  background-color: #e11d60;
  color: #fff !important;
  border: none;
  gap: 12px;

  cursor: pointer;

  text-decoration: none;
  color: inherit;
`;

export default function Detail() {
  const { id } = useParams<{ id: string }>();
  const router = useNavigate();
  const [open, setOpen] = useState(false);
  const data = mainData.find(
    (item) => item.id === Number(id),
  ) as BabysitterProfile;
  return (
    <Wrapper>
      <Cursor>
        <MdArrowBack size={20} onClick={() => router(-1)}></MdArrowBack>
      </Cursor>
      <Title>{data.title}</Title>
      <ImageWrapper>
        <img src={data.profile} alt="images" width={160} />
        <Wrapper2>
          <MetaWrapper>
            <span>이름 : {data.name}</span>
            <span>별점 : {data.score}</span>
            <span>시급 : {data.pay.toLocaleString()} 원</span>
          </MetaWrapper>
          <TagWrapper>
            {data.tags.map((tag, index) => (
              <Tag key={index} tag={tag}></Tag>
            ))}
          </TagWrapper>
        </Wrapper2>
      </ImageWrapper>
      <Content>{data.content}</Content>
      <ApplyButton onClick={() => setOpen(true)}>신청하기</ApplyButton>
      {open && (
        <Modal>
          <h1>신청 완료 되었습니다.</h1>
          <Button onClick={() => setOpen(false)}>확인</Button>
        </Modal>
      )}
    </Wrapper>
  );
}
