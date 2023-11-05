import AboutOverview from "../components/About/AboutOverview";
import AboutEducation from "../components/About/AboutEducation";
import AboutGitHubStats from "../components/About/AboutGitHubStats";

export const aboutTabs = [
  { id: 1, text: "Overview", component: <AboutOverview /> },
  { id: 2, text: "Education", component: <AboutEducation /> },
  { id: 3, text: "GitHub", component: <AboutGitHubStats /> },
];
