import AboutOverview from "../components/AboutOverview";
import AboutEducation from "../components/AboutEducation";
import AboutGitHubStats from "../components/AboutGitHubStats";

export const aboutTabs = [
  { id: 1, text: "Overview", component: <AboutOverview /> },
  { id: 2, text: "Education", component: <AboutEducation /> },
  { id: 3, text: "GitHub Stats", component: <AboutGitHubStats /> },
];
