import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import empresa from '../media/icons/empresa.png'
import empleados from '../media/icons/empleados.png'
import indicadores from '../media/icons/indicadores.png'
import usuarios from '../media/icons/usuarios.png'

const Home: NextPage = () => {
	return (

		<div className='mainContainer'>
			<Head>
				<title> Home | Gente Prevalente</title>
			</Head>
			<Header />
			<main className='flex flex-col h-full py-10'>
				<div className='flex items-center justify-center'>
					<div className="max-w-md px-8 py-4 my-10 bg-white rounded-lg shadow-lg card1">
						<div className="flex justify-center -mt-16 md:justify-start">
							<Image
								src={empresa}
								alt='empresa'
								width={100}
								height={100}
								className="border-indigo-500 w-30 h-30"
							/>
						</div>
						<div>
							<p className="mt-2 text-gray-600">Solicitudes de Creación de empresas</p>
						</div>
					</div>
					<div className="max-w-md p-4 px-8 mx-20 my-10 bg-white rounded-lg shadow-lg card2">
						<div className="flex justify-center -mt-16 md:justify-start">
							<Image
								src={indicadores}
								alt='indicadores'
								width={100}
								height={100}
								className="w-20 h-20 border-2 border-indigo-500"
							/>
						</div>
						<div>
							<p className="mt-2 text-gray-600">Indicadores</p>
						</div>
					</div>
				</div>
				<div className='flex items-center justify-center py-10'>
					<div className="max-w-md px-8 py-4 bg-white rounded-lg shadow-lg card3">
						<div className="flex justify-center -mt-16 md:justify-start">
							<Image
								src={empleados}
								alt='empleados'
								width={100}
								height={100}
								className="w-10 h-10 border-indigo-500"
							/>
						</div>
						<div>
							<p className="mt-2 text-gray-600">Inscripción de empleados en empresas</p>
						</div>
					</div>
					<div className="max-w-md p-4 px-8 mx-20 bg-white rounded-lg shadow-lg card4">
						<div className="flex justify-center -mt-16 md:justify-start">
							<Image
								src={usuarios}
								alt='usuarios'
								width={100}
								height={100}
								className="w-20 h-20 border-2 border-indigo-500"
							/>
						</div>
						<div>
							<p className="mt-2 text-gray-600">Gestión de usuarios</p>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
