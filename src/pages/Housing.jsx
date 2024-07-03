import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useParams } from 'react-router-dom'
import Collapse from '../components/Collapse'
import ImageCarousel from '../components/ImageCarousel'
import logements from '../data/logements.json'
import NotFound from './NotFound'
export default function Housing() {
	const { id } = useParams()
	const scale = [1, 2, 3, 4, 5]
	const logement = logements.find((logement) => logement.id === id)
	if (!logement) {
		return <NotFound />
	}
	const ScaleValue = logement.rating
	document.title = `${logement.title}`

	return (
		<div className="housingPage wrapper">
			<ImageCarousel pictures={logement.pictures} />
			<div className="general">
				<div className="housingInfos">
					<h1>{logement.title}</h1>
					<p>{logement.location}</p>
					<ul className="tags">
						{logement.tags.map((tag, index) => (
							<li key={index}>{tag}</li>
						))}
					</ul>
				</div>
				<div className="otherInfos">
					<div className="host">
						<img src={logement.host.picture} alt={logement.host.name} />
						<p>{logement.host.name}</p>
					</div>
					<div className="rating">
						{scale.map((rangeElem) =>
							Number(ScaleValue) >= rangeElem ? (
								<span key={rangeElem.toString()} className="star red">
									<FontAwesomeIcon icon={faStar} />
								</span>
							) : (
								<span key={rangeElem.toString()} className="star grey">
									<FontAwesomeIcon icon={faStar} />
								</span>
							)
						)}
					</div>{' '}
				</div>
			</div>
			<div className="collapses">
				<Collapse title="Decription" content={logement.description} />
				<Collapse
					title="Equipements"
					content={
						<ul>
							{logement.equipments.map((equipment, index) => (
								<li key={index}>{equipment}</li>
							))}
						</ul>
					}
				/>
			</div>
		</div>
	)
}
