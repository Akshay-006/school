import { Fragment } from "react"
import '../Assets/Grid1.css';
import { Button, Typography } from "@mui/material";
import CustomizedMenus from "../Student Receipts/DropDown";
import BasicTextFields from "./Placeholder";
import BasicTabs1 from "./SideNav";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import UseFormControl from "./TextField";
import FullWidthTextField from "./Placeholder";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';
import CustomersFilters3 from "./Final";


export default function Grid1({name, cl, billnumber,pay,dis}){
    return (
        <Fragment>
            <div className="gridcontainer">
                <div className="details">
                    <div className="detail1">
                        <Typography sx={{fontWeight:'bold'}}>
                            {name} : Class {cl}
                        </Typography></div>
                    <div className="billnumber">
                        <Typography sx={{fontWeight:'bold'}}>
                            Bill Number : {billnumber}
                        </Typography></div>
                </div>
                <br/>
                <div className="gridcontainer2">
                    <div className="feetype">Fee type</div>       
                    <div className="feeamt">Fee Amount</div>     
                    <div className="feedis">Fee Discount</div>
                    <div className="feedis2">Fee Amount</div>
                    <div></div>
                    <div><CustomizedMenus value='Fee Type'/></div>
                    <div><CustomersFilters3 val='Fee Amount'/></div>
                    <div><CustomersFilters3 val='Fee Discounts %'/></div>
                    <div>15,000.00</div>
                    <div></div>
                    <div><CustomizedMenus value='Fee Type'/></div>
                    <div><CustomersFilters3 val='Fee Amount'/></div>
                    <div><CustomersFilters3 val='Fee Discounts %'/></div>
                    <div>15,000.00</div>
                    <div className="add"><Button variant="text"><AddCircleOutlineIcon/> Add Item </Button></div>
                </div>
                <br/>
                <div className="bank">
                    <Typography sx={{fontWeight:'bold'}}>Payment Method</Typography>
                    <br/>
                    <div className="side">
                        <div>
                            <BasicTabs1/>
                        </div>
                    </div>
                </div>
                <div className="plo">
                    <div className="pay"> 
                        <Button variant="contained">Add Payment Method</Button>
                    </div>
                    <div className="plot">
                        <div className="grey">
                            <br/>
                            Total Fee Amount payable
                            <br/>
                            {pay}
                        </div>
                        <div className="blue">
                            <br/>
                            Total Fee Amount payable
                            <br/>  
                            {dis}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <div>
                    <FullWidthTextField/>
                </div>
                <div className="but">
                    <div className="buttons">
                        <Button variant="contained" color="error"> <DeleteForeverIcon/>Discard</Button>
                        <Button variant="contained" color="success"><PrintIcon/>Preview and Print</Button>
                        <Button variant="contained" color="primary"><SaveIcon/>Save Bill</Button>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}