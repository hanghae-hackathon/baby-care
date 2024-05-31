import BigButton from "components/BigButton";
import styled from "styled-components";

import imgCustomer from "assets/images/img-customer.png";
import imgBabySitter from "assets/images/img-babysitter.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedTitle from "components/AnimatedTitle";

const Wrapper = styled.div`
  width: 100%;
  position: relative;

  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
  /* align-items: center; */
`;

function EntryPage() {
  return (
    <Wrapper>
      <h2>
        <AnimatedTitle>
          <div>안녕하세요 👋</div>
          <div>어떤 일을 도와드릴까요?</div>
        </AnimatedTitle>
      </h2>
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 1.5,
        }}
      >
        <Link to="/service">
          <BigButton>
            <img src={imgCustomer} alt="고객" style={{ height: 220 }} />
            <br />
            <h3>우리 아이를 돌봐줄 분을 찾고 있어요</h3>
          </BigButton>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 16,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 2,
        }}
      >
        <BigButton>
          <img src={imgBabySitter} alt="베이비시터" style={{ height: 220 }} />
          <br />
          <h3>저는 아이를 돌봐줄 수 있어요</h3>
        </BigButton>
      </motion.div>
    </Wrapper>
  );
}

export default EntryPage;
