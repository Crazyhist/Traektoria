import React, { useState } from 'react'
import Card from './Card'
import { Vehicle } from '../App'

interface CardListProps {
	vehicles: Vehicle[]
}

const CardList: React.FC<CardListProps> = ({ vehicles }) => {
	const [cards, setCards] = useState<Vehicle[]>(vehicles)

	const handleDelete = (id: number) => {
		const newCards = cards.filter((vehicle) => vehicle.id !== id)
		setCards(newCards)
	}

	const handleSave = (updatedVehicle: Vehicle) => {
		const updatedCards = cards.map((vehicle) =>
			vehicle.id === updatedVehicle.id ? updatedVehicle : vehicle
		)
		setCards(updatedCards)
	}

	return (
		<div className='flex flex-col gap-5'>
			{cards.map((vehicle) => (
				<Card
					key={vehicle.id}
					vehicle={vehicle}
					onDelete={handleDelete}
					onSave={handleSave}
				/>
			))}
		</div>
	)
}

export default CardList
