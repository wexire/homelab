# Homelab

A personal lab for practicing and building a fully automated workflow to self-host my applications. The goal is to explore different tools across the stack - infrastructure provisioning, container orchestration, GitOps, and beyond — and wire them together into a cohesive, automated setup.

Currently running on Azure while I get the stack right. Once I have dedicated hardware, the plan is to migrate everything off the cloud and run it on-prem.

## Infrastructure

A single Azure VM (`Standard_B2ms`, 2 vCPU / 8 GB) running Ubuntu 24.04 LTS on a 64 GB Premium SSD, locked down to SSH from a single allowed IP.

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.14.8
- Azure subscription
- User-Assigned Managed Identity with federated credentials (see [Authentication](#authentication))

## Authentication

This project uses OIDC workload identity federation — no long-lived secrets.

### 1. Create a User-Assigned Managed Identity

In the Azure Portal, create a User-Assigned Managed Identity and assign it the `Contributor` role on your subscription.

### 2. Add Federated Credentials

Add two federated credentials on the managed identity:

| Credential | Entity type | Value |
|---|---|---|
| GitHub Actions — apply | Branch | `main` |
| GitHub Actions — plan | Pull request | — |

Set the issuer to `https://token.actions.githubusercontent.com` and the audience to `api://AzureADTokenExchange`.

### 3. GitHub Secrets

Add the following secrets to your GitHub repository:

| Secret | Description |
|---|---|
| `ARM_CLIENT_ID` | Managed identity client ID |
| `ARM_SUBSCRIPTION_ID` | Azure subscription ID |
| `ARM_TENANT_ID` | Azure AD tenant ID |
| `SSH_PUBLIC_KEY` | SSH public key for VM access |
| `SSH_ALLOWED_IP` | Your public IP or CIDR allowed to SSH |

## CI/CD

Branch pushes run fmt, validate, and tfsec. PRs to `main` run a plan and post the output as a comment. Applying is manual via `workflow_dispatch` on `main`.
