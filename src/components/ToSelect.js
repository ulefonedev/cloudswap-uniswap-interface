import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { makeStyles } from '@material-ui/core'
import { form } from 'react'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import Box from '@material-ui/core/Box'
import MenuItem from '@material-ui/core/MenuItem'
import { shadows } from '@material-ui/system'
import Tokens from '../addresses'

const symbols = ['', 'WETH', 'DAI', 'BAT', 'USDC', 'UNI']
const uniswapAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

const useStyles = makeStyles({
   btn: {
    borderRadius: 10,
    width: '97px',
    height: '36px' 
   }
  });
  
  export const ToSelect = ({ uniswapRouter, inputAmount, token, setQuote,
  toToken, setToToken }) => { 

    const classes = useStyles();
    

    const fetchQuote = async () => {
      if (typeof window.ethereum !== 'undefined'){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const baseAddress = Tokens.[token];
        const outputAddress = Tokens.[toToken];
        console.log(inputAmount, baseAddress, outputAddress)
        inputAmount = ethers.utils.parseUnits(inputAmount)
        const contract = new ethers.Contract(uniswapAddress, uniswapRouter, provider)
        try {
          const data = await contract.getAmountsOut(inputAmount, [baseAddress, outputAddress])
          const vals = data.map(el => ethers.utils.formatUnits(el._hex));
          setQuote(vals[1]);
        } catch (err) {
          console.log("Error: ", err)
        }     
      }
    } 
    
    const handleChange = (event) => {
        setToToken(event.target.value);
      };

      useEffect(() => {
        fetchQuote()
      }, [toToken, inputAmount]);

    return (
      <Box className={classes.btn} boxShadow={6}>
      <Button className={classes.btb} boxShadow={6} disableRipple={true}>{toToken}
      <Select 
        labelId="simple-select-outlined-label"
        id="simple-select-outlined"
        onChange={handleChange}
        value={toToken}
        label="FROM"
        style={{minWidth: 35}}
        disableUnderline>
        {symbols.map(el => <MenuItem value={el}>{el}</MenuItem>)}
      </Select>  
      </Button>
      </Box>
    )
  }

  export default ToSelect