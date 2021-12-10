import React, { useEffect, useState } from 'react';
import Header from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'
import PRE from '../media/logos/Prevalentware_Logo.png'
import { PrismaClient } from '.prisma/client';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COMPANYS } from '../graphql/company/queries'
import { APROBAR_EMPRESA } from '../graphql/company/mutations';
import { toast } from 'react-toastify';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import { useRef } from 'react';

const prisma = new PrismaClient();

export async function getServerSideProps() {
	const empresa = await prisma.company.findMany();

	//Solo para pruebas locales
	/* const empresa = [{
		id: "ckwv5zqqk0000iw5f47d35mzx",
		name: "PREVALENTWARE",
		businessName: "PREVALENTWARE S.A.S",
		identificationType: "NIT",
		identification: "901375150-4",
		nEmployees: 10,
		logo: '1r6BWC_PPDzNlF_mDDSMGZNsv5MBDtbw3',
		state: "Pendiente"
	}]; */
	return {
		props: { empresa: empresa },
	};
}

const Company = ({ empresa }) => {

	//Query Graphql para obtener las empresas del sistemas en supebase PostgresSQL
	const { loading, error, data} = useQuery(GET_COMPANYS);

	if(loading){
		return (
						<div className='flex flex-col items-center justify-center w-full h-full'>
							<ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />
						</div>)
	}
	if(error){
		return "Error";
	}
	console.log('Esta es la info de data', data);

	console.log('Esta es la variable en el front', empresa);
	return (
		<div className='sm:block md:overflow-y-hidden mainContainer'>
			<Head>
				<title> Aprobar Empresas | Gente Prevalente </title>
			</Head>
			<Header />
			<main className='flex flex-col h-full'>
				<div className='py-10 mx-10'>
					<span className='text-lg font-bold text-blue-400'>
						<Link href='/'> Administración </Link>
					</span>
					<span className='text-black'> / Aprobación de Empresas </span>
				</div>
				{
					empresa && empresa.map((c) => {
						return (
							<div key={c.id} className="flex flex-col items-center min-h-screen px-4 py-2 sm:px-6 lg:px-8">
								<Form empresa={c}/>
								<div className='grid grid-cols-3 gap-1 justify-center items-center'>
									<div className='py-10 flex flex-col items-end'>
										<i className="text-2xl fas fa-arrow-circle-left text-gray-400"></i>
									</div>
									<div className=''>
										<p className='text-gray-600'>Empresa 1 de 2 pendiente por aprobación</p>
									</div>
									<div className=''>
										<i className="text-2xl fas fa-arrow-circle-right ite"></i>
									</div>
								</div>
							</div>
							)
						}
					)
				}
			</main>
		</div>
	)
}

const Form = (empresa)=>{

	const submitForm = (e) => {
		e.preventDefault();
	}

	const [aprobarEmpresa, { data, loading, error }] = useMutation(APROBAR_EMPRESA);
	const [estado, SetEstado] = useState(false);

	useEffect(() => {
		if (data) {
			toast.success('Empresa aprobada con exito');
		}
	}, [data]);

	useEffect(() => {
		if (error) {
			toast.error('Error aprobando la empresa');
		}
	}, [error]);

	//TODO:Problemas con la mutación de cambio de estar la BD rechaza la solicitud
	const cambiarEstadoEmpresa= () => {
		aprobarEmpresa({
			variables: {
				data: {
					state: "Aprobado"
				},
				where: {
					id: empresa.empresa.id
				}
			},
		});
	};

	const myLoader = ({ src, width, quality }) => {
		return `https://drive.google.com/file/d/${src}?w=${width}&q=${quality || 75}`
	}

	console.log("Datos empresa", empresa)
	return (
		<div>
			{estado ? <Modal state={estado} />: <></> }

		<form onSubmit={submitForm} className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
			<div className="grid grid-cols-3 gap-5 text-center rounded-md">
				<div>
				</div>
				<div>
					<Image
						loader={myLoader}
						//src="1r6BWC_PPDzNlF_mDDSMGZNsv5MBDtbw3"
						src={empresa.empresa.logo}
						alt={empresa.empresa.name}
						width={150}
						height={150}
					/>
				</div>
				<div className="flex flex-col invisible py-2 md:visible">
					<button onClick={() => {
						cambiarEstadoEmpresa();
					}} className='col-span-2 p-2 mb-4 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
						<i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Aprobar Empresa
					</button>
					<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
						<i aria-hidden={true} className="text-2xl text-red-500 align-middle fas fa-times-circle"></i> Rechazar Empresa
					</button>
				</div>
			</div>
			<div className="flex flex-col gap-5 rounded-md md:grid md:grid-cols-2">
				<label className='text-gray-500' htmlFor="name"> Nombre de la empresa
					<input name="name" type="text" required={true} defaultValue={empresa.empresa.name}
						className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
				</label>
				<label className='text-gray-500' htmlFor="businessName"> Razón Social
					<input name="businessName" type="text" required={true} defaultValue={empresa.empresa.businessName}
						className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
				</label>
			</div>
			<div className="flex flex-col gap-5 rounded-md md:grid md:grid-cols-2">
				<label className='text-gray-500' htmlFor="identificationType"> Tipo de identificación
					<input name="identificationType" type="text" required={true} defaultValue={empresa.empresa.identificationType}
						className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
				</label>
				<label className='text-gray-500' htmlFor="identification"> Identificación
					<input name="identification" type="text" required={true} defaultValue={empresa.empresa.identification}
						className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
				</label>
			</div>
			<div className="flex flex-col gap-5 rounded-md md:grid md:grid-cols-2">
				<label className='text-gray-500' htmlFor="nEmployees"> # de empleados
					<input name="nEmployees" type="text" required={true} defaultValue={empresa.empresa.nEmployees}
						className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
				</label>
				<label className='text-gray-500'>
					<button onClick={() => {
						SetEstado(true);
					}}
					className='invisible p-2 mb-4 font-bold text-black rounded-lg shadow-md md:visible bg-white-400 hover:bg-gray-200'>
						<i aria-hidden={true} className="text-2xl text-blue-500 align-middle fas fa-paperclip"></i> Ver archivos adjuntos
					</button>
				</label>
			</div>
			<div className="flex flex-col items-center justify-center py-2 md:hidden ">
				<button className='col-span-2 p-2 mb-4 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
					<i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Aprobar Empresa
				</button>
				<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
					<i aria-hidden={true} className="text-2xl text-red-500 align-middle fas fa-times-circle"></i> Rechazar Empresa
				</button>
			</div>
		</form>
		</div>
	)
}

const Modal=(state)=>{

	const [mostrar, SetMostrar] = useState(false);

	useEffect(() => {
		if (state === true) {
			console.log("entro al si de estado true");
			SetMostrar(true);
		}
		else if (state === false) {
			console.log("entro al sino de estado false");
			SetMostrar(false);
		}
		else {
			console.log("entro al no de estado true");
			SetMostrar(false);
		}
	}, [state]);


	return(
		<div>
			<div className={`${mostrar} modal flex - flex-col justify-center items-center text-center font-bold overflow-y-auto`} >
				<button onClick={() => { state = false }}
					className='invisible p-2 mb-4 font-bold text-black rounded-lg shadow-md md:visible bg-white-400 hover:bg-gray-200'>
					<i aria-hidden={true} className='fas fa-times-circle'></i>
				</button>
					<div>
					<i className="text-2xl text-red-500 fas fa-file-pdf"></i>
					</div>
			</div>
		</div>
	)
}

export default Company;