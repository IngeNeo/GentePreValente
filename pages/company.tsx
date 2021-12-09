import React, { useEffect } from 'react';
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

//const prisma = new PrismaClient();

export async function getServerSideProps() {
	/* const empresa = await prisma.empresa.findMany();*/
	const compa = [{
		id: "ckwv5zqqk0000iw5f47d35mzx",
		name: "PREVALENTWARE",
		businessName: "PREVALENTWARE S.A.S",
		identificationType: "NIT",
		identification: "901375150-4",
		nEmployees: 10,
		logo: '1r6BWC_PPDzNlF_mDDSMGZNsv5MBDtbw3',
		state: "Pendiente"
	}];
	return {
		props: { empresa: compa },
	};
}

const submitForm = (e) => {
		e.preventDefault();
	};

const Company = ({ empresa }) => {

	/* const { loading, error, data} = useQuery(GET_COMPANYS);

	if(loading){
		return (
						<div className='flex flex-col items-center justify-center w-full h-full'>
							<ReactLoading type="spinningBubbles" color="#0040FF" height={667} width={375} />;
						</div>)
	}
	if(error){
		return "Error";
	}
	console.log('Esta es la info de data', data); */

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

	const [aprobarEmpresa, { data: mutationData, loading: mutationLoading, error: mutationError }] =
		useMutation(APROBAR_EMPRESA);

	const forma = useRef(null);

	const aprobar = (id) => {
		console.log("Se ingreso a aprobar empresa");
		aprobarEmpresa({
			variables: {
				"data":
				{
					"state": "Aprobado"
				},
				"where": {
					"id": id
				}
			},
		});
	}

	const rechazar = (id) => {
		console.log("Se ingreso a rechazar empresa");
		aprobarEmpresa({
			variables: {
				"data":
				{
					"state": "Rechazado"
				},
				"where": {
					"id": id
				}
			},
		});
	}

	const envinf = async (e) => {
		e.preventDefault();
	}

	useEffect(() => {
		if (mutationData) {
			toast.success('Empresa aprobada correctamente');
		}
	}, [mutationData]);

	useEffect(() => {
		if (mutationError) {
			toast.error('Error aprobando la empresa');
		}
	}, [mutationError]);


		const myLoader = ({ src, width, quality }) => {
		return `https://drive.google.com/file/d/${src}?w=${width}&q=${quality || 75}`
	}

	console.log("Datos empresa", empresa)
	return (
		<form
			ref={forma}
			onSubmit={envinf}
		className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
			<div className="grid grid-cols-3 gap-5 text-center rounded-md">
				<div></div>
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
					<button onClick={() => aprobar(empresa.empresa.id)} className='col-span-2 p-2 mb-4 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
						<i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Aprobar Empresa
					</button>
					<button onClick={() => rechazar(empresa.empresa.id)} type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
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
					<button className='invisible p-2 mb-4 font-bold text-black rounded-lg shadow-md md:visible bg-white-400 hover:bg-gray-200'>
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
	)
}
export default Company;