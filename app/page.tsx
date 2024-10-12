import {
	Categories,
	Container,
	SortPopup,
	Title,
	TopBar,
	Filters,
} from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Button } from '@/components/ui'

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title text='All pizzas' size='lg' className='font-extrabold' />
			</Container>

			<TopBar />

			<Container className='pb-14 mt-10'>
				<div className='flex gap-[80px]'>
					{/*Filters*/}
					<div className='w-[250px]'>
						<Filters />
					</div>

					{/*Products List*/}
					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title={'Pizza'}
								items={[
									{
										id: 1,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 2,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 3,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 4,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title={'Combo'}
								items={[
									{
										id: 11,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 21,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 31,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
									{
										id: 41,
										name: 'cheese pizza',
										imageUrl: '/logo.png',
										price: 15,
										items: [{ price: 15 }],
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
