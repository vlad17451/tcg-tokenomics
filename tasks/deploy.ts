import { task } from "hardhat/config";


task("deploy")
    .setAction(async (_, { ethers, run }) => {
      const EuroMtg = await ethers.getContractFactory("EuroMtg");
      const token = await EuroMtg.deploy().then((tx) => tx.waitForDeployment());
      console.log("EuroMtg", await token.getAddress());
      await run("verify:verify", {
        address: token,
      });
    });