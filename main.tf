
provider "azurerm" {
  version = "~> 2.5.0"
  features {}
}

terraform {
  backend "azurerm" {
    resource_group_name  = "rg-slashicorp-azure-tf"
    storage_account_name = "slashiclienttf"
    container_name       = "terraform-state"
    key                  = "terraform.tfstate"
  }
}

variable "imagebuild" {
  type        = string
  description = "Latest Image Build"
}

resource "azurerm_resource_group" "slashicorp_terraform_demo" {
  name = "ans-tes-grp"
  location = "Australia East"
}

resource "azurerm_container_group" "tfcg_test" {
  name                      = "node-taste-anish"
  location                  = azurerm_resource_group.slashicorp_terraform_demo.location
  resource_group_name       = azurerm_resource_group.slashicorp_terraform_demo.name

  ip_address_type     = "public"
  dns_name_label      = "slashicorp-api"
  os_type             = "Linux"

  container {
    name            = "dimdim-backend-api"
    image           = "slashicorp/dimdim-backend:${var.imagebuild}"
    cpu             = "1"
    memory          = "1"

    ports {
      port        = 80
      protocol    = "TCP"
    }
  }
}
