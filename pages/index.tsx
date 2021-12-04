import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => {
	return (
		<div className='flex items-center justify-center col'>
			<Head>
				<title> Home | Gente Prevalente</title>
			</Head>
			<span className='text-gray-700'>
				Inicio Proyecto Gente Prevalente
			</span>
		</div>
	)
}

export default Home
