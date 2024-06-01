import styled from "styled-components";
import imgSplash from "assets/images/img-splash-2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import imgLogo from "assets/images/logo.jpg";

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.common.white};
  background-size: contain;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.colors.primary};

  & > img {
    width: 50%;
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

  text-align: center;

  & > img {
    width: 50%;
  }
`;

function SplashPage() {
  const navigate = useNavigate();

  return (
    <Wrapper
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 0,
      }}
      transition={{
        delay: 1.5,
        duration: 0.5,
        ease: "easeInOut",
      }}
      onAnimationComplete={() => {
        navigate("/entry", {
          replace: true,
        });
      }}
    >
      <motion.img
        initial={{
          opacity: 0,
          y: 48,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        src={imgSplash}
      />
      <motion.h1
        initial={{
          opacity: 0,
          y: 48,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        베이비케어
      </motion.h1>
      <BottomWrapper>
        <img src={imgLogo} alt="logo" />
        <br />
        <del>지원을 받을지도 모르는 서비스</del>
      </BottomWrapper>
    </Wrapper>
  );
}

export default SplashPage;
