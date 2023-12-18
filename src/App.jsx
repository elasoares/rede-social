import './App.css';
import { Header } from './componentes/Header/Header';
import { Section } from './componentes/Section/Section';
import { Main } from './componentes/Main/Main';
import { Aside } from './componentes/Aside/Aside';
import { Footer } from './componentes/Footer/Footer';

export default function App() {
	return (
		<div className="bodyContainer">
			<Header className="containerHeader" />

			<Section className="containerSection" />

			<Main className="containerMain" />

			<Aside className="containerAside" />
			
			<Footer className="containerFooter" />
		</div>
	);
}
