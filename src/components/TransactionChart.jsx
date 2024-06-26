import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = [
	{
	  name: 'January',
	  Expense: 3000,
	  Income: 5000
	},
	{
	  name: 'February',
	  Expense: 2000,
	  Income: 3500
	},
	{
	  name: 'March',
	  Expense: 2500,
	  Income: 4500
	},
	{
	  name: 'April',
	  Expense: 2800,
	  Income: 4000
	},
	{
	  name: 'May',
	  Expense: 3200,
	  Income: 6000
	},
	{
	  name: 'June',
	  Expense: 3500,
	  Income: 5500
	},
	{
	  name: 'July',
	  Expense: 2900,
	  Income: 4800
	},
	{
	  name: 'August',
	  Expense: 3800,
	  Income: 5300
	},
	{
	  name: 'September',
	  Expense: 2600,
	  Income: 4200
	},
	{
	  name: 'October',
	  Expense: 3300,
	  Income: 4700
	},
	{
	  name: 'November',
	  Expense: 3100,
	  Income: 5100
	},
	{
	  name: 'December',
	  Expense: 3400,
	  Income: 4900
	}
  ];
  
  
export default function TransactionChart() {
	return (
		<div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Purchases</strong>
			<div className="mt-3 w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height="100%">
					<BarChart
						width={500}
						height={300}
						data={data}
						margin={{
							top: 20,
							right: 10,
							left: -10,
							bottom: 0
						}}
					>
						<CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Income" fill="#1a3647" />
						<Bar dataKey="Expense" fill="#c75a06" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
