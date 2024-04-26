import React, { useState } from 'react'
import { Vehicle } from '../App'
import edit from '../assets/edit.svg'
import x from '../assets/x.svg'

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
	const [showSaveButton, setShowSaveButton] = useState(false)

	const handleDelete = () => {
		onDelete(id)
	}

	const handleEdit = () => {
		setIsEditing(true)
		setShowSaveButton(true)
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
		setShowSaveButton(false)
	} // допиать и подкрасить редактирование
	//=================================================
	return (
		<div className='w-3/5 relative border border-slate-100 bg-white rounded-3xl p-8 hover:shadow-xl'>
			<div className='gap-5'>
				<h3 className='mb-1'>
					Марка:{' '}
					<b>
						{isEditing ? (
							<input
								className='border border-sky-500 rounded-md pl-2 hover:border hover:border-sky-500 focus:border-sky-500'
								type='text'
								value={editableName}
								onChange={(e) => setEditableName(e.target.value)}
							/>
						) : (
							editableName
						)}
					</b>
				</h3>
				<p className='mb-1'>
					Модель:{' '}
					<b>
						{isEditing ? (
							<input
								className='border border-sky-500 rounded-md pl-2 hover:border hover:border-sky-500 focus:border-sky-500'
								type='text'
								value={editableModel}
								onChange={(e) => setEditableModel(e.target.value)}
							/>
						) : (
							editableModel
						)}
					</b>
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
					Цена:{' '}
					<b>
						{isEditing ? (
							<input
								className='border border-sky-500 rounded-md pl-2 hover:border hover:border-sky-500 focus:border-sky-500'
								type='number'
								value={editablePrice}
								onChange={(e) => setEditablePrice(parseInt(e.target.value))}
							/>
						) : (
							editablePrice
						)}
					</b>
				</p>
			</div>
			<div className='absolute top-0 right-2 flex cursor-pointer p-1'>
				{!showSaveButton && (
					<img
						src={edit}
						alt=''
						className='cursor-pointer hover:-translate-y-1 transition '
						onClick={handleEdit}
					/>
				)}
				{showSaveButton && (
					<button
						className='cursor-pointer hover:-translate-y-1 transition border border-sky-500 rounded-md'
						onClick={handleSave}
					>
						Сохранить
					</button>
				)}
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
