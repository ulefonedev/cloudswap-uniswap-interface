import { ethers } from 'ethers'
import {useRef, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tokens from '../addresses'

const uniswapAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

const styles = {
    root: { 
        color: 'white',
        background: '#69C0FF',
        borderRadius: 3,
        '&:hover': {
          background: '#0f96f7'
        },
      }
  };
  
  const useStyles = makeStyles(styles);

  export const MainButton = ({ confirmSwap, setConfirmSwap, uniswapRouter, IERC20, 
    token, inputAmount, signer, toToken, userAddress}) => { 
    
    const confirmToggle = useRef(0);
    const classes = useStyles();
    
    const swap = () => {
      setConfirmSwap(true) 
      confirmToggle.current +=1
      console.log(confirmToggle.current)   
   }

   const executeSwap = async () => {
    const weiInputAmount = ethers.utils.parseUnits(inputAmount)
    const baseAddress = Tokens.[token];
    const outputAddress = Tokens.[toToken];   
    const contract = new ethers.Contract(uniswapAddress, uniswapRouter, signer)
    const deadline = new Date().getTime() + 1000;
    try {
        const amountsArray = await contract.getAmountsOut(weiInputAmount._hex, [baseAddress, outputAddress]);
        const amountOutMin = amountsArray[1];
        const transaction = await contract.swapExactTokensForTokens(
          weiInputAmount._hex,
          amountOutMin._hex, 
          [baseAddress, outputAddress], 
          userAddress,
          deadline);              
        }   
    catch (err) {
      console.log("Error: ", err)
    }    
   }

   const approve = async () => {
    if (typeof window.ethereum !== 'undefined'){ 
      confirmToggle.current +=1
      console.log('approve fired', confirmToggle.current)
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const address = Tokens.[token];   
      const contract = new ethers.Contract(address, IERC20, signer)
      const weiInputAmount = ethers.utils.parseUnits(inputAmount);
      await contract.approve(uniswapAddress, weiInputAmount._hex); 
    }         
  }

   
    return (<div>
      {confirmToggle.current > 0 ? <Button onClick={approve} className={classes.root} fullWidth>APPROVE
      </Button> : 
      <Button onClick={swap} className={classes.root} fullWidth>SWAP
      </Button>} <Button onClick={executeSwap} className={classes.root} fullWidth>CONFIRM
      </Button>  </div>  
    )
  };

export default MainButton
