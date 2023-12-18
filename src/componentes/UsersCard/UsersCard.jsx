import style from "./UsersCard.module.css";




export function UserCard({ nome, amigos, src, alt, icon1, icon2, icon3, className }) {

	function exibirMensagem() {
		alert('Você clicou no botão!');
	}

	return (

		<article className={style["user-card-container"]}>
			<div>
				<img
					className={`${style["user-card-img"]} ${className}`}
					src={src}
					alt={alt}
				/>
			</div>
			<div className={style['user-card-container-info']}>
				<div><h1 className={`${className} ${style["user-card-name"]}`}>{nome}</h1>
					<p className={`${className} ${style["user-card-job"]}`}>{amigos} amigos em comum...</p>
				</div>
				<div className={style.icons}>
					<p onClick={exibirMensagem} className={`${className} ${style.iconsStyles}`}>{icon1}</p>
					<p onClick={exibirMensagem} className={`${className} ${style.iconsStyles}`}>{icon2}</p>
					<p onClick={exibirMensagem} className={`${className} ${style.iconsStyles}`}>{icon3}</p>
				</div>
			</div>
		</article>
	);
}
