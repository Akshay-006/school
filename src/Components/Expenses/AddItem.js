import { Button, Typography } from "@mui/material";
import { Fragment } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import '../Assets/Expenses.css';
import DisabledByDefaultOutlinedIcon from '@mui/icons-material/DisabledByDefaultOutlined';

import CustomersFilters3 from "../Student Billing/Final";
import BasicTabs2 from "./Pay";
import WarningIcon from '@mui/icons-material/Warning';



export default function AddItem(){
    return (
        <Fragment>
            <div className="close">
                <div><Typography sx={{fontFamily: 'Lexend', fontWeight:'500'}}>Add Expense Entry</Typography></div>
                <div><Button variant="contained"><AddOutlinedIcon/> Add Item</Button></div>
            </div>
            <div className="addi">
                <div className="ki">
                    <div><Typography sx={{fontFamily:'Lexend'}}>Add Item</Typography></div>
                    <div><Button><DisabledByDefaultOutlinedIcon/></Button></div>
                </div>
                <br/>
                <div className="flox">
                    <div className="lot">
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>Item Description</Typography>
                            <CustomersFilters3 val='Product Name'/>         
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>Unit Price</Typography>
                            <CustomersFilters3 val='200'/>         
                        </div>
                        <div className="box">
                            <br/>Total Amount<br/>400
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>Quantity</Typography>
                            <CustomersFilters3 val='2'/>         
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>Tax %</Typography>
                            <CustomersFilters3 val='15 %'/>         
                        </div>
                    </div>
                    <div className="expremarks">
                        <div className="blue blue1" ><Typography sx={{fontFamily:'Lexend', fontWeight:'0'}}>Expense remarks</Typography></div>
                        <div className="blue blue3"></div>
                        <div className="blue4"></div>
                        
                    </div>
                </div>
                <div className="payment">
                    <Typography sx={{fontFamily:'Lexend'}}>Payment Method</Typography>
                    <br/>
                    <BasicTabs2/>
                    <br/>
                    <div className="warning">
                        <div><WarningIcon/></div>
                        <div>  </div>
                        <div><Typography sx={{fontFamily:'Manrope'}}>Warning msg if any</Typography></div>
                    </div>
                    <br/>
                    <div className="addbuton">
                        <div className="kol"><Button variant="filled" color="primary">Add</Button></div>
                    </div>
                </div>
            </div>
            


        </Fragment>
    )
}