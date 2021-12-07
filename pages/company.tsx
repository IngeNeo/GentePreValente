import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { PrismaClient } from '.prisma/client';

//const prisma = new PrismaClient();

export async function getServerSideProps() {
	/* const company = await prisma.company.findMany();*/
	const company = [{
		id:"ckwv5zqqk0000iw5f47d35mzx",
		name:"PREVALENTWARE",
		businessName:"PREVALENTWARE S.A.S",
		identificationType:"NIT",
		identification:"901375150-4",
		nEmployees:10,
		logo:"https://drive.google.com/file/d/1moWE1vnbF4F3Y3OX7kn96MoBoT1S2wUb/view?usp=sharing",
		state: "Pendiente"
	}];
	return {
		props: { company: company },
	};
}

const company = ({ company }) => {
	console.log('Esta es la variable en el front', company);
	return (
		<div className='mainContainer'>
			<Header />
			<main className='flex flex-col h-full overflow-y-hidden'>
				{/* { <div>Tabla Empresas</div>
					{company && company.map((c) => {
						return <div key={c.id}>{c.name}</div>;
				})} */}
				<div className="flex flex-col items-center min-h-screen px-4 py-2 sm:px-6 lg:px-8">
					<div className='py-5 my-5'>
						<h2 className="py-4 mt-6 text-3xl font-extrabold text-center">
							Aprobar Empresa
						</h2>
					</div>
					<form className="flex flex-col px-10 mx-10 bg-white rounded-lg shadow-lg">
						<label className="flex flex-col my-4" htmlFor="nom_producto">
							Nombre
							<input name="nom_producto" type="text" placeholder="Nombre producto" className="p-2 m-2 rounded-lg" />
						</label>
						<label className="flex flex-col" htmlFor="descripcion">
							Descripcion
							<input name="descripcion" type="text" placeholder="Descripcion" className="p-2 m-2 rounded-lg" />
						</label>
						<label className="flex flex-col" htmlFor="valorU">
							Valor Unitario
							<input name="valorU" type="number" placeholder="Valor Unitario" className="p-2 m-2 rounded-lg" />
						</label>
						<label className="flex flex-col" htmlFor="cantidad">
							Cantidad
							<input name="cantidad" type="number" placeholder="Cantidad" className="p-2 m-2 rounded-lg" />
						</label>

						<label className="flex flex-col" htmlFor="estado">
							Estado actual
							<select name="estado" id="" className="p-2 m-2 rounded-lg" required defaultValue={0}>
								<option disabled value={0}>
									seleccione una opcion
								</option>
								<option>Disponible</option>
								<option>No Disponible</option>
							</select>
						</label>
						<button
							type='submit'
							className='col-span-2 p-2 m-3 text-white bg-purple-900 rounded-full shadow-md hover:bg-purple-600'
						>
							Aprobar Empresa
						</button>
					</form>

				</div>
			</main>
			<Footer />
		</div>

	)
}

export default company