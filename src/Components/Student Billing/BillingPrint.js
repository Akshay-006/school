import { Fragment } from "react";
import '../Assets/StudentBilling.css';
import { Button, Typography } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import logo from '../logo.jpeg';
import CustomersFilters3 from "./Final";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SpaIcon from '@mui/icons-material/Spa';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';

export default function BillingPrint(){
    return(
        <Fragment>
            <div className="container5">
                <div className="heading2">
                    <div>
                    <CardMedia 
                        sx={{height: 31, width: 102}}
                        component='img'
                        image={logo}
                    />
                   
                    <Typography sx={{fontFamily:'Lexend', fontWeight:'bold'}}>The School Pvt Limited</Typography>
                    </div>
                    <div>
                        23 Main Street<br/>
                        Cityville, Stateville<br/>
                        Countryland<br/>
                        PIN: 123456
                    </div>
                </div>
                <br/>
                <br/>
                <div className="firstline">
                    <div className="stuname">
                        <div>
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Student Name </Typography>
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>Selvakumar B </Typography>
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Admission no </Typography>
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Manrope'}}>1311312022 </Typography>
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Class </Typography>
                        </div>
                        <div className="b12b">
                            <Typography sx={{fontFamily:'Manrope'}}>12 B </Typography>
                        </div>
                        <div>
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Address </Typography>
                        </div>
                        <div className="b12b">
                            <Typography sx={{fontFamily:'Manrope'}}>456 Elm Avenue, Townsville, Countyshire
                            Regionland, PIN: 987654 </Typography>
                        </div>


                    </div>
                    <div className="billno2">
                        <div className="bill2">
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Billing number : </Typography>  
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}> 231220230001 </Typography>  
                        </div>
                        <div className="bill2">
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Billing date : </Typography>  
                            <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}> 2024-May-16 </Typography>  
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
                <div className="feecontainer">
                    <div><Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>NO.</Typography></div>
                    <div><Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Fee details</Typography></div>
                    <div className="amt3"><Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>AMOUNT</Typography></div>
                    <div><Typography sx={{fontFamily:'Lexend',fontWeight:'semibold'}}>Payment Remarks</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>01</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope',}}>Tution Fee</Typography></div>
                    <div className="amt3"><Typography sx={{fontFamily:'Manrope'}}>15000.00</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Cash received</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>02</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Transport Fee</Typography></div>
                    <div className="amt3"><Typography sx={{fontFamily:'Manrope'}}>4500.00</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Cash received</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>03.</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Swimming Fee</Typography></div>
                    <div className="amt3"><Typography sx={{fontFamily:'Manrope'}}>1100.00</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Cash received</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>04</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>Uniform and Stationary</Typography></div>
                    <div className="amt3"><Typography sx={{fontFamily:'Manrope'}}>7500.00</Typography></div>
                    <div><Typography sx={{fontFamily:'Manrope'}}>REF : 321654987</Typography></div>
                </div>
                <div className="boxamt">
                    <div className="toamt">
                        <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Total Fee Amount<br/>15000.00</Typography>
                    </div>
                </div>
                <div className="paymentmethod">
                    <Typography sx={{fontFamily:'Lexend',fontWeight:'bold'}}>Payment Method</Typography>
                    <br/>
                    <div className="payid">
                        <div><Typography sx={{fontFamily:'Manrope',fontWeight:'bold'}}>Bank</Typography></div>
                        <div><Typography sx={{fontFamily:'Manrope',fontWeight:'bold'}}>Payment mode</Typography></div>
                        <div><Typography sx={{fontFamily:'Manrope',fontWeight:'bold'}}>Transfer Ref</Typography></div>
                        <div><CustomersFilters3 val='International Bank'/></div>
                        <div><CustomersFilters3 val='Credit Card / Debit Card / UPI / Online net Banking'/></div>
                        <div><CustomersFilters3 val='123/1000/321'/></div>
                    </div>
                    <br/><br/><br/><br/><br/>
                    <div>
                        <Box
                            sx={{
                            width: '79%',  
                            }}
        >
                            <TextField fullWidth label="Special Instruction Text or Comments" id="fullWidth" />
                        </Box>
                    </div>
                    <br/><br/><br/><br/>
                    <div className="buttons5">
                        <div className="bu1"><Button variant="filled" color="success"><SpaIcon/><Typography sx={{fontFamily:'Manrope'}}>Download</Typography></Button></div>
                        <div className="bu2"><Button variant="filled" color="success"><DoNotDisturbAltIcon/><Typography sx={{fontFamily:'Manrope'}}>Save</Typography></Button></div>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}