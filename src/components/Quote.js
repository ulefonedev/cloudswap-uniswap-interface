import { useState, useEffect} from 'react'
import { ethers } from 'ethers'
import Typography from '@material-ui/core/Typography'
import Tokens from '../addresses'

const uniswapAddress = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D'

const Quote = ({ token, toToken, uniswapRouter }) => {

    const [singleQuote, setSingleQuote] = useState();
    
    const fetchSingleQuote = async () => {
        if (typeof window.ethereum !== 'undefined'){
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const baseAddress = Tokens.[token];
          const outputAddress = Tokens.[toToken];
          const contract = new ethers.Contract(uniswapAddress, uniswapRouter, provider)
          let singleToken = "1"
          singleToken = ethers.utils.parseUnits(singleToken);
          try {
            const data = await contract.getAmountsOut(singleToken._hex , [baseAddress, outputAddress])
            const vals = data.map(el => ethers.utils.formatUnits(el._hex));
            setSingleQuote(parseFloat(vals[1]).toFixed(7));
          } catch (err) {
            console.log("Error: ", err)
          }
        }
      }
      
      useEffect(() => {
          fetchSingleQuote();
      },[token, toToken])
    
    
    return (
        <Typography style={{paddingLeft: 5 }}>
            1 {token} = {singleQuote}
        </Typography>
        
    )
}

export default Quote
