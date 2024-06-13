import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import Card from '@mui/material/Card';


const data = {
  labels: ['1A', '1B', '2A', '2B', '3A', '4', '5', '6A', '6B', '7', '8', '9'],
  datasets: [
    {
      
      data: [50000, 175000, 160000, 195000, 100000, 150000, 25000, 175000, 90000, 23000, 20000, 123000],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    },
  ],
};

// Transforming the new dataset to the format required by BarChart
const dataset = data.labels.map((label, index) => ({
  label: label,
  value: data.datasets[0].data[index],
}));

const valueFormatter = (value) => `${value} units`;

const chartSetting = {
  yAxis: [
    {
      label: 'Fee Collected (units)',
    },
  ],
  series: [{ dataKey: 'value', label: data.datasets[0].label, valueFormatter, fill: data.datasets[0].backgroundColor }],
  height: 300,
  width:500,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-30px)',
    },
  },
};

export default function FeeCollectedBarChart() {
  return (
    <Card variant='outlined' sx={{fontFamily:'Lexend', fontWeight: '600'}}>
      Fee Collected Classwise :
      <BarChart
        dataset={dataset}
        sx={{fontFamily:'Manrope'}}
        xAxis={[
          { scaleType: 'band', dataKey: 'label' },
        ]}
        {...chartSetting}
      />
    </Card>
  );
}
