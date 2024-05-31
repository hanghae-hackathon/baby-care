import AnimatedTitle from "components/AnimatedTitle";
import { motion } from "framer-motion";
import { MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import BigButton from "components/BigButton";
import Checkbox from "components/Checkbox";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;

  & > div {
    min-height: 80vh;
  }

  & input {
    width: 100%;
    padding: 16px;
    border-radius: 24px;
    border: 1px solid #000000;
  }
`;

function ServicePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep((current) => current + 1);
    window.scrollTo({
      top: 99999,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.scrollTo({
        top: 99999,
        behavior: "smooth",
      });
    }, 500);
  };

  return (
    <Wrapper>
      <MoveLeftIcon
        onClick={() => {
          navigate(-1);
        }}
      />
      <motion.h2
        animate={{
          opacity: 0,
          display: "none",
        }}
        transition={{
          delay: 2.5,
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <AnimatedTitle>
          <div>좋아요!</div>
          <div>몇 가지 질문에만 답변해주시면</div>
          <div>가장 잘 맞는 베이비시터를 찾아드릴게요!</div>
        </AnimatedTitle>
      </motion.h2>
      <h2>
        <AnimatedTitle delay={3.5}>
          <div>📅 언제 서비스가 필요하신가요?</div>
        </AnimatedTitle>
      </h2>

      <AnimatedTitle delay={4}>
        <Calendar
          calendarType="gregory"
          onChange={() => {
            if (step === 0) {
              nextStep();
            }
          }}
        />
      </AnimatedTitle>

      {step > 0 && (
        <div
          onClick={() => {
            if (step === 1) {
              nextStep();
            }
          }}
        >
          <h2>
            <AnimatedTitle>
              <div>🕒 어떤 시간대에 필요하신가요?</div>
              <small>상세한 시간대는 나중에 협의할 수 있어요.</small>
            </AnimatedTitle>
          </h2>
          <AnimatedTitle delay={1.5} duration={0.1}>
            <BigButton>오전(08:00~13:00)</BigButton>
            <BigButton>오후(13:00~18:00)</BigButton>
            <BigButton>저녁(16:00~20:00)</BigButton>
          </AnimatedTitle>
        </div>
      )}

      {step > 1 && (
        <div
          onClick={() => {
            if (step === 2) {
              nextStep();
            }
          }}
        >
          <h2>
            <AnimatedTitle>
              <div>👶 아이들은 몇 명인가요?</div>
            </AnimatedTitle>
          </h2>
          <AnimatedTitle delay={1.5} duration={0.1}>
            <BigButton>1명</BigButton>
            <BigButton>2명</BigButton>
            <BigButton>3명 이상</BigButton>
          </AnimatedTitle>
        </div>
      )}

      {step > 2 && (
        <div
          onClick={() => {
            if (step === 3) {
              nextStep();
            }
          }}
        >
          <h2>
            <AnimatedTitle>
              <div>🧒 아이들의 나이는 어떻게 되나요?</div>
            </AnimatedTitle>
          </h2>
          <AnimatedTitle delay={1.5} duration={0.1}>
            <BigButton>0~1세</BigButton>
            <BigButton>2~4세</BigButton>
            <BigButton>5~7세</BigButton>
            <BigButton>8세 이상</BigButton>
          </AnimatedTitle>
        </div>
      )}

      {step > 3 && (
        <div>
          <h2>
            <AnimatedTitle>
              <div>🏠 베이비시터가 알아야할 정보를 모두 선택해주세요</div>
            </AnimatedTitle>
          </h2>
          <AnimatedTitle delay={1.5} duration={0.1}>
            <Checkbox>📷 집에 카메라가 있어요.</Checkbox>
            <Checkbox>🐕 애완동물이 있어요.</Checkbox>
            <Checkbox>🍚 급식이 필요해요.</Checkbox>
            <Checkbox>🚼 기저귀 교체가 필요해요.</Checkbox>
            <Checkbox>🚗 운전이 필요해요.</Checkbox>
          </AnimatedTitle>
        </div>
      )}
    </Wrapper>
  );
}

export default ServicePage;
