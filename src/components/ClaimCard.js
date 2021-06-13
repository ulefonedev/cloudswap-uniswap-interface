import { ethers } from 'ethers'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AirdropFactory from '../abis/AirdropFactory.json'

const airdropFactory = '0xB4f80F498ec97B4b3aBCB6d96452606dd8428BCa'
let tokens = [];

const customProps = {
    display: 'flex',
    bgcolor: '#E6F7FF',
    borderRadius: '10px',
    boxShadow : 8,
    m: 1,
    style: { width: '496px', height: '395px' },
  }

  const customBorderProps = {
    border: 3,
    borderRadius: 10,
    borderColor: '#91D5FF',
    style: {width: '320px', height: '36px',}
}

    const customButtonProps = {
        
    }



const populateList = async () => {
    if (typeof window.ethereum !== 'undefined'){
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = new ethers.Contract(airdropFactory, AirdropFactory, provider)
        try {
            tokens = await contract.getTokens();
            console.log(tokens);
        } catch (err) {
            console.log("Error: ", err)
        }         
    }
}

    populateList(); //populate list on load
    

const ClaimCard = () => {


    return (
        <Box {...customProps}>      
             <Grid container style={{flexGrow: 1, 
            paddingTop: 10, paddingLeft:10, paddingRight:10}}>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    RAIN
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button variant="contained" color="primary">CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    THUNDER
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button variant="contained" color="primary">CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    FROST
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button variant="contained" color="primary" >CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    SLEET
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button variant="contained" color="primary" >CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    VAPOUR
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button variant="contained" color="primary">CLAIM</Button>
                </Grid>
            </Grid> 
        </Box>
    )
}

export default ClaimCard
