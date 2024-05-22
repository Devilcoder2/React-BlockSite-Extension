import { useState } from "react";
import BlockForm from "./components/BlockForm";
import Stats from "./components/Stats";
import Tab from "@mui/material/Tab";
import { StyledSubTabs } from "./utils/SubTabs.styles";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    console.log("SubTab - index", newIndex, event);
    setIndex(newIndex);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-[rgba(47,47,47,255)]">
        <StyledSubTabs value={index} onChange={handleChange}>
          <Tab
            label="Block a Website"
            sx={{
              color: "#b3b4b4",
              fontSize: "11.2px",
            }}
          />

          {index === 0 && (
            <div className="bg-[rgba(33,33,33,255)] w-[28px] h-[15px] z-40 absolute bottom-0 left-[140px] ">
              <div className="bg-[rgba(47,47,47,255)] h-[15px] z-40  bottom-0 left-[140px] rounded-bl-2xl hover:bg-[rgba(65,65,65,255)]"></div>
            </div>
          )}

          <Tab
            sx={{
              color: "#b3b4b4",
              fontSize: "11.2px",
            }}
            label="View Blocked Sites"
          />
        </StyledSubTabs>
      </div>

      {index === 0 ? <BlockForm /> : <Stats />}
    </div>
  );
};

export default App;

// "&::before"
// "&::after"
