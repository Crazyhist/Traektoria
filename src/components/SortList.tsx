import SortModel from './SortModel'
import SortPrice from './SortPrice'

const SortList = () => {
	return (
		<div className='flex justify-between items-center'>
			<SortPrice />
			<SortModel />
		</div>
	)
}

export default SortList
