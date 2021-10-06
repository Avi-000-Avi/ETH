import React, { useContext, useState, useEffect } from "react";
import { Button } from "@chakra-ui/button";
import { ContractContext } from "../contexts/ContractContext";

export default function BurnFunction(props) {

    const tokenId = props.tokenId

    const {
        signedContract,
        signer,
        stateUserAddress,
        provider,
        contractAddress,
      } = useContext(ContractContext);

      console.log(signedContract, tokenId)
    
    
      const burn = async () => {
        // let mintTx = await signedContract.burn(
        //     tokenId
        // );

        console.log('hello')
      };
    

    return (
        <Button colorScheme='red' onClick={burn}>
            Burn
        </Button>
    )
}
