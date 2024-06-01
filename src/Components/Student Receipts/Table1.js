'use client';

import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import LocalPrintshopSharpIcon from '@mui/icons-material/LocalPrintshopSharp';

function noop() {
  // do nothing
}

function CustomersTable({ count = 0, page = 0, rowsPerPage = 5,value }) {
  const [rows, setRows] = useState([
    {
      id: '01',
      receiptNumber: '228-3844-931-7689',
      billingDate: new Date('10/20/22'),
      amount: '$250',
    },
    {
      id: '02',
      receiptNumber: '661-7963-661-7963',
      billingDate: new Date('10/20/22'),
      amount: '$687',
    },
    {
        id: '03',
        receiptNumber: '958-4030-182-0187',
        billingDate: new Date('10/20/22'),
        amount: '$891',
      },
      {
        id: '04',
        receiptNumber: '958-4030-182-0187',
        billingDate: new Date('10/20/22'),
        amount: '$165',
      },
      {
        id: '02',
        receiptNumber: '958-4030-182-0187',
        billingDate: new Date('10/20/22'),
        amount: '$115',
      }
  ]);



  return (
    <Fragment>
    <Typography sx={{fontWeight:'bold'}}>
      Billing Summary -for {value}
    </Typography>
    <br/>
    <Card>
      <Box sx={{ overflowX: 'auto', width: '100%' }}>
        <Table sx={{ width: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Receipt Number</TableCell>
              <TableCell>Billing Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow hover key={row.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.receiptNumber}</TableCell>
                <TableCell>{dayjs(row.billingDate).format('MMM D, YYYY')}</TableCell>
                <TableCell>{row.amount}</TableCell>
                <TableCell>
                  <Stack direction="row" spacing={1}>
                    <Button variant="outlined" >
                      <LocalPrintshopSharpIcon/>
                    </Button>
                    <Button variant="outlined" >
                      <EditIcon/>
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      
      <TablePagination
        component="div"
        count={rows.length}
        onPageChange={noop}
        onRowsPerPageChange={noop}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
    </Fragment>
  );
}

export default CustomersTable;
