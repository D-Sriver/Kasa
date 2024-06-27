import housings from '../../data/logements.json'
import Card from './Card'

const DisplayCards = () => {
	return (
		<section className="housings_container">
			<div className="wrapper">
				<ul className="housings_list">
					{housings.map(({ id, title, cover }) => (
						<Card key={id} id={id} title={title} cover={cover} />
					))}
				</ul>
			</div>
		</section>
	)
}

export default DisplayCards
