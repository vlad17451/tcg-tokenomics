import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config()

import "./tasks/deploy";
import "./tasks/mint";
import "./tasks/burn";

const MNEMONIC = process.env.MNEMONIC;

const config: HardhatUserConfig = {
  solidity:  {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 2000
          }
        }
      },
      {
        version: "0.8.24", // for WDEL
      }
    ]
  },
  networks: {
    opt: { // optimism
      url: "https://optimism.drpc.org",
      accounts: {
        mnemonic: MNEMONIC,
      },
    }
    
  },
  etherscan: {
    apiKey: {
      optimisticEthereum: ""
    }
  }
};

export default config;
