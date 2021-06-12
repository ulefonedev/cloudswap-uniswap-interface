import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import SwapButton from './Swap'
import ClaimButton from './Claim'

const customProps = {
    display: 'flex',
    bgcolor: 'transparent',
    borderColor: '#E6F7FF',
    borderRadius: '10px',
    m: 1,
    border: 4,
    style: { width: '260px', height: '59px' },
  }


const SwipeOrClaim = () => {

    return (
        <Box {...customProps}>
            <Box p={1}>
                <SwapButton  />
            </Box>
            <Box p={1}>
                <ClaimButton  />
            </Box>
        </Box>
    )
}

export default SwipeOrClaim
