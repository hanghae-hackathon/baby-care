import styled from "styled-components";
import List from "./List";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { mainData } from "../../data/main";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  overflow: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;

  & > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;
const CusorWrapper = styled.div`
  cursor: pointer;
`;
const Input = styled.input`
  width: 180px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0px 8px;
  font-size: 16px;
`;
export default function Main() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue("");
  }, [open]);
  return (
    <Wrapper>
      <Header>
        <span>Baby care</span>
        <div>
          {open && (
            <Input
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          )}
          <CusorWrapper onClick={() => setOpen((prev) => !prev)}>
            <FaSearch size={16} />
          </CusorWrapper>
        </div>
      </Header>
      {mainData.map((data, index) => {
        if (
          data.title.includes(value) ||
          data.tags.some((tag) => tag.title.includes(value))
        ) {
          return <List key={index} data={data} />;
        }
      })}
    </Wrapper>
  );
}
