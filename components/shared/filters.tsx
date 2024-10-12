import React from 'react'
import { Title } from './title'
import { FilterCheckbox } from './filter-checkbox'
import { Input } from '../ui'
import { RangeSlider } from './range-slider'
import { CheckboxFiltersBox } from './checkbox-filters-box'

interface Props {
	className?: string
}

export const Filters: React.FC<Props> = ({ className }) => {
	return (
		<div className={className}>
			<Title text='Filter' size='sm' className='mb-5 font-bold' />
			{/* Upwards checkboxes */}
			<div className='flex flex-col gap-4'>
				<FilterCheckbox text='Can take' value='1' />
				<FilterCheckbox text='New' value='2' />
			</div>

			{/* Price Filters */}
			<div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
				<p className='font-bold mb-3'>Price from an to:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						max={1000}
						defaultValue={0}
					/>
					<Input type='number' placeholder='1000	' min={100} max={1000} />
				</div>
				<RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
			</div>

			<CheckboxFiltersBox
				title='Ingredients'
				className='mt-5'
				limit={6}
				items={[
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
				]}
				defaultItems={[
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
					{ text: 'aaa', value: '1' },
					{ text: 'bbb', value: '2' },
				]}
			/>
		</div>
	)
}
