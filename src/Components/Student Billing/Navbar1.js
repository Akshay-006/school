import { Fragment } from "react"
import CustomizedMenus from '../Student Receipts/DropDown';
import CustomersFilters from '../Student Receipts/SearchBar';
import Button from '@mui/material/Button';
import '../Assets/StudentBilling.css';



const Navbar1 = () => {
    return (
        <Fragment>
            <div className="container2">
                <div className="nav2">
                    <div className="dropdownmenu2"><CustomizedMenus value='Class'/></div>
                    <div className="search2"><CustomersFilters/></div>
                    <div className="billingbutton"><Button variant="contained">Start Billing</Button></div>          
                </div>
            </div>
        </Fragment>
    )

}

export default Navbar1;