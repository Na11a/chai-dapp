const hre = require("hardhat");

async function main() {
  const FICEToken = await hre.ethers.deployContract("chai");

  // Wait for the transaction to be mined
  await FICEToken.waitForDeployment();

  // Log the address of the deployed contract
  console.log("Contract deployed to:", FICEToken.target);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });