import * as pulumi from '@pulumi/pulumi';
import * as azure from '@pulumi/azure';

export const rgName = process.env["RG_NAME"]
// Create an Azure Resource Group
export const resourceGroup = new azure.core.ResourceGroup(rgName, {
  location: "centralus"
});

// Create an Azure resource (Storage Account)
// const account = new azure.storage.Account('storage', {
//   // The location for the storage account will be derived automatically from the resource group.
//   resourceGroupName: resourceGroup.name,
//   accountTier: 'Standard',
//   accountReplicationType: 'LRS',
// });

// Export the connection string for the storage account
//export const connectionString = account.primaryConnectionString;
