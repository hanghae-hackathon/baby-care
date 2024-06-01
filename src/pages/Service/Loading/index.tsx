import AnimatedTitle from "components/AnimatedTitle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const gradientKeyframes = keyframes`

	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}

`;

const Wrapper = styled(motion.div)`
  width: 100%;

  background: linear-gradient(-45deg, #f4b0ad, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: ${gradientKeyframes} 5s ease infinite;
  height: 100vh;

  color: ${({ theme }) => theme.colors.common.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CompleteWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: ${({ theme }) => theme.colors.common.white};
  color: ${({ theme }) => theme.colors.common.black};
  padding: 16px;
  border-radius: 50%;
`;

function LoadingPage() {
  const navigate = useNavigate();
  return (
    <>
      <Wrapper
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 5,
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          <AnimatedTitle delay={3} duration={1}>
            <div>입력해주신 내용을 토대로</div>
            <div>AI가 최적의 베이비시터를 찾고있어요.</div>
            <div>오래 걸리지 않을거에요.</div>
            <div>🐥</div>
          </AnimatedTitle>
        </h2>
      </Wrapper>
      <CompleteWrapper
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 2,
        }}
        transition={{
          duration: 1,
          delay: 10,
        }}
        onAnimationComplete={() => {
          navigate("/candidate");
        }}
      ></CompleteWrapper>
    </>
  );
}

export default LoadingPage;
