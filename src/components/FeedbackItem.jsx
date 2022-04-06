import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import Card from "./shared/Card"

const FeedbackItem = ({ item, onDelete }) => {

    // const handleClick = () => {
    //     setRating((prevValue) => {
    //         return prevValue + 1;
    //     })
    // };

    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button className='close' onClick={() => onDelete(item.id)}>
                <FaTimes color='purple' />
            </button>
            <div className="text-display">{item.text}</div>
            {/* <button onClick={handleClick}>Click</button> */}
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem