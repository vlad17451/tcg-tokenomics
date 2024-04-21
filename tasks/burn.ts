import { task } from "hardhat/config";
import { EuroMtg } from "../typechain-types";

task("burn")
    .addParam("token")
    .addParam("amount")
    .setAction(async ({ token: tokenAddress, amount }, { ethers }) => {
      const EuroMtg = await ethers.getContractFactory("EuroMtg");
      const token = EuroMtg.attach(tokenAddress) as EuroMtg;
      await token.burn(ethers.parseEther(amount)).then((tx) => tx.wait());
    });