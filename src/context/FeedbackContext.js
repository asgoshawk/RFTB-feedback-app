import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {

    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: 'This item is for context 1',
            rating: 10,
        },
        {
            id: 2,
            text: 'This item is for context 2',
            rating: 9,
        },
        {
            id: 3,
            text: 'This item is for context 3',
            rating: 8,
        },
    ]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
        console.log(newFeedback);
    };

    const deleteFeedback = (id) => {
        if (window.confirm('Delete this feedback?')) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
        console.log(`App ${id}`);
    };

    const updateFeedback = (id, updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem } : item));
    };

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true,
        })
    };

    return <FeedbackContext.Provider
        value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
        }}
    >
        {children}
    </FeedbackContext.Provider>
};

export default FeedbackContext