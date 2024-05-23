import { useState } from "react";
import BlockForm from "./components/BlockForm";
import Stats from "./components/Stats";
import Tab from "@mui/material/Tab";
import { StyledSubTabs } from "./utils/SubTabs.styles";

const App = () => {
  const [index, setIndex] = useState(0);

  const handleChange = (event, newIndex) => {
    console.log("SubTab - index", newIndex, event);
    setIndex(index === 0 ? 1 : 0);
  };

  return (
    <div>
      <div className="flex justify-between items-center bg-[rgba(47,47,47,255)]">
        <StyledSubTabs value={index} onChange={handleChange}>
          <Tab
            label="Block a Website"
            sx={
              index === 1
                ? {
                    color: "#b3b4b4",
                    fontSize: "11.2px",
                    zIndex: "100",
                    maxHeight: "48px",
                    minHeight: "unset",
                    "&:hover": {
                      width: "128px",
                      padding: 0,
                      marginRight: "5px",
                      marginLeft: "5px",
                      height: "40px",
                      marginTop: "5px",
                    },
                  }
                : {
                    color: "#b3b4b4",
                    fontSize: "11.2px",
                  }
            }
          />

          {index === 0 && (
            <div className="bg-[rgba(33,33,33,255)] w-[28px] h-[15px] z-40 absolute bottom-0 left-[140px]">
              <div
                className={`bg-[rgba(47,47,47,255)] h-[15px] z-40  bottom-0 left-[140px] rounded-bl-2xl 
                }`}
              ></div>
            </div>
          )}

          {index === 1 && (
            <div className="bg-[rgba(33,33,33,255)] w-[28px] h-[15px] z-40 relative bottom-0 left-[140px]">
              <div
                className={`bg-[rgba(47,47,47,255)] h-[15px] z-40  bottom-0 left-[140px] rounded-br-2xl 
                }`}
              ></div>
            </div>
          )}

          <Tab
            sx={
              index === 0
                ? {
                    color: "#b3b4b4",
                    fontSize: "11.2px",
                    zIndex: "100",
                    maxHeight: "48px",
                    minHeight: "unset",
                    "&:hover": {
                      width: "150px",
                      padding: 0,
                      marginLeft: "5px",
                      height: "40px",
                      marginTop: "5px",
                    },
                  }
                : {
                    color: "#b3b4b4",
                    fontSize: "11.2px",
                  }
            }
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
