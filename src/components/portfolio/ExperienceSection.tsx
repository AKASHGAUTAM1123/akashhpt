import { useState } from "react";
import MediaRow, { MediaRowItem } from "./MediaRow";
import MediaModal from "./MediaModal";

const experiences: MediaRowItem[] = [
  {
    title: " JAVA Training",
    subtitle: "SprJ Technology",
    description: "Intensive Java training covering Java, Spring, Hibernate",
    meta: "Season 1",
    tags: ["6 Weeks", "Hands-on"],
    gradient: "bg-gradient-to-br from-neutral-900 via-zinc-800 to-stone-900",
    imageUrl: "/Java.png",
    longDescription: "Immersive JAVA training with production-style modules and hands-on builds.",
    highlights: ["Programming Fundamentals", "Spring Framework", "Project-based learning"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1cY5aqYKzjLavUzLmcSIkDt-8gouMen_1/view?usp=sharing",
      },
    ],
  },
  {
    title: "Ciphers School of Technology",
    subtitle: "Certification",
    description: "Certified in Python for Machine Learning, covering data manipulation, visualization, and ML basics.",
    meta: "Special Episode",
    tags: ["Machine Learning", "Python"],
    gradient: "bg-gradient-to-br from-amber-900 via-orange-900 to-red-900",
    imageUrl: "/Cipher.png",
    longDescription: "Validated skills in OCI fundamentals and cloud service deployment basics.",
    highlights: ["Compute + storage basics", "Cloud architecture", "Infrastructure fundamentals"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1zdHVkggr1miX0LnxFW1nhZdjlAQ3kX4R/view?usp=sharing",
      },
    ],
  },
  {
    title: "From Data to Insights",
    subtitle: "Certification",
    description: "SQL and data visualization certification covering querying, aggregation, and dashboard creation.",
    meta: "Special Episode",
    tags: ["LPU", "SQL", "Data Visualization"],
    gradient: "bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900",
    imageUrl: "/LPU.png",
    longDescription: "Deep dive into distributed systems and virtualization concepts.",
    highlights: ["Virtualization", "Scalable systems", "Cloud architecture"],
    links: [
      {
        label: "Certificate",
        href: "https://drive.google.com/file/d/1cY5aqYKzjLavUzLmcSIkDt-8gouMen_1/view?usp=sharing",
      },
    ],
  },
  {
    title: "150+ LeetCode Problems",
    subtitle: "DSA Mastery",
    description: "Consistent problem-solving across arrays, graphs, DP, and system design basics.",
    meta: "Bonus Content",
    tags: ["DSA", "Algorithms"],
    gradient: "bg-gradient-to-br from-emerald-900 via-green-900 to-lime-900",
    imageUrl: "/Leetcode1.png",
    longDescription: "Strong algorithmic foundation with consistent practice and problem solving.",
    highlights: ["Arrays, graphs, DP", "Complexity analysis", "Interview readiness"],
  },
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState<MediaRowItem | null>(null);

  return (
    <>
      <MediaRow
        title="Certificates"
        items={experiences}
        onItemClick={(item) => setSelected(item)}
      />
      <MediaModal item={selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default ExperienceSection;
