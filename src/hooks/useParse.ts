import { useCallback } from "react";
import { providers, Contract } from "ethers";
import abi from "../abi.json"; 
const RPC = "https://rpc.ankr.com/eth_goerli"; // RPC
const provider = new providers.JsonRpcProvider(RPC); // создание провайдера
const addressPS = "0x4A5EBa6bf508B1567b3aF429A6a76BDAaeF77c94"; // адрес контракта paymentService 



export const useParse = () => {
  
    return useCallback(
      async (address: string) => {
        try {
            const contractInstance = new Contract(addressPS, abi, provider);
            let filter = contractInstance.filters.Deposit(address);
            const deposits = await contractInstance.queryFilter(filter, -3000);
            console.log("DEPOSITS: ");
            console.log(deposits);
        } catch (error: any) {
            const errorMessage =
            error?.error?.message ||
            error?.message ||
            "Check console logs for error";
            console.error(error);
            console.error(errorMessage);
        }
      },
      []
    );
  };