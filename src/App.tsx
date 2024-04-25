import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import CardList from './components/CardList'

//Добавить реакт мапу 


export interface Vehicle {
	id: number
	name: string
	model: string
	year: number
	color: string
	price: number
	latitude: number
	longitude: number
}

const fetchData = async () => {
	const response = await axios.get<Vehicle[]>(
		'https://test.tspb.su/test-task/vehicles'
	)
	return response.data
}

const App: React.FC = () => {
	const {
		data: vehicles,
		isLoading,
		isError,
	} = useQuery<Vehicle[]>('vehicles', fetchData)

	if (isLoading) {
		return <h3>Загрузка</h3>
	}

	if (isError) {
		return <h3>Ошибка</h3>
	}

	if (!vehicles) {
		return <h3>Нет данных</h3>
	}
	console.log(vehicles)

	return (
		<div className='min-h-screen bg-cyan-300'>
			<h1 className='text-3xl font-bold underline'>Траектория</h1>
			<div className='bg-white w-4/5 m-auto rounded-xl shadow-xl mt-14'>
				<div className='p-10'>
					<div className='flex justify-between items-center'>
						<h2 className='text-3xl font-bold mb-8'>Машины</h2>
						{/* В компонент сортировку карточек */}
						<div className='flex gap-4'>
							<select
								className='py-2 px-3 border border-gray-200 rounded-md outline-none'
								id=''
							>
								<option value='name'>Год выпуска (старые)</option>
								<option value='name'>Год выпуска (новые)</option>
							</select>
							<select
								className='py-2 px-3 border border-gray-200 rounded-md outline-none'
								id=''
							>
								<option value='price'>По цене (дешевые)</option>
								<option value='-price'>По цене (дорогие)</option>
							</select>
						</div>
					</div>
					<CardList vehicles={vehicles} />
				</div>
			</div>
		</div>
	)
}

export default App
