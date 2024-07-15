import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("EMTG", function () {
  
  async function deployFixture() {
   
    const [user1, user2] = await ethers.getSigners();

    const EuroMtg = await ethers.getContractFactory("EuroMtg");
    const token = await EuroMtg.deploy();
    const StarLightNFT = await ethers.getContractFactory("StarLightNFT");

    const nft = await StarLightNFT.deploy(user1.address, user1.address);

    return { token, user1, user2, nft };
  }

  describe("EMTG", function () {
    it("EMTG", async function () {
      const {nft, token, user1, user2} = await loadFixture(deployFixture);

      // await token.mint(user2.address, ethers.parseEther("1000"));
      // await token.grantRole(await token.DEFAULT_ADMIN_ROLE(), user2.address);
      // await token.grantRole(await token.MINTER_ROLE(), user2.address);
      // await token.revokeRole(await token.MINTER_ROLE(), user1.address);
      // await token.revokeRole(await token.DEFAULT_ADMIN_ROLE(), user1.address);
    });
  });
});
