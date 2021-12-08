import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import empresa from '../media/icons/empresa.png'
import empleados from '../media/icons/empleados.png'
import indicadores from '../media/icons/indicadores.png'
import usuarios from '../media/icons/usuarios.png'
import Card from '../components/Card'
import Link from 'next/link';

const textEmpresa = 'Solicitud de creación de empresa componente';
const textIndicadores = 'Indicadores';
const textEmpleados = 'Inscripción de empleados en empresas';
const textUsuario = 'Gestión de usuarios';

const Home: NextPage = () => {
	return (

		<div className='sm:block md:overflow-y-hidden mainContainer'>
			<Head>
				<title> Home | Gente Prevalente</title>
			</Head>
			<Header />
			<main className='block h-full py-7 md:flex-col'>
				<div className='items-center justify-center md:flex'>
					<div className='py-3 mx-10 md:flex'>
						<Link href='/company'>
							<a><Card imageItem={empresa} text={textEmpresa} /></a>
						</Link>
					</div>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={indicadores} text={textIndicadores} />
					</div>
					</div>
				<div className='items-center justify-center md:flex'>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={empleados} text={textEmpleados} />
					</div>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={usuarios} text={textUsuario} />
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
