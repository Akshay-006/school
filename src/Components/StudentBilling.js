import { Fragment } from "react";
import Grid1 from "./Student Billing/Grid1";
import Navbar1 from "./Student Billing/Navbar1";

const StudentBilling = () => {
    return (
        <Fragment>
            <Navbar1/>
            <br/>
            <br/>
            <Grid1 name='Selvakumar B' cl='12 B' billnumber='221812913' pay='15000.00' dis='0.00'/>
        </Fragment>
    )

}

export default StudentBilling;