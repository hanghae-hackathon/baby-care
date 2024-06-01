import styled from "styled-components";
import imgSplash from "assets/images/img-splash-2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
        Splash
      </motion.h1>
    </Wrapper>
  );
}

export default SplashPage;
