import React, {useState} from "react";
import './style.css'
import ReactModal from 'react-modal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
import {portfolioStyles} from "../CryptoPortfolioTracker/style";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import {EditCoin} from "./editCoin";


export const DataTableView = (props) =>{

    const classes = portfolioStyles()

    const [openEditCoin, setOpenEditCoin] = useState(false)



//----------------- open add Close modal ------------------------ //

    const handleOpenEditCoin = ()=>{
        setOpenEditCoin(true)
    }

    const handleCloseEditCoin=()=>{
        setOpenEditCoin(false)
    }
    return(
        <>
            <TableContainer >
                <Table className={classes.table} aria-label="simple table">
                    <TableHead >
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell style={{color:'#fff'}} align="right">NAME</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">HOLDINGS</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">QUANTITY</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">SHARE</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">24H PROFIT/LOSS</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">PRICE</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">24H CHANGE</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">ACTION</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow >
                            <TableCell style={{color:'#fff'}} component="th" scope="row">
                                1
                            </TableCell>
                            <TableCell style={{color:'#fff'}} align="right">BTC</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">$ 28,176 </TableCell>
                            <TableCell style={{color:'#fff'}} align="right">1</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">89.87%</TableCell>
                            <TableCell style={{color:'#81a94e'}} align="right">$ 1,285.67</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">$ 28,176 </TableCell>
                            <TableCell style={{color:'#84ad51'}} align="right">4.78%</TableCell>
                            <TableCell style={{color:'#fff'}} align="right">
                                <IconButton onClick={handleOpenEditCoin}>
                                    <EditIcon  style={{color:'#fff'}} />
                                </IconButton>
                            </TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            <ReactModal
                isOpen={openEditCoin}
                onRequestClose={handleCloseEditCoin}
                className="myModal"
                overlayClassName="modalOverlay"
                closeTimeoutMS={500}
            >
                <EditCoin
                    handleCloseEditCoin={handleCloseEditCoin}
                />
            </ReactModal>
        </>
    )
}