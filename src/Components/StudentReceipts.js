import CustomersTable from "./Student Receipts/Table1";
import CustomersFilters from "./Student Receipts/SearchBar";
import './Assets/StudentReceipts.css';
import { Fragment } from "react";
import Button from '@mui/material/Button';
import CustomizedMenus from "./Student Receipts/DropDown";


const StudentReceipts = () => {
    return (
        <Fragment>
            <div className="container1">
                <div className="nav">
                    <div className="dropdownmenu1"><CustomizedMenus value='Class'/></div>
                    <div className="search"><CustomersFilters/></div>
                    <div className="findbutton"><Button variant="contained">Find Receipts</Button></div>          
                </div>
            </div>
            <br/>
            <br/>
            <div>
                <CustomersTable value='Selvakumar : 12 B'/>
            </div>

        </Fragment>

    );
}

export default StudentReceipts;

