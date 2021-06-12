import { useState } from 'react'
import './App.css';
import logo from './images/logo.png'
import MainCard from './components/MainCard'
import SwipeOrClaim from './components/SwapOrClaim'
import ConnectButton from './components/ConnectButton'
import Grid from '@material-ui/core/Grid'
import { createMuiTheme, } from '@material-ui/core/styles'
import { makeStyles, ThemeProvider } from '@material-ui/styles';



const cloudswap = createMuiTheme({
  typography: {
    fontFamily: ['IBM Plex Mono','Roboto','Helvetica Neue'].join(','),
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600},
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  }
});

const useStyles = makeStyles(() => ({
  grid: {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(to bottom, #0ED4FF, #FFFFFF)'
  }
}));

function App() {

  const [userBalance, setUserBalance] = useState();
  const [userAddress, setUserAddress] = useState();

  const classes = useStyles();


  return (
   <ThemeProvider theme={cloudswap}> 
   <Grid container spacing={2} className={classes.grid}>
     <Grid item xs={4}>
     <img src={logo} alt="logo" style={{ 
       paddingLeft: 10,
       paddingTop: 18 }}/>
     </Grid>
     <Grid xs={4} container 
        direction="column"
        alignItems="center"
        justify="center"
        style={{ paddingTop: 10}}>
       <SwipeOrClaim />
     </Grid>
     <Grid xs={4} container 
        justify="flex-end"
        alignItems="right"
        style={{paddingTop: 25, paddingRight: 35}}>
      <ConnectButton 
        userBalance={userBalance}
        setUserBalance={setUserBalance}
        userAddress={userAddress}
        setUserAddress={setUserAddress} 
        />
     </Grid>
     <Grid container
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh', paddingTop: 45 }} >
       <MainCard 
        userBalance={userBalance}
        userAddress={userAddress}
       />
     </Grid>
   </Grid>
   </ThemeProvider>
  )
}

export default App;
