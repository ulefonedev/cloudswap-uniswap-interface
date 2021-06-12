import { useState } from 'react'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import FromSelect from './FromSelect'



const From = ({ IERC20, userBalance, userAddress }) => {

    const [token, setToken] = useState('ETH');
    const [tokenBal, setTokenBal] = useState();  

    return (
        <Grid container style={{paddingLeft: 10, paddingRight: 10}}>
        <Grid item xs={12}>
            <Typography >FROM</Typography>
        </Grid>
        <Grid item xs={6}>
            <FromSelect 
                token={token} 
                setToken={setToken}
                tokenBal={tokenBal}
                setTokenBal={setTokenBal}
                IERC20={IERC20}
                userAddress={userAddress}
                
                />
        </Grid>
        <Grid item xs={6}>
            <Typography align={'right'}>{tokenBal}</Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography >Balanace:{userBalance} ETH</Typography>
        </Grid>
    </Grid>
    )
}

export default From
