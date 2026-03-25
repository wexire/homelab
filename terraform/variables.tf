variable "location" {
  description = "Azure region where resources will be created."
  type        = string
  default     = "eastus"
}

variable "admin_username" {
  description = "Admin username for the VM."
  type        = string
  default     = "azureuser"
}

variable "admin_ssh_public_key" {
  description = "SSH public key for VM access. Set via TF_VAR_admin_ssh_public_key (GitHub secret SSH_PUBLIC_KEY)."
  type        = string
  sensitive   = true
}

variable "ssh_allowed_ip" {
  description = "Your public IP (or CIDR) allowed to SSH into the VM. Set via TF_VAR_ssh_allowed_ip (GitHub secret SSH_ALLOWED_IP)."
  type        = string
  sensitive   = true
}

variable "vm_size" {
  description = "Azure VM size. Standard_B2ms (2 vCPU, 8 GB) is a cost-effective option for single-node Kubernetes."
  type        = string
  default     = "Standard_B2ms"
}
