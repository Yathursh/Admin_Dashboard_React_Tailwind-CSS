import React from 'react'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/helpers/orderStatus'

const ongoingOrdersData = [
	{
	  id: '1',
	  order_id: '4324',
	  customer_id: '23143',
	  customer_name: 'Yathurshan',
	  order_time: '2022-05-17T03:24:00',
	  order_total: 'Rs.750.00',
	  current_order_status: 'PLACED',
	  shipment_address: '12 Batticaloa, Eastern Province'
	},
	{
	  id: '7',
	  order_id: '7453',
	  customer_id: '96453',
	  customer_name: 'Abiram',
	  order_time: '2022-05-14T05:24:00',
	  order_total: 'Rs.963.00',
	  current_order_status: 'CONFIRMED',
	  shipment_address: 'Colombo 05, Western Province'
	},
	{
	  id: '2',
	  order_id: '5434',
	  customer_id: '65345',
	  customer_name: 'Chathurika Silva',
	  order_time: '2022-05-17T07:14:00',
	  order_total: 'Rs.864.00',
	  current_order_status: 'SHIPPED',
	  shipment_address: 'Galle, Southern Province'
	},
	{
	  id: '3',
	  order_id: '9854',
	  customer_id: '87832',
	  customer_name: 'Nuwan Fernando',
	  order_time: '2022-05-16T12:40:00',
	  order_total: 'Rs.545.00',
	  current_order_status: 'SHIPPED',
	  shipment_address: 'Kandy, Central Province'
	},
	{
	  id: '4',
	  order_id: '8763',
	  customer_id: '09832',
	  customer_name: 'Umaiyalan',
	  order_time: '2022-05-14T03:24:00',
	  order_total: 'Rs.876.00',
	  current_order_status: 'PENDING',
	  shipment_address: 'Negombo, Western Province'
	},
	{
	  id: '5',
	  order_id: '5627',
	  customer_id: '97632',
	  customer_name: 'David',
	  order_time: '2022-05-14T05:24:00',
	  order_total: 'Rs.965.00',
	  current_order_status: 'DELIVERED',
	  shipment_address: 'Gampaha, Western Province'
	}
  ];
  

export default function OngoingOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
			<strong className="text-gray-700 font-medium">Ongoing Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="w-full text-gray-700">
					<thead>
						<tr>
							<th>ID</th>
							<th>Order ID</th>
							<th>Customer</th>
							<th>Order Time</th>
							<th>Amount</th>
							<th> Delivery Address</th>
							<th> Delivery Status</th>
						</tr>
					</thead>
					<tbody>
						{ongoingOrdersData.map((order) => (
							<tr key={order.id}>
								<td>
									<Link to={`/order/${order.id}`}>#{order.id}</Link>
								</td>
								<td>
									<Link to={`/product/${order.order_id}`}>#{order.order_id}</Link>
								</td>
								<td>
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td>{format(new Date(order.order_time), 'hh:mm:ss')}</td>
								<td>{order.order_total}</td>
								<td>{order.shipment_address}</td>
								<td>{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
