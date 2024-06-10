import { Fragment } from "react"
import SummaryGrid from "./Expense Summary/SummaryGrid";
import UseFormControl from "./Student Billing/TextField";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Button } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CustomersFilters from "./Expense Summary/Input";
import CustomersFilters1 from "./Expense Summary/Input";

const ExpenseSummary = ({number}) => {
    return (
        <Fragment>
            <br/>
        <div className="tysm">
            <div className="typo"><CustomersFilters1 val='09 Feb 2021'/></div>
            <div className="typo"><CustomersFilters1 val='09 Feb 2021'/></div>
            <div className="typo"><Button variant="contained"><SearchIcon/> Search</Button></div>

        </div>
        <br/>
        <div className="header">
            <div className="font">Expense Summary</div>
            <div>Total {number} Orders</div>
        </div>
        <br/>
        <br/>
            <SummaryGrid/>
        <br/>
        <div className="download">
            <div><Button variant="contained">Download</Button></div>
        </div>
        
        </Fragment>
    )
}

export default ExpenseSummary;