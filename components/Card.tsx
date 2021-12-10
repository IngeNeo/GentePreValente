import React from 'react'
import Image from 'next/image'

const Card = ({imageItem, text, text1}) => {
	return (
		<div className="relative max-w-md px-8 py-4 my-10 bg-white rounded-lg shadow-lg card">
			<div className="flex justify-center -mt-16 md:justify-start">
				<Image
					src={imageItem}
					alt='empresa'
					width={100}
					height={100}
					className="border-gray-500 w-30 h-30"
				/>
			</div>
			<div>
				<p className="py-10 mt-2 text-3xl text-gray-600">{text}</p>
				<div className='absolute bottom-0 left-0 mx-5 py-5'><hr></hr>
				<p className="mt-2 text-gray-400">
						<i aria-hidden={true} className='mx-1 fas fa-clock'> {text1}</i></p>
				</div>
			</div>
		</div>
	)
}

export default Card
