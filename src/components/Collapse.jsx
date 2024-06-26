import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; // Add this line

const Collapse = ({title, content}) => {
    const [ openTab, setOpenTab ] = useState(false);

    const openCollapse = () => {
        setOpenTab((openTab) => !openTab); 
    };

    return (
        <>
            <div className="collapse">
                <div onClick={openCollapse} className="collapse_header">
                    <h2>{title}</h2>
                    {!openTab ? <i>{<FontAwesomeIcon icon={faAngleDown} />}</i> : <i>{<FontAwesomeIcon icon={faAngleUp} />}</i>}
                </div>
                {openTab && 
                    <div className="collapse_content">{content}</div>
                }
            </div>
        </>
    )
}

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired
};

export default Collapse;