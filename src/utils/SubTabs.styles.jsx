import styled from "@emotion/styled";
import { Tabs } from "@mui/material";

export const StyledSubTabs = styled(Tabs)`
  position: relative;

  .MuiButtonBase-root.MuiTab-root {
    background: rgba(47, 47, 47, 255);
    border-radius: 16px 16px 16px 16px;
    color: #b3b4b4;
    border-bottom: 3px solid rgba(47, 47, 47, 255);
    z-index: 50;
    transition: background 0.3s, color 0.3s, transform 0.3s;

    :hover {
      background: rgba(65, 65, 65, 255);
    }
  }

  .MuiButtonBase-root.MuiTab-root.Mui-selected {
    background: rgba(33, 33, 33, 255); /* Active tab background */
    border-top: 3px solid rgba(47, 47, 47, 255);
    border-left: 3px solid rgba(47, 47, 47, 255);
    // border-right: 3px solid rgba(47, 47, 47, 255);
    border-bottom: none;
    color: #b3b4b4; /* Text color for selected tab */

    border-radius: 16px 16px 0 0; /* Keep the top border radius */

    ::after {
      content: "";
      position: absolute;
      bottom: -3px; /* Adjust as needed */
      left: -3px; /* Adjust to match the border width */
      right: -3px; /* Adjust to match the border width */
      height: 6px; /* Adjust as needed to match the desired effect */
      background: rgba(33, 33, 33, 255);
      border-radius: 0 0 10px 10px; /* Curved outwards at the bottom */
      z-index: -1; /* Ensure the pseudo-element is behind the tab */
    }
  }

  .MuiTabs-indicator {
    display: none;
  }

  .tab-indicator {
    position: absolute;
    bottom: 0;
    left: ${({ index }) =>
      index === 0 ? "140px" : "auto"}; /* Adjust left position based on index */
    width: 28px; /* Adjust as needed */
    height: 15px; /* Adjust as needed */
    background: rgba(33, 33, 33, 255); /* Color for the small div */
    border-radius: ${({ index }) =>
      index === 0
        ? "0 0 0 16px"
        : "0 0 16px 0"}; /* Match the bottom-left radius of the active tab */
    z-index: 40;
    cursor: pointer;

    &:hover {
      background: rgba(65, 65, 65, 255);
    }
  }
`;

export default StyledSubTabs;
