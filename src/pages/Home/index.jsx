import Banner from '../../components/Banner'
import bannerCover from '../../images/montagnes-ocean.png'
import DisplayCards from './DisplayCards'

export default function Home() {
	document.title = 'Kasa - Accueil'
	return (
		<>
			<Banner cover={bannerCover} title="Chez vous, partout et ailleurs" />
			<DisplayCards />
		</>
	)
}
