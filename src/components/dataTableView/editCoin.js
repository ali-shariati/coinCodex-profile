import React from 'react'
import {Divider, Grid, Typography} from "@mui/material";
import IconButton from "@material-ui/core/IconButton";
import ClearIcon from '@material-ui/icons/Clear';


export const EditCoin =(props)=>{

    const {handleCloseEditCoin} = props

    const closeButtonHandler =()=>{
        handleCloseEditCoin()
    }
    return(
        <>
            <Grid item  xs={12} md={12} lg={12} >

                <Grid container >
                    <Grid item lg={8}  >
                        <Typography  >
                            <strong>Edit Coin</strong>
                        </Typography>

                    </Grid>
                    <Grid item lg={4}>
                        <IconButton
                            onClick={closeButtonHandler}
                            style={{float:'right' , marginRight:5,color:'#2962FF',width:30,height:30}}
                        >
                            <ClearIcon  style={{fontSize:20}}/>
                        </IconButton>
                    </Grid>
                </Grid>
                <Divider />
            </Grid>
        </>
    )
}