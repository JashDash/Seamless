const hre = require("hardhat");

async function main() {
  const Seamless = await hre.ethers.getContractFactory("Seamless");
  const seamless = await Seamless.deploy();
  await seamless.deployed();

  console.log(seamless.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
