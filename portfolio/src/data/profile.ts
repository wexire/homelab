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
        [
          "Managed reliability and deployment success of dozens of microservices across 10+ Kubernetes clusters",
          "Configured security of networking, IAM, and secrets management to meet SOC 2 and ISO 27001 standards",
          "Planned and led project migration from GCP to Azure from development to production environments and met client deadlines",
          "Optimized GitLab CI pipelines with reusable templates — reduced codebase by 100s of lines and pipeline time by 3x",
          "Supported developers with CI/CD onboarding for their services",
          "Created and executed a disaster recovery plan for the complete production system to another region",
          "Troubleshoot deployment and application errors in GKE/AKS and container hosting services like Cloud Run and Container Apps",
          "Rewrote Terraform modules to improve reusability for provisioning GCP and Azure resources",
          "Set up infrastructure and application monitoring with Prometheus & Grafana",
        ],
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
