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

//TODO: Esta puede ser información de una función, variable, calculo o información de la base de datos para pruebas esta fijo
const textEmpresa = 'Solicitudes de creación de empresas';
const textIndicadores = 'Indicadores';
const textEmpleados = 'Inscripción de empleados en empresas';
const textUsuario = 'Gestión de usuarios';
const textEmpresa1 = '2 solicitudes sin tratar';
const textIndicadores1 = 'Visitado por última vez: 31/01/2020';
const textEmpleados1 = '3 usuarios sin empresa registrada';
const textUsuario1 = '532 usuarios activos en la plataforma';



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
							<a><Card imageItem={empresa} text={textEmpresa} text1={textEmpresa1}/></a>
						</Link>
					</div>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={indicadores} text={textIndicadores} text1={textIndicadores1} />
					</div>
					</div>
				<div className='items-center justify-center md:flex'>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={empleados} text={textEmpleados} text1={textEmpleados1}/>
					</div>
					<div className='py-3 mx-10 md:flex'>
						<Card imageItem={usuarios} text={textUsuario} text1={textUsuario1}/>
					</div>
				</div>
			</main>
		</div>
	)
}

export default Home
