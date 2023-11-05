import GitHubCalendar from "react-github-calendar";

const AboutGitHubStats = () => {
  return (
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
    />
  );
};

export default AboutGitHubStats;
