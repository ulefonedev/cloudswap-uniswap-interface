import Box from '@material-ui/core/Box'

const customBorderProps = {
    border: 2,
    borderRadius: 10,
    borderColor: '#91D5FF',
    style: {height: '114px',}
}

const InfoBox = () => {
    return (
        <div>
        <Box bgcolor="info.main" {...customBorderProps}> A box</Box>
            
        </div>
    )
}

export default InfoBox
