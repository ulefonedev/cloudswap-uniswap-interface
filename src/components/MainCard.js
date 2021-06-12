import { useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import From from './From'
import To from './To'
import MainButton from './MainButton'
import Quote from './Quote'
import InfoBox from './InfoBox'
import IERC20 from '../abis/IERC20.json'
import uniswap_router2_abi from '../abis/uniswap_router2_abi.json'

const uniswapRouter = uniswap_router2_abi;

  const customBorderProps = {
      border: 1,
      borderRadius: 10,
      borderColor: '#91D5FF',
      style: {width: '465px', height: '114px',}
  }

const MainCard = ({ userBalance, userAddress }) => {

    const customProps = {
        display: 'flex',
        bgcolor: '#E6F7FF',
        borderRadius: '10px',
        boxShadow : 8,
        m: 1,
        style: { width: '496px', height: '395px' },
      }

    const [token, setToken] = useState('ETH');
    const [tokenBal, setTokenBal] = useState('ETH');
    const [inputAmount, setInputAmount] = useState('0');
    const [toToken, setToToken] = useState('');
    const [confirmSwap, setConfirmSwap] = useState();


    console.log('input amount', inputAmount, typeof inputAmount);

    const infoBoxUI = () => {
        console.log('infoBoxUI')
        customProps.style.height = '588px'
        return <InfoBox />
    }

    return (
        <Box {...customProps}>
            <Grid container style={{flexGrow: 1}}>
                <Grid item xs={12}>
                <Typography variant="h5" 
                style={{paddingLeft:20, paddingTop:10}}>
                Swap
                </Typography>
                </Grid>
                <Grid item xs={12} 
                style={{paddingLeft:10, paddingRight:10}}>
                    <Box {...customBorderProps}>
                         <From 
                            IERC20={IERC20} 
                            userBalance={userBalance}
                            userAddress={userAddress}
                            token={token}
                            setToken={setToken}
                            tokenBal={tokenBal}
                            setTokenBal={setTokenBal}
                            setInputAmount={setInputAmount}
                         />
                    </Box>
                </Grid>
                <Grid item xs={12}
                style={{paddingLeft:10, paddingRight:10}}>
                    <Box {...customBorderProps} >
                         <To 
                            uniswapRouter={uniswapRouter}
                            token={token}
                            tokenBal={tokenBal}
                            inputAmount={inputAmount}
                            toToken={toToken}
                            setToToken={setToToken}
                         />
                    </Box>
                </Grid>
                <Grid item xs={12} style={{paddingLeft:10, paddingRight:10}}>
                    <Quote token={token} toToken={toToken} uniswapRouter={uniswapRouter}/>
                </Grid>
                <Grid item xs={12} 
                style={{paddingLeft:10, paddingRight:10}}>
                    {confirmSwap? infoBoxUI() : null} 
                </Grid>
                <Grid item xs={12}
                style={{paddingLeft:10, paddingRight:10}}>
                    <MainButton confirmSwap={confirmSwap} setConfirmSwap={setConfirmSwap}/>
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default MainCard
