import React, { createContext, useState } from "react";
import { abi } from "../abi/abi";
import { web3 } from "web3";
import { ethers, BigNumber } from "ethers";

export const ContractContext = createContext();

export function ContractProvider(props) {
<<<<<<< HEAD
  const contractAddress = "0xcd8a1c3ba11cf5ecfa6267617243239504a98d90";
=======
  const contractAddress = "0x82e01223d51Eb87e16A03E24687EDF0F294da6f1";
>>>>>>> 0500905b79a13835b7d29f73043b02e84218729b
  const ABI = abi.abi;
  const ALCHEMY = "https://eth-mainnet.alchemyapi.io/v2/XLbyCEcaLhQ3x_ZaKBmZqNp8UGgNGX2F";

  const [stateUserAddress, setstateUserAddress] = useState('')
  const [signedContract, setSignedContract] = useState()
  const [signer, setSigner] = useState()
  const [provider, setProvider] = useState()
  

  let userAddress;

  const connect = async () => {
    let provider
    if(window.ethereum != null){
    provider = new ethers.providers.Web3Provider(window.ethereum, "any")}
    //  provider = new ethers.providers.JsonRpcProvider();
    await provider.send("eth_requestAccounts", [0]);
    let signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, ABI, provider);

    let signedContract = contract.connect(signer);

    userAddress = await signer.getAddress();

    setSignedContract(signedContract)

    setstateUserAddress(userAddress)

    setProvider(provider)

    setSigner(signer)

    console.log('success', signer, signedContract, userAddress, provider)

  };


  return (
    <ContractContext.Provider value={{connect, stateUserAddress, signedContract, signer, provider,contractAddress}}>
      {props.children}
    </ContractContext.Provider>
  );
}
