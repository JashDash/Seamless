const hre = require("hardhat");

async function main() {
  const Seamless = await hre.ethers.getContractFactory("Seamless");
  const seamless = await Seamless.deploy();
  await seamless.deployed();

  const tx = await seamless.functions.performActivity(
    "0x70997970C51812dc3A010C7d01b50e0d17dc79C8",
    "Watched match",
    10,
    5
  );

  console.log(tx);
}

main().catch((error) => {
  console.error("error");
  process.exitCode = 1;
});
