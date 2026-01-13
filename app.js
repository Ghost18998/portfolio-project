// Fill in your real links here:
const LINKS = {
  demo: "https://example.com",     // optional
  repo: "https://github.com/yourusername/portfolio-project",
  linkedin: "https://www.linkedin.com/in/yourhandle/",
  email: "mailto:youremail@example.com"
};

document.getElementById("demoLink").href = LINKS.demo;
document.getElementById("repoLink").href = LINKS.repo;
document.getElementById("linkedinLink").href = LINKS.linkedin;
document.getElementById("emailLink").href = LINKS.email;

document.getElementById("year").textContent = new Date().getFullYear();

// Tiny interactive chart (no libraries)
const data = [
  { label: "0–3", value: 42, note: "Highest churn: new customers" },
  { label: "4–6", value: 28, note: "Churn drops after onboarding" },
  { label: "7–12", value: 19, note: "Stabilizing cohort" },
  { label: "12+", value: 12, note: "Most loyal customers" }
];

const bars = document.getElementById("bars");
const note = document.getElementById("barNote");

data.forEach(d => {
  const el = document.createElement("div");
  el.className = "bar";
  el.style.height = `${d.value * 3}px`;
  el.title = `${d.label} months: ${d.value}% churn`;

  const label = document.createElement("span");
  label.textContent = d.label;

  el.appendChild(label);
  el.addEventListener("click", () => {
    note.textContent = `${d.label} months → ${d.value}% churn. ${d.note}`;
  });

  bars.appendChild(el);
});
