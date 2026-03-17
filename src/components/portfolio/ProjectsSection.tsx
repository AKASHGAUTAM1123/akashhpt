import { useState } from "react";
import MediaRow, { MediaRowItem } from "./MediaRow";
import MediaModal from "./MediaModal";

const projects: MediaRowItem[] = [
  {
    title: "Crop Yield Prediction",
    subtitle: "Live Project",
    description:
      "Predictive model for estimating crop yields based on historical data and environmental factors.",
    meta: "Nov 2025 – Jan 2026",
    tags: ["Python", "Machine Learning", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "Scikit-learn"],
    gradient: "bg-gradient-to-br from-slate-900 via-gray-800 to-zinc-900",
    imageUrl: "/Crop yeild.jpg",
    longDescription:
      "Developed a predictive model for estimating crop yields based on historical data and environmental factors.",
    highlights: [
      "Data preprocessing and feature engineering for agricultural datasets",
      "Implemented regression models to predict crop yields with high accuracy",
      "Visualized results using Matplotlib and Seaborn for actionable insights",
    ],
    stack: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "NLTK", "Scikit-learn"],
    timeline: "Nov 2025 – Jan 2026",
    links: [{ label: "Live", href: "https://crop-recommendation-app-szwcxhggrhcnvz6hmpexu5.streamlit.app/" }]
  },
  {
    title: "AI-Based Mental Health Chatbot",
    subtitle: "Live Project",
    description:
      "AI-powered chatbot for providing mental health support and resources.",
    meta: "Nov 2025 – Dec 2025",
    tags: ["Python", "React", "Node.js", "MongoDB", "Socket.io", "JWT", "Recharts", "Google Gemini API"],
    gradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-teal-900",
    imageUrl: "/healthcare.png",
    longDescription:
      "AI-powered chatbot for providing mental health support and resources.",
    highlights: [
      "Designed and implemented a Mental Health AI Chatbot using NLP, real-time data processing, and modern cloud technologies.",
    ],
    stack: ["Python", "React", "Node.js", "MongoDB", "Socket.io", "JWT", "Recharts", "Google Gemini API"],
    timeline: "Nov 2025 – Dec 2025",
    links: [{ label: "Live", href: "https://mentalhealth1122333.streamlit.app/" }]
  },
  {
    title: "Weather Dashboard",
    subtitle: "GitHub",
    description:
      "Real-time weather data visualization dashboard with interactive maps and forecasts.",
    meta: "Mar 2025 – Apr 2025",
    tags: ["Power BI", "Excel"],
    gradient: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900",
    imageUrl: "/WEATHER.png",
    longDescription:
      "Real-time weather data visualization dashboard with interactive maps and forecasts.",
    highlights: [
      "Integrated multiple weather APIs for comprehensive data coverage",
      "Created interactive visualizations and maps for real-time weather insights",
      "Implemented forecasting features using historical data and machine learning models",
    ],
    stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    timeline: "Mar 2025 – Apr 2025",
    links: [{ label: "GitHub", href: "https://github.com/AKASHGAUTAM1123/WEATHER-DASHBOARD-PBI-" }]
  },
];

const ProjectsSection = () => {
  const [selected, setSelected] = useState<MediaRowItem | null>(null);

  return (
    <>
      <MediaRow
        title="Projects"
        items={projects}
        onItemClick={(item) => setSelected(item)}
        cardClassName="w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]"
        imageClassName="h-48 sm:h-56 md:h-60 lg:h-64"
      />
      <MediaModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default ProjectsSection;
