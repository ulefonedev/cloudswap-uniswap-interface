import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import From from './From'
import To from './To'
import MainButton from './MainButton'
import IERC20 from '../abis/IERC20.json'

const customProps = {
    display: 'flex',
    bgcolor: '#E6F7FF',
    borderRadius: '10px',
    boxShadow : 8,
    m: 1,
    style: { width: '496px', height: '395px' },
  }

  const customBorderProps = {
      border: 1,
      borderRadius: 10,
      borderColor: '#91D5FF',
      style: {width: '465px', height: '114px',}
  }

const MainCard = ({ userBalance, userAddress }) => {
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
                         />
                    </Box>
                </Grid>
                <Grid item xs={12}
                style={{paddingLeft:10, paddingRight:10}}>
                    <Box {...customBorderProps} >
                         <To />
                    </Box>
                </Grid>
                <Grid item xs={12}
                style={{paddingLeft:10, paddingRight:10}}>
                    <MainButton />
                </Grid>
            </Grid>
            
        </Box>
    )
}

export default MainCard
