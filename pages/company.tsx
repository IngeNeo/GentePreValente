import React, { useEffect } from 'react';
import Header from '../components/Header'
import Image from 'next/image'
import Head from 'next/head'
import PRE from '../media/logos/Prevalentware_Logo.png'
import { PrismaClient } from '.prisma/client';
import { useMutation, useQuery } from '@apollo/client';
import { GET_COMPANYS } from 'graphql/company/queries';
import { APROBAR_EMPRESA } from 'graphql/company/mutations';
import { toast } from 'react-toastify';

//const prisma = new PrismaClient();

export async function getServerSideProps() {
	/* const company = await prisma.company.findMany();*/
	const company = [{
		id: "ckwv5zqqk0000iw5f47d35mzx",
		name: "PREVALENTWARE",
		businessName: "PREVALENTWARE S.A.S",
		identificationType: "NIT",
		identification: "901375150-4",
		nEmployees: 10,
		logo: PRE,
		state: "Pendiente"
	}];
	return {
		props: { company: company },
	};
}

const submitForm = (e) => {
		e.preventDefault();
	};

const company = ({ company }) => {

	console.log('Esta es la variable en el front', company);
	return (
		<div className='sm:block md:overflow-y-hidden mainContainer'>
			<Head>
				<title> Aprobar Empresas | Gente Prevalente </title>
			</Head>
			<Header />
			<main className='flex flex-col h-full'>
				<div className='py-10 mx-10'>
					<span className='text-lg font-bold text-blue-400'> Administración </span><span className='text-black'> / Aprobación de Empresas</span>
				</div>
				{
					company && company.map((c) => {
						return (
							<div key={c.id} className="flex flex-col items-center min-h-screen px-4 py-2 sm:px-6 lg:px-8">
								<form onSubmit={submitForm} className="p-5 mt-8 space-y-6 bg-white rounded-lg shadow-lg">
									<div className="grid grid-cols-3 gap-5 text-center rounded-md">
										<div></div>
										<div>
											<Image
												src={PRE}
												alt={c.name}
												width={150}
												height={150}
											/>
										</div>
										<div className="flex flex-col py-2">
											<button className='col-span-2 p-2 mb-4 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
												<i aria-hidden={true} className="text-2xl text-green-500 align-middle fas fa-check-circle"></i> Aprobar Empresa
											</button>
											<button type='submit' className='col-span-2 p-2 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
												<i aria-hidden={true} className="text-2xl text-red-500 align-middle fas fa-times-circle"></i> Rechazar Empresa
											</button>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-5 rounded-md">
										<label className='text-gray-500' htmlFor="name"> Nombre de la empresa
											<input name="name" type="text" required={true} defaultValue={c.name}
												className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
										</label>
										<label className='text-gray-500' htmlFor="businessName"> Razón Social
											<input name="businessName" type="text" required={true} defaultValue={c.businessName}
												className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm"/>
										</label>
									</div>
									<div className="grid grid-cols-2 gap-5 rounded-md">
										<label className='text-gray-500' htmlFor="identificationType"> Tipo de identificación
											<input name="identificationType" type="text" required={true} defaultValue={c.identificationType}
												className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
										</label>
										<label className='text-gray-500' htmlFor="identification"> Identificación
											<input name="identification" type="text" required={true} defaultValue={c.identification}
												className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
										</label>
									</div>
									<div className="grid grid-cols-2 gap-5 rounded-md">
										<label className='text-gray-500' htmlFor="nEmployees"> # de empleados
											<input name="nEmployees" type="text" required={true} defaultValue={c.nEmployees}
												className="relative block w-full px-3 py-2 font-bold text-black appearance-none focus:outline-none sm:text-sm" />
										</label>
										<label className='text-gray-500'>
											<button className='p-2 mb-4 font-bold text-black rounded-lg shadow-md bg-white-400 hover:bg-gray-200'>
												<i aria-hidden={true} className="text-2xl text-blue-500 align-middle fas fa-paperclip"></i> Ver archivos adjuntos
											</button>
										</label>
									</div>
								</form>
							</div>
							)
						}
					)
				};
			</main>
		</div>
	)
}

const Empresa = ({ company, refetch }) => {
	const [aprobarEmpresa, { data, loading, error }] = useMutation(APROBAR_EMPRESA);

	useEffect(() => {
		if (data) {
			toast.success('Empresa aprobada con exito');
			refetch();
		}
	}, [data, refetch]);

	useEffect(() => {
		if (error) {
			toast.error('Error aprobando la empresa');
		}
	}, [error]);

	const cambiarEstadoEmpresa = () => {
		aprobarEmpresa({
			variables: {
				aprobarEmpresa: company._id,
			},
		});
	};
}

export default company;