import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';
import FeedbackItem from "./FeedbackItem"

const FeedbackList = ({ feedback, onDelete }) => {
    if (!feedback || feedback.length === 0) {
        return <div>There is no feedback.</div>
    }

    return (

        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 0, y: -100 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, x: 100, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FeedbackItem key={item.id} item={item} onDelete={onDelete} />
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    )

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item) => (
    //             <FeedbackItem key={item.id} item={item} onDelete={onDelete} />
    //         ))}
    //     </div>
    // )
}

FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        }),
    )
}

export default FeedbackList