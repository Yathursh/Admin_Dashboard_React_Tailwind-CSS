import React from 'react'
import {IoPeople, IoCart } from 'react-icons/io5'
import { GiReceiveMoney,GiPayMoney  } from "react-icons/gi";

export default function DashboardGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#1a3647]">
					<GiReceiveMoney className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Incomes</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">Rs.502,000</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-[#c75a06]">
					<GiPayMoney className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">Rs.342,000</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-yellow-400">
					<IoPeople className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12,313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
					<IoCart className="text-2xl text-white" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light"> Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16,432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}
