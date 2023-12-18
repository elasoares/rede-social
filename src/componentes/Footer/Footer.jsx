import React from 'react';
import styles from './Footer.module.css';

export function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<p className={styles.tituloFooter}>&copy; 2023 Sua Rede Social</p>
			<div>
				<a href="#" className={styles.footerLink}>
					Termos de Serviço
				</a>
				<span>|</span>
				<a href="#" className={styles.footerLink}>
					Política de Privacidade
				</a>
				<span>|</span>
				<a href="https://web.whatsapp.com/" className={styles.footerLink}>
					Contato
				</a>
			</div>
		</footer>
	);
};

