import styles from './Header.module.css';
import { Users } from '../Users/Users';
import { FiAlignJustify } from "react-icons/fi";
import { useState } from 'react';

const usersImg = [
	{
		id: 1,
		src: "src/componentes/img/perfil1.jpg",
		alt: "personagem-avatar de Freepik",
	},
	{
		id: 2,
		src: "src/componentes/img/perfil2.jpg",
		alt: "personagem-avatar de Freepik",
	},
	{
		id: 3,
		src: "src/componentes/img/perfil3.jpg",
		alt: "personagem-avatar de Freepik",
	},
	{
		id: 4,
		src: "src/componentes/img/perfil4.jpg",
		alt: "personagem-avatar de Freepik",
	},
	{
		id: 5,
		src: "src/componentes/img/perfil5.jpg",
		alt: "personagem-avatar de Freepik",
	},
];

export function Header({ className }) {

	const [menu, setMenu] = useState(false);

	function changeMenu() {
		setMenu(!menu);
	}



	return (
		<>
			<header className={`${styles.containerHeader} ${className}`}>
				<FiAlignJustify className={styles.meuBar} onClick={changeMenu} />

				<nav className={`${styles.navegacao} ${menu ? styles.menuActive : " "}`}>
					<ul className={`${menu ? styles.menuActive : ""}`}>
						<li className={styles['menu-lista']}>Perfil</li>
						<li className={styles['menu-lista']}>Configuração</li>
						<li className={styles['menu-lista']}>Sair</li>
					</ul>
				</nav>



				<div className={styles.perfis}>
					{usersImg.map((userImg) => (

						<Users className={styles.avatar} key={userImg.id} src={userImg.src} alt={userImg.alt} />

					))}
				</div>

				<div className={styles.meuAvatar}>
					<Users className={styles.avatar} src="src/componentes/img/perfil6.jpg" alt="personagem-avatar de Freepik" />
				</div>
			</header>
		</>
	);
}
