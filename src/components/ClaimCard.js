import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AirdropFactory from '../abis/AirdropFactory.json'
import AirdropERC20 from '../abis/AirdropERC20.json'
import { pop } from 'fp-ts/lib/Map'

const airdropFactory = '0xB4f80F498ec97B4b3aBCB6d96452606dd8428BCa'
let tokens = [
    {name : 'RAIN', address: '', claimable: ''},
    {name: 'THUNDER', address: '', claimable: ''},
    {name: 'FROST', address: '', claimable: ''},
    {name: 'SLEET', address: '', claimable: ''},
    {name: 'VAPOUR', address: '', claimable: ''},
]

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


const ClaimCard = ({ signer }) => {

    const [claimable, setClaimable ] = useState();

    const populateList = async () => {
        if (typeof window.ethereum !== 'undefined'){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const contract = new ethers.Contract(airdropFactory, AirdropFactory, provider)
            try {
                const addresses = await contract.getTokens();
                for(let i = 0; i < addresses.length; i++){ //maps names to addresses
                    tokens[i].address = addresses[i];        
                }
                isClaimed(provider);
            } catch (err) {
                console.log("Error: ", err)
            }         
        }
    }

    const isClaimed = async (provider) => {       
        tokens.forEach( async token => {
            const contract = new ethers.Contract(token.address, AirdropERC20, provider);
            try {
                const data = await contract.claimable(token.address)
                const claimable = ethers.utils.formatUnits(data._hex)
                if(token.claimable === undefined){
                    token.claimable = 0;
                } else {
                token.claimable = claimable; 
                setClaimable(claimable)                 
                console.log('token is', token);
                    }
                } 
            catch(err) {
                console.log("Error: ", err)
            }
        });        
    }

    const claim = async (e) => {
        if (typeof window.ethereum !== 'undefined'){
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const address = e.currentTarget.dataset.buttonKey;
            const contract = new ethers.Contract(address, AirdropERC20, signer)
            console.log(contract);
            try {
                const data = await contract.claim()
                populateList();
            }
            catch(err) {
                console.log("Error: ", err)
            }

        }
    }

    useEffect(() => {
        populateList()
     }, [tokens]);
    

    return (
        <Box {...customProps}>
            <Grid container style={{flexGrow: 1, 
                paddingTop: 10, paddingLeft:10, paddingRight:10}}>              
                    {tokens.map(token => {
                    return (  
                        <Grid container>
                        <Grid item xs={8}>
                            <Box {...customBorderProps}>
                                <Typography  align="center">
                                {`${token.claimable} ${token.name}`}
                                </Typography>
                            </Box>
                        </Grid>
                            <Grid item xs={4} align="center">
                                <Button 
                                data-button-key={token.address} 
                                variant="contained" 
                                color="primary"
                                onClick={claim}>CLAIM</Button>
                        </Grid>
                    </Grid>
                    ) 
                    })}
            </Grid>       
        </Box>
    )
}

export default ClaimCard
