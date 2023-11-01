import GitHubCalendar from "react-github-calendar";

const AboutGitHubStats = () => {
  return (
    <GitHubCalendar
      username="0xOmarAdel"
      blockSize={15}
      blockMargin={5}
      fontSize={16}
      colorScheme="dark"
      theme={{
        dark: ["#383838", "#b8a2f8", "#A78BFA", "#8B5CF6", "#7C3AED"],
      }}
    />
  );
};

export default AboutGitHubStats;
