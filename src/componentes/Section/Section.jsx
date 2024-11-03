import styles from './Section.module.css';
import { UserCard } from '../UsersCard/UsersCard';
import { IoIosCall } from "react-icons/io";
import { FcVideoCall } from "react-icons/fc";
import { RiMessage3Fill } from "react-icons/ri"

const amigos = [
	{
		id: 1,
		nome: "Alana Vale",
		amigos: 5,
		src: "perfil1.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},
	{
		id: 2,
		nome: " Joel Feitosa",
		amigos: 2,
		src: "perfil2.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />

	},
	{
		id: 3,
		nome: " Samanthan Ferreira",
		amigos: 3,
		src: "perfil3.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},
	{
		id: 4,
		nome: " Victor Mendes",
		amigos: 4,
		src: "perfil4.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},
	{
		id: 5,
		nome: " Elise Rodrigues",
		amigos: 5,
		src: "perfil5.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},
	{
		id: 6,
		nome: "Alana Vale",
		amigos: 5,
		src: "perfil1.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},
	{
		id: 7,
		nome: " Joel Feitosa",
		amigos: 2,
		src: "perfil2.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />

	},
	{
		id: 8,
		nome: " Samanthan Ferreira",
		amigos: 3,
		src: "perfil3.jpg",
		alt: "personagem-avatar de Freepik",
		call: <IoIosCall />,
		videoCall: <FcVideoCall />,
		mensagem: <RiMessage3Fill />
	},


]




export function Section({ className }) {
	return (
		<section className={`${styles.containerSection} ${className}`}>
			<h1 className={styles.titulo}>Seus amigos</h1>
			<ul>
				{amigos.map((amigo) => (
					<li key={amigo.id}>
						<UserCard
							nome={amigo.nome}
							amigos={amigo.amigos}
							src={amigo.src}
							alt={amigo.alt}
							icon1={amigo.call}
							icon2={amigo.videoCall}
							icon3={amigo.mensagem}
						>
						</UserCard>
					</li>
				))}
			</ul>
		</section>
	);
}
