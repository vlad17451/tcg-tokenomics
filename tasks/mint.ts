import { task } from "hardhat/config";
import { EuroMtg } from "../typechain-types";

task("mint")
    .addParam("token")
    .addParam("amount")
    .addParam("recipient")
    .setAction(async ({ token: tokenAddress, amount, recipient }, { ethers }) => {
      const EuroMtg = await ethers.getContractFactory("EuroMtg");
      const token = EuroMtg.attach(tokenAddress) as EuroMtg;
      await token.mint(recipient, ethers.parseEther(amount)).then((tx) => tx.wait());
      console.log('done')
    });