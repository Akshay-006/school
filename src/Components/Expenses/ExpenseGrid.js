import React, { Fragment, useState } from "react";
import { Button } from "@mui/material";
import Input from "./Field";
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Input1 from "./Field";
import CustomersFilters3 from '../Student Billing/Final';
export default function ExpenseGrid(){
  // Initial rows data
  const [rows, setRows] = useState([
    {
      id: 3216546,
      itemdes: "Elizabeth Lopez",
      Tax: 28,
      amount: 250
    },
    {
        id: 3216547,
        itemdes: "Mathew Martinez",
        Tax: 28,
        amount: 250
    },
    {
        id: 3216548,
        itemdes: "Elizabeth Hall",
        Tax: 28,
        amount: 250
    },
    {
        id: 3216549,
        itemdes: "Maria White",
        Tax: 28,
        amount: 250
    },
    {
        id: 3216550,
        itemdes: "Elizabeth Watson",
        Tax: 28,
        amount: 250
    },
    {
        id: 3216551,
        itemdes: "Elizabeth Allen",
        Tax: 28,
        amount: 250
    },
    {
        id: 3216552,
        itemdes: "Caleb Jones",
        Tax: 28,
        amount: 250
    }

  ]);

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      itemses: "Person",
      Tax: "28%",
      amount: 300
    };
    setRows([...rows, newRow]);
  };

  return (
    <Fragment>
      <div className="expgrid">
        <div className="refno">Ref No.</div>
        <div className="itemdes">Item Description</div>
        <div className="quantity">Quantity</div>
        <div className="unitprice">Unit Price</div>
        <div className="tax">Tax %</div>
        <div className="taxamt">Tax Amount</div>
        <div className="amt">Amount</div>
        <div className="action edit">Action</div>
        {rows.map((row) => (
          <Fragment key={row.id}>
            <div className="items">{row.id}</div>
            <div className="items">{row.itemdes}</div>
            <div className="items"><CustomersFilters3 val='Input Text'/></div>
            <div className="items"><CustomersFilters3 val='Input Text'/></div>
            <div className="items"><CustomersFilters3 val='Input Text'/></div>
            <div className="items">{row.Tax}</div>
            <div className="items">{row.amount}</div>
            <div className="items"><Button variant="outlined"><CreateOutlinedIcon/></Button></div>
            <div className="items"><Button variant="outlined"><DeleteOutlineOutlinedIcon/></Button></div>
          </Fragment>
        ))}
      </div>
    </Fragment>
  );
};

    
