import PropTypes from 'prop-types'
import { useState } from 'react'

function ImageCarousel({ pictures }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const prevSlide = () => {
		const newIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const nextSlide = () => {
		const newIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	return (
		<div className="carousel">
			<img
				src={pictures[currentIndex]}
				alt={`Slide ${currentIndex + 1}`}
				className="carouselImage"
			/>
			{pictures.length > 1 && (
				<>
					<button onClick={prevSlide} className="carouselButton prevButton">
						❮
					</button>
					<button onClick={nextSlide} className="carouselButton nextButton">
						❯
					</button>
					{pictures.length > 1 && (
						<div className="carouselCounter">
							{currentIndex + 1}/{pictures.length}
						</div>
					)}
				</>
			)}
		</div>
	)
}

ImageCarousel.propTypes = {
	pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageCarousel
