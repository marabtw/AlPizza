import React from 'react'
import { Checkbox } from '../ui'

export interface FilterCheckboxProps {
	text: string
	value: string
	endAbornment?: React.ReactNode
	onCheckedChange?: (checked: boolean) => void
	checked?: boolean
}

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({
	text,
	value,
	endAbornment,
	onCheckedChange,
	checked,
}) => {
	return (
		<div className={'flex items-center space-x-2'}>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={`checkbox-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
			{endAbornment}
		</div>
	)
}
