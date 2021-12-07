import logo from '../media/Logo.png';
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<ul className='navbar'>
				<li>
					<Image
						src={logo}
						alt="GentePrevalente"
						width={70}
						height={70}
					/>
					<span className='font-bold text-white'>Gente PreValente</span>
				</li>
				<li>
					<i aria-hidden={true} className='text-white fas fa-search'></i>
					<div className='buscar'>
						<input className='buscar-input' placeholder='Buscar...' />
					</div>
				</li>
				<li>
					<Link href='#'>
						<a><i aria-hidden={true} className="text-white fas fa-cogs"> Administración</i></a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a><i aria-hidden={true} className="text-white fas fa-suitcase"> Empleo</i>
							<i aria-hidden={true} className="px-1 text-white fas fa-chevron-down"></i></a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a><i aria-hidden={true} className="text-white fas fa-clipboard-list"> Mi CV</i></a>
					</Link>
				</li>
				<li>
					<Link href='#'>
						<a><i aria-hidden={true} className='text-white fas fa-user-circle'> Perfil  </i>
							<i aria-hidden={true} className="px-1 text-white fas fa-chevron-down"></i></a>
					</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;