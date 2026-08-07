import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Globe,
  FileText,
  Bot,
  ShieldCheck,
} from "lucide-react";
import "../styles/loading.css";

const steps = [
  {
    icon: Search,
    title: "Query Agent",
    body: "Understanding your research topic",
  },
  {
    icon: Globe,
    title: "Search Agent",
    body: "Searching trusted websites",
  },
  {
    icon: FileText,
    title: "Scraper Agent",
    body: "Extracting useful information",
  },
  {
    icon: Bot,
    title: "Report Agent",
    body: "Generating AI research report",
  },
  {
    icon: ShieldCheck,
    title: "Critic Agent",
    body: "Reviewing and improving report",
  },
];

function Loading() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="loading">

      <div className="spinner"></div>

      <h2>Researching...</h2>

      <p>Please wait while our AI agents work together.</p>

      <div className="pipeline">

        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              className={`agent-card ${
                index <= active ? "active" : ""
              }`}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06 }}
            >
              <Icon size={34} />

              <h3>{step.title}</h3>

              <p>{step.body}</p>

              {index <= active && (
                <span className="status">
                  ✔ Running
                </span>
              )}
            </motion.div>
          );
        })}

      </div>

    </section>
  );
}

export default Loading;