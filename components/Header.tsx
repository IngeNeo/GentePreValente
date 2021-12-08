import logo from '../media/Logo.png';
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<ul className='flex justify-between shadow-lg navbar'>
				<li className='px-5'>
					<Image
						src={logo}
						alt="GentePrevalente"
						width={70}
						height={70}
					/>
					<span className='font-bold text-white'>Gente PreValente</span>
				</li>
				<li>
				<div className='justify-between hidden p-1 md:flex'>
					<i aria-hidden={true} className='mx-1 text-white fas fa-search'></i>
						<input className='buscar-input' placeholder='Buscar...' />
					</div>
				</li>
				<li>
					<div className='justify-between hidden p-1 md:flex'>
					<Link href='/'>
						<a><i aria-hidden={true} className="text-white fas fa-cogs"> Administración</i></a>
					</Link>
					</div>
				</li>
				<li>
					<div className='justify-between hidden p-1 md:flex'>
					<Link href='#'>
						<a><i aria-hidden={true} className="text-white fas fa-suitcase"> Empleo</i>
							<i aria-hidden={true} className="px-1 text-white fas fa-chevron-down"></i></a>
					</Link>
					</div>
				</li>
				<li>
					<div className='justify-between hidden p-1 md:flex'>
					<Link href='#'>
						<a><i aria-hidden={true} className="text-white fas fa-clipboard-list"> Mi CV</i></a>
					</Link>
					</div>
				</li>
				<li>
					<div className='justify-between hidden p-1 md:flex'>
					<Link href='#'>
						<a><i aria-hidden={true} className='text-white fas fa-user-circle'> Perfil  </i>
							<i aria-hidden={true} className="px-1 text-white fas fa-chevron-down"></i></a>
					</Link>
					</div>
					<div className='justify-between p-1 md:hidden sm:flex'>
						<Link href='#'>
							<a><i aria-hidden={true} className='px-5 text-2xl text-white fas fa-bars'></i></a>

						</Link>
					</div>
				</li>
			</ul>
		</header>
	);
};

export default Header;