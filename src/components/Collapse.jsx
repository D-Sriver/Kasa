import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'

export default function Collapse({ title, content }) {
	const [openTab, setOpenTab] = useState(false)
	const openCollapse = () => {
		setOpenTab((openTab) => !openTab)
	}

	return (
		<>
			<div className="collapse">
				<div onClick={openCollapse} className="collapse_header">
					<h2>{title}</h2>
					<i className={openTab ? 'rotate' : ''}>
						<FontAwesomeIcon icon={faAngleUp} />
					</i>
				</div>
				<div className={`collapse_content ${openTab ? 'open' : ''}`}>{content}</div>
			</div>
		</>
	)
}

Collapse.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.node.isRequired,
}
