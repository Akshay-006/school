import React, { Fragment, useState } from "react";
import '../Assets/StudentReceipts.css';
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function SummaryGrid(){
  // Initial rows data
  const [rows, setRows] = useState([
    {
      id: 1,
      refNumber: "228-3844-931-7689",
      date: "Oct 20, 2022",
      amount: 250
    },
    {
        id: 2,
        refNumber: "228-3844-931-7689",
        date: "Nov 26, 2022",
        amount: 500
      },
    {
        id: 2,
        refNumber: "228-3844-931-7689",
        date: "Nov 26, 2022",
        amount: 500
    },
    {
        id: 2,
        refNumber: "228-3844-931-7689",
        date: "Nov 26, 2022",
        amount: 500
    },
    {
        id: 2,
        refNumber: "228-3844-931-7689",
        date: "Nov 26, 2022",
        amount: 500
    }
  ]);

  // Function to add a new row
  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      refNumber: "123-4567-890-1234",
      date: "Nov 1, 2022",
      amount: 300
    };
    setRows([...rows, newRow]);
  };

  return (
    <Fragment>
      <div className="summary">
        <div className="grid-item">NO.</div>
        <div className="grid-item">Receipt Number</div>
        <div className="grid-item">Billing Date</div>
        <div className="Amount grid-item">Amount</div>
        <div className="grid-item">Action</div>
        {rows.map((row) => (
          <Fragment key={row.id}>
            <div className="items">{row.id}</div>
            <div className="items">{row.refNumber}</div>
            <div className="items">{row.date}</div>
            <div className="items">{row.amount}</div>
            <div className="items">
              <Button variant="contained">Print</Button>
            </div>
            <div className="items">
              <Button variant="outlined"><EditIcon/></Button>
            </div>
          </Fragment>
        ))}
      </div>
      
    </Fragment>
  );
};


