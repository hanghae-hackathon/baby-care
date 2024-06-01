import AnimatedTitle from "components/AnimatedTitle";
import { motion } from "framer-motion";
import { MoveLeftIcon } from "lucide-react";
import { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "react-calendar/dist/Calendar.css";
import BigButton from "components/BigButton";
import Checkbox, { RadioButton } from "components/Checkbox";
import Button from "components/Button";

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

  & input,
  & textarea {
    width: 100%;
    padding: 16px;
    border-radius: 24px;
    border: 1px solid #000000;
    resize: none;
  }
`;

const BottomWrapper = styled.div`
  width: 100%;
  max-width: 393px;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 16px;
  min-height: 0 !important;
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
            <RadioButton name="time">오전(08:00~13:00)</RadioButton>
            <RadioButton name="time">오후(13:00~18:00)</RadioButton>
            <RadioButton name="time">저녁(16:00~20:00)</RadioButton>
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
            <RadioButton name="pax">1명</RadioButton>
            <RadioButton name="pax">2명</RadioButton>
            <RadioButton name="pax">3명 이상</RadioButton>
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
            <RadioButton name="age">0~1세</RadioButton>
            <RadioButton name="age">2~4세</RadioButton>
            <RadioButton name="age">5~7세</RadioButton>
            <RadioButton name="age">8세 이상</RadioButton>
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

      {step > 4 && (
        <div>
          <h2>
            <AnimatedTitle>
              <div>😍 마지막 단계에요!</div>
              <div>추가로 설명이 필요한 것들을 줄글로 남겨주세요.</div>
              <small>
                남겨주신 글을 토대로 AI가 최적의 베이비시터를 찾아줘요.
              </small>
            </AnimatedTitle>
          </h2>
          <AnimatedTitle delay={1.5} duration={0.1}>
            <textarea
              rows={15}
              placeholder="주의사항, 아이가 좋아하는 것, 아이가 싫어하는 것..."
            />
          </AnimatedTitle>
        </div>
      )}

      {step > 5 && <div />}

      {step > 3 && (
        <BottomWrapper>
          <Button
            onClick={() => {
              nextStep();
              setTimeout(() => {
                if (step >= 5) {
                  navigate("/service/finding");
                }
              }, 1000);
            }}
          >
            다음
          </Button>
        </BottomWrapper>
      )}
    </Wrapper>
  );
}

export default ServicePage;
