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
			<button onClick={prevSlide} className="carouselButton prevButton">
				❮
			</button>
			<button onClick={nextSlide} className="carouselButton nextButton">
				❯
			</button>
		</div>
	)
}

ImageCarousel.propTypes = {
	pictures: PropTypes.array.isRequired,
}

export default ImageCarousel
