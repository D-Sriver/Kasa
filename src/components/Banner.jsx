import PropTypes from 'prop-types'

export default function Banner({ cover, title }) {
	return (
		<section className="banner">
			<div className="wrapper">
				<img className="darker" src={cover} alt="Bannière" />
				{/* Si title n'est pas défini, on n'affiche pas le h1 */}
				{title && <h1>{title}</h1>}
			</div>
		</section>
	)
}

Banner.propTypes = {
	cover: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
}
