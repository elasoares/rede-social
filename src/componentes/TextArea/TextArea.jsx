import React from 'react';
import styles from './TextArea.module.css';

const TextArea = ({ label, placeholder, value, onChange, children, onClick, className }) => {
	return (
		<div className={styles.textAreaContainer}>
			<label className={styles.textAreaLabel}>{label}</label>
			<textarea
				className={styles.textAreaInput}
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
			<button className={className} onClick={onClick}>{children}</button>
		</div>
	);
};

export default TextArea;