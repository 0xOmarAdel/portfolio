import { cloneElement } from "react";
import GitHubCalendar from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import formatDate from "../../utils/formatDate";

const AboutGitHubStats = () => {
  return (
    <>
      <GitHubCalendar
        username="0xOmarAdel"
        hideTotalCount
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        colorScheme="dark"
        theme={{
          dark: ["#2a2a2a", "#a98ada", "#916bd0", "#7a4bc6", "#622bbc"],
        }}
        renderBlock={(block, activity) =>
          cloneElement(block, {
            "data-tooltip-id": "react-tooltip",
            "data-tooltip-content": `${
              activity.count
            } activities on ${formatDate(activity.date)}`,
          })
        }
      />
      <Tooltip id="react-tooltip" />
    </>
  );
};

export default AboutGitHubStats;
