import React from 'react'
import DashboardGrid from '../components/DashboardGrid'
import TransactionChart from '../components/TransactionChart'
import OngoingOrders from '../components/OngoingOrders'
import CustomerChart from '../components/CustomerChart'
import SpecialFoods from '../components/SpecialFoods'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardGrid />
			<div className="flex flex-row gap-4 w-full">
				<TransactionChart />
				<CustomerChart />
			</div>
			<div className="flex flex-row gap-4 w-full">
				<OngoingOrders />
				<SpecialFoods />
			</div>
		</div>
	)
}
