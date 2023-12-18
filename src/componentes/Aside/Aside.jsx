import styles from './Aside.module.css';
import { UserCard } from '../UsersCard/UsersCard';
import { RiUserAddFill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";

const adicionarAmigos = [
	{
		id: 1,
		nome: "Iago Pereira",
		amigos: 5,
		src: "src/componentes/img/9720004.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},
	{
		id: 2,
		nome: "Luke Bravenboer",
		amigos: 2,
		src: "src/componentes/img/9720009.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />

	},
	{
		id: 3,
		nome: "Pedro Uchoa",
		amigos: 3,
		src: "src/componentes/img/9720029.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},
	{
		id: 4,
		nome: "Vó Isa",
		amigos: 4,
		src: "src/componentes/img/9720030.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},
	{
		id: 5,
		nome: "Luke Bravenboer",
		amigos: 2,
		src: "src/componentes/img/9720009.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />

	},
	{
		id: 6,
		nome: "Pedro Uchoa",
		amigos: 3,
		src: "src/componentes/img/9720029.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},
	{
		id: 7,
		nome: "Vó Isa",
		amigos: 4,
		src: "src/componentes/img/9720030.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},
	{
		id: 8,
		nome: "Vó Isa",
		amigos: 4,
		src: "src/componentes/img/9720030.jpg",
		alt: "personagem-avatar de Freepik",
		add: <RiUserAddFill />,
		close: <AiOutlineClose />
	},

]




export function Aside({ className }) {
	return (
		<aside className={`${styles.containerAside} ${className}`}>
			<h1 className={styles.titulo}>Adicionar</h1>
			<ul>
				{adicionarAmigos.map((adicionar) => (
					<li key={adicionar.id}>
						<UserCard
							nome={adicionar.nome}
							amigos={adicionar.amigos}
							src={adicionar.src}
							alt={adicionar.alt}
							icon1={adicionar.add}
							icon2={adicionar.close}
						/>
					</li>
				))}
			</ul>
		</aside>
	);
}
