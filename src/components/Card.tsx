import React, { useState } from 'react'
import edit from '../assets/edit.svg'
import x from '../assets/x.svg'
import { Vehicle } from '../App'

interface CardProps {
	vehicle: Vehicle
	onDelete: (id: number) => void
	onSave: (updatedVehicle: Vehicle) => void
}

const Card: React.FC<CardProps> = ({ vehicle, onDelete, onSave }) => {
	const { id, name, model, year, color, price } = vehicle
	const [editableName, setEditableName] = useState(name)
	const [editableModel, setEditableModel] = useState(model)
	const [editablePrice, setEditablePrice] = useState(price)
	const [isEditing, setIsEditing] = useState(false)

	const handleDelete = () => {
		onDelete(id)
	}

	const handleEdit = () => {
		setIsEditing(true)
	}

	const handleSave = () => {
		const updatedVehicle: Vehicle = {
			...vehicle,
			name: editableName,
			model: editableModel,
			price: editablePrice,
		}
		onSave(updatedVehicle)
		setIsEditing(false)
	} // допиать и подкрасить редактирование
	//=================================================
	return (
		<div className='w-3/5 relative border border-slate-100 bg-white rounded-3xl p-8 hover:shadow-xl'>
			<div className='gap-5'>
				<h3 style={{ width: 'calc(50% - (2px * 2))' }}>
					Марка:{' '}
					<b>
						{isEditing ? (
							<input
								type='text'
								value={editableName}
								onChange={(e) => setEditableName(e.target.value)}
							/>
						) : (
							editableName
						)}
					</b>
				</h3>
				<p>
					Модель: <b>{model}</b>
				</p>
			</div>
			<div className='flex gap-5'>
				<p>
					Цвет: <b>{color}</b>
				</p>
				<p>
					Год: <b>{year}</b>
				</p>
				<p>
					Цена: <b>{price}</b>
				</p>
			</div>
			<div className='absolute top-0 right-2 flex cursor-pointer p-1'>
				<img
					src={edit}
					alt=''
					className='cursor-pointer hover:-translate-y-1 transition'
					onClick={isEditing ? handleSave : handleEdit}
				/>
				<img
					src={x}
					alt=''
					className='cursor-pointer hover:-translate-y-1 transition'
					onClick={handleDelete}
				/>
			</div>
		</div>
	)
}

export default Card
