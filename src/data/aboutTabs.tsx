import AboutOverview from "../components/About/AboutOverview";
import AboutEducation from "../components/About/AboutEducation";
import AboutGitHubStats from "../components/About/AboutGitHubStats";

interface Tab {
  id: number;
  text: string;
  component: React.ComponentType;
  componentPath: React.string;
}

export const aboutTabs: Tab[] = [
  {
    id: 1,
    text: "Overview",
    component: AboutOverview,
    componentPath: "AboutOverview",
  },
  {
    id: 2,
    text: "Education",
    component: AboutEducation,
    componentPath: "AboutEducation",
  },
  {
    id: 3,
    text: "GitHub",
    component: AboutGitHubStats,
    componentPath: "AboutGitHubStats",
  },
];
