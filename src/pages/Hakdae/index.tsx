import videoHakdae from "assets/videos/vid-hakdae.mp4";
import Button from "components/Button";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* background-color: ${({ theme }) => theme.colors.common.black}; */

  & iframe {
    width: 100%;
    height: 100%;
    position: relative;
    border: none;
  }
`;

const Toast = styled(motion.div)`
  width: 100%;
  margin: 0 auto;
  height: auto;
  position: absolute;
  left: 0;
  top: 5%;
  padding: 16px;

  & > div {
    width: 90%;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.common.white};
    padding: 16px;
    border-radius: 24px;
  }
`;

const VideoWrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.common.black};
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

function HakdaeDemoPage() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <Wrapper>
      {!showVideo && <iframe src="https://hanghae99.spartacodingclub.kr" />}
      {!showVideo && (
        <Toast
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4,
            duration: 0.2,
          }}
        >
          <div>
            <h3>홈캠에서 학대가 의심되는 장면을 감지했습니다.</h3>
            <Button
              onClick={() => {
                setShowVideo(true);
              }}
            >
              바로 확인하기
            </Button>
          </div>
        </Toast>
      )}
      {showVideo && (
        <VideoWrapper
          initial={{
            opacity: 0,
            y: "100%",
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <video
            src={videoHakdae}
            autoPlay
            controls={false}
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />

          <BottomWrapper>
            <motion.div
              initial={{
                opacity: 0,
                y: 100,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 8,
                duration: 0.5,
              }}
            >
              <a target="_blank" href="tel:112">
                <Button>👮 112에 신고하기</Button>
              </a>
            </motion.div>
          </BottomWrapper>
        </VideoWrapper>
      )}
    </Wrapper>
  );
}

export default HakdaeDemoPage;
