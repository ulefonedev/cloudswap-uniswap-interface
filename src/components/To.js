import { useState } from 'react'
import { ethers } from 'ethers'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ToSelect from './ToSelect'

const To = ({ uniswapRouter, tokenBal, token, inputAmount,
toToken, setToToken }) => {

    const[quote, setQuote] = useState('')

    return (
    <Grid container style={{paddingLeft: 10, paddingRight: 10}}>
        <Grid item xs={12}>
            <Typography >TO</Typography>
        </Grid>
        <Grid item xs={6}>
            <ToSelect 
                uniswapRouter={uniswapRouter}
                setQuote={setQuote} 
                tokenBal={tokenBal}
                token={token}
                inputAmount={inputAmount}
                toToken={toToken}
                setToToken={setToToken}    
                />
        </Grid>
        <Grid item xs={6}>
            <Typography align={'right'}>{quote}</Typography>
        </Grid>
        
    </Grid>
    )
}

export default To
