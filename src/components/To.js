import { ethers } from 'ethers'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ToSelect from './ToSelect'

const To = ({ uniswapRouter, tokenBal, token }) => {


    return (
    <Grid container style={{paddingLeft: 10, paddingRight: 10}}>
        <Grid item xs={12}>
            <Typography >TO</Typography>
        </Grid>
        <Grid item xs={6}>
            <ToSelect 
                uniswapRouter={uniswapRouter} 
                tokenBal={tokenBal}
                token={token}    
                />
        </Grid>
        <Grid item xs={6}>
            <Typography align={'right'}>00</Typography>
        </Grid>
        
    </Grid>
    )
}

export default To
