import React from 'react'
import Image from 'next/image'

const Card = ({imageItem, text}) => {
	return (
		<div className="max-w-md px-8 py-4 my-10 bg-white rounded-lg shadow-lg card">
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
				<p className="mt-2 text-2xl font-bold text-gray-600">{text}</p>
			</div>
		</div>
	)
}

export default Card
