import { CiHeart } from "react-icons/ci";
import styles from './Main.module.css';
import TextArea from '../TextArea/TextArea';
import React, { useState } from 'react';
import { CiShare2 } from "react-icons/ci";

const posts = [
	{
		id: 1,
		perfil: 'src/componentes/img/post1.jpg',
		src: 'src/componentes/img/post1.jpg',
		alt: 'personagem-avatar de Freepik',
		nome: 'Alana Vale',
		postado: 'Postado há 2 min..',
		destaque: 'Hoje é o meu dia, que dia mais feliz. #HappyBirthdayToMe',
		curtidas: 'Elise Rodrigues curtiu e outras 150 pessoas curtiram...',
		compartilhamentos: 25,
		comentarios: [
			{ id: 1, nome: 'Fernanda Mendes', mensagem: 'Linda Amiga' },
			{ id: 2, nome: 'Carlos Santos', mensagem: 'Amei sua foto Amor S2' },

		],
		icone: <CiHeart />
	},
	{
		id: 2,
		perfil: 'src/componentes/img/perfil2.jpg',
		src: 'src/componentes/img/vista-do-adoravel-gato-3d.jpg',
		alt: 'personagem-avatar de Freepik',
		nome: 'Joel Feitosa',
		postado: 'Postado há 52 seg..',
		destaque: 'Meu melhor amigo. #CatLove #AmoGatos',
		curtidas: 'Elise Rodrigues curtiu e outras 150 pessoas curtiram...',
		compartilhamentos: 10,
		comentarios: [
			{ id: 3, nome: 'Pedro', mensagem: 'Amei sua foto Amor S2' },
			{ id: 4, nome: 'Carminda', mensagem: 'Saudades meu filho amado.' },
		],
		icone: <CiHeart />
	},


];

export function Main({ className }) {
	const [comentarios, setComentarios] = useState(posts.map(() => ''));
	const [comentariosAtual, setComentariosAtual] = useState(0);

	const changeTexto = (index, value) => {
		setComentarios((prevComentarios) => {
			const novosComentarios = [...prevComentarios];
			novosComentarios[index] = value;
			return novosComentarios;
		});
	};

	function changeComentarioAtual() {
		alert('Seu comentário enviado: ' + comentarios[comentariosAtual]);
		setComentarios((prevComentarios) => {
			const novosComentarios = [...prevComentarios];
			novosComentarios[comentariosAtual] = '';
			return novosComentarios;
		});
		setComentariosAtual(comentariosAtual + 1);
	}

	return (
		<main className={`${styles.containerMAin} ${className}`}>
			<h1 className={styles.titulo}>Feed</h1>
			{posts.map((post, index) => (
				<div key={post.id} className={styles['post-container']}>
					<div className={styles['post-container-perfil']}>
						<img className={styles.perfilPost} src={post.perfil} alt={post.alt} />
						<div>
							<h1 className={styles['post-nome-perfil']}>{post.nome}</h1>
							<p className={styles['post-nome-perfil']}>{post.postado}</p>
						</div>
					</div>

					<div className={styles['container-imagemPostada']}>
						<img style={{ alignSelf: "center" }} className={styles.imagemPostada} src={post.src} alt={post.alt} />
						<p style={{ alignSelf: "center" }} className={styles.destaqueStyles}>
							<span className={styles.nomeDoComentario}>{post.nome}: </span> {post.destaque}
						</p>
					</div>

					<div className={styles['post-container-curtidas']}>
						<p className={styles.icon}>{post.icone}</p>
						<p className={styles.curtidasStyles}>{post.curtidas}</p>
						<p className={styles.icon}><CiShare2 /></p>
						<p className={styles.curtidasStyles}>{post.compartilhamentos}</p>
					</div>

					<div className={styles['post-container-comentario']}>
						<div className={styles.containerNome}>
							<TextArea
								label="Comentários:"
								placeholder="Comente aqui..."
								value={comentarios[index]}
								onChange={(e) => changeTexto(index, e.target.value)}
							/>
							<button className={styles.enviarButton} onClick={changeComentarioAtual}>Enviar</button>
						</div>
						{post.comentarios.map((comentario) => (
							<p key={comentario.id} className={styles.seuComentario}>
								<span className={styles.nomeDoComentario}>{comentario.nome}: </span>
								{comentario.mensagem}
							</p>
						))}
						{comentarios[index] && <p className={styles.seuComentario}>Você: {comentarios[index]}</p>}
					</div>
				</div>
			))}
		</main>
	);
}
