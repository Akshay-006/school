import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import './Assets/Expenses.css';
import ExpenseGrid from './Expenses/ExpenseGrid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PrintIcon from '@mui/icons-material/Print';
import SaveIcon from '@mui/icons-material/Save';

const { Button } = require("@mui/material")
const { Fragment } = require("react")


const Expenses = () => {
    return(
        <Fragment>
            <br/>
            <div className="billexp">
                <div>Bill Expenses</div>
                <div><Button variant="contained"><AddOutlinedIcon/> Add Item</Button></div>
            </div>
            <br/>
            <br/>
            
            <ExpenseGrid/>
            
            <div className='lol'>
                <div className="gr">
                    <br/>
                    Total Amount
                    <br/>
                    400
                    <br/>
                     
                </div>
                <div className="bl">
                    <br/>
                    Total Tax
                    <br/>  
                    20
                    <br/>
                </div>
            </div>
            <br/>
            <div className="but">
                <div className="buttons">
                    <Button variant="contained" color="error"> <DeleteForeverIcon/>Discard</Button>
                    <Button variant="contained" color="success"><PrintIcon/>Preview and Print</Button>
                    <Button variant="contained" color="primary"><SaveIcon/>Save Bill</Button>
                </div>
            </div>
            
        </Fragment>
    )
}

export default Expenses;