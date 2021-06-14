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
                    <Button data-button-key="0" variant="contained" color="primary"
                    onClick={handleChangeButton}>CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    THUNDER
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button data-button-key="1" variant="contained" color="primary"
                    onClick={handleChangeButton}>CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    FROST
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button data-button-key="2" variant="contained" color="primary" 
                   onClick={handleChangeButton}>CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    SLEET
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button data-button-key="3" variant="contained" color="primary" 
                    onClick={handleChangeButton}>CLAIM</Button>
                </Grid>
                <Grid item xs={8}>
                    <Box {...customBorderProps}>
                    <Typography variant="h6" align="center">
                    VAPOUR
                    </Typography>
                    </Box>
                </Grid>
                <Grid item xs={4} align="center">
                    <Button data-button-key="4" variant="contained" color="primary"
                    onClick={handleChangeButton}>CLAIM</Button>
                </Grid>
            </Grid> 
        </Box>