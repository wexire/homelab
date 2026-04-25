export const profile = {
  name: "Petro Polishchuk",
  title: "DevOps Engineer",
  bio: "Passionate about automation, Kubernetes, and self-hosting. Building a fully automated workflow to run my own applications — starting locally, moving to bare metal.",
  email: "polishchuk.petro.2211@gmail.com",
  github: "https://github.com/wexire",
  linkedin: "https://linkedin.com/in/wexire",

  skills: [
    "Kubernetes",
    "Terraform",
    "ArgoCD",
    "GitHub Actions",
    "Azure",
    "Docker",
    "Linux",
  ],

  experience: [
    {
      role: "DevOps Engineer",
      company: "ITSyndicate",
      period: "2023 — present",
      description:
        "Building and maintaining CI/CD pipelines, cloud infrastructure, and internal tooling.",
    },
  ],

  projects: [
    {
      name: "Homelab",
      description:
        "Personal lab for practicing infrastructure automation and self-hosting using Kubernetes, ArgoCD, and GitHub Actions.",
      url: "https://github.com/wexire/homelab",
      tags: ["Kubernetes", "ArgoCD", "GitHub Actions"],
    },
  ],
} as const;
