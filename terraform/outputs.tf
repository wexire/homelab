output "ssh_command" {
  description = "Command to SSH into the VM."
  value       = "ssh -i ~/.ssh/id_rsa ${azurerm_linux_virtual_machine.vm.admin_username}@${azurerm_public_ip.pip.ip_address}"
}
