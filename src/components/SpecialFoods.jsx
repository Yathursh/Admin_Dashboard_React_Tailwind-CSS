import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'

const specialFoods = [
	{
	  id: '3432',
	  food_name: 'Pizza Margherita',
	  food_icon: 'https://source.unsplash.com/100x100?pizza',
	  food_amount: 'Rs.300.00',
	  available_food: 41
	},
	{
	  id: '7633',
	  food_name: 'Grilled Salmon',
	  food_icon: 'https://source.unsplash.com/100x100?salmon',
	  food_amount: 'Rs.250.00',
	  available_food: 24
	},
	{
	  id: '6534',
	  food_name: 'Chicken Tikka Masala',
	  food_icon: 'https://source.unsplash.com/100x100?chicken',
	  food_amount: 'Rs.200.00',
	  available_food: 56
	},
	{
	  id: '9234',
	  food_name: 'Chocolate Lava Cake',
	  food_icon: 'https://source.unsplash.com/100x100?cake',
	  food_amount: 'Rs.150.00',
	  available_food: 98
	},
	{
	  id: '4314',
	  food_name: 'Vegetable Sushi Roll',
	  food_icon: 'https://source.unsplash.com/100x100?sushi',
	  food_amount: 'Rs.120.00',
	  available_food: 0
	},
	{
	  id: '4342',
	  food_name: 'Fruit Salad',
	  food_icon: 'https://source.unsplash.com/100x100?salad',
	  food_amount: 'Rs.100.00',
	  available_food: 453
	}
  ];
  

function SpecialFoods() {
	return (
		<div className="w-[20rem] bg-white p-4 rounded-sm border border-gray-200">
			<strong className="text-gray-700 font-medium">Special Foods</strong>
			<div className="mt-4 flex flex-col gap-3">
				{specialFoods.map((product) => (
					<Link
						key={product.id}
						to={`/product/${product.id}`}
						className="flex items-start hover:no-underline"
					>
						<div className="w-10 h-10 min-w-[2.5rem] bg-gray-200 rounded-sm">
							<img
								className="w-full h-full object-cover rounded-sm"
								src={product.food_icon}
								alt={product.food_name}
							/>
						</div>
						<div className="ml-4 flex-1">
							<p className="text-sm text-gray-800">{product.food_name}</p>
							<span
								className={classNames(
									product.available_food === 0
										? 'text-red-700'
										: product.available_food > 50
										? 'text-green-600'
										: 'text-yellow-400',
									'text-xs font-medium'
								)}
							>
								{product.available_food === 0 ? 'Not Available' : product.available_food + ' Orders Available'}
							</span>
						</div>
						<div className="text-xs text-gray-400 pl-1.5">{product.food_amount}</div>
					</Link>
				))}
			</div>
		</div>
	)
}

export default SpecialFoods
