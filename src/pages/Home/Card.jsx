import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ id, title, cover }) => {
	return (
		<li key={id} className="housing">
			<img src={cover} alt={title} className="housing_figure_cover" />
			<h2 className="housing_title">
				<Link to={'/housing/' + id}>{title}</Link>
			</h2>
		</li>
	)
}

Card.propTypes = {
	id: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
}

export default Card
