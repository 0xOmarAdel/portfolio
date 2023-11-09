interface Tab {
  id: number;
  text: string;
  component: string;
}

export const aboutTabs: Tab[] = [
  {
    id: 1,
    text: "Overview",
    component: "AboutOverview",
  },
  {
    id: 2,
    text: "Education",
    component: "AboutEducation",
  },
  {
    id: 3,
    text: "GitHub",
    component: "AboutGitHubStats",
  },
];
