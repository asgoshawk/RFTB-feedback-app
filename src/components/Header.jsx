import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const Header = ({ text, bgColor, textColor }) => {
    const headerStyles = {
        backgroundColor: bgColor,
        color: textColor
    }

    return (
        <Link to='/' className="header-link">
            <header style={headerStyles}>
                <div className="container">

                    <h2>{text}</h2>

                </div>
            </header>
        </Link>
    )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: '#333',
    textColor: 'steelblue',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header