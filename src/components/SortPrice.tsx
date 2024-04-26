import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import * as React from 'react'

function valuetext(value: number) {
	return `${value}°C`
}

const minDistance = 1

const SortPrice = () => {
	const [value1, setValue1] = React.useState<number[]>([1000, 100000])

	const handleChange1 = (
		event: Event,
		newValue: number | number[],
		activeThumb: number
	) => {
		if (!Array.isArray(newValue)) {
			return
		}

		if (activeThumb === 0) {
			setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]])
		} else {
			setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)])
		}
	}

	return (
		<div className='flex rounded-xl shadow-xl'>
			<div className='p-10'>
				<div className='flex justify-between items-center'>
					<Box sx={{ width: 300 }}>
						<Slider
							getAriaLabel={() => 'Minimum distance'}
							value={value1}
							onChange={handleChange1}
							valueLabelDisplay='auto'
							getAriaValueText={valuetext}
							disableSwap
							size='small'
							max={100000}
						/>
					</Box>
				</div>
			</div>
		</div>
	)
}

export default SortPrice
