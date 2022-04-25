// import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    const [feedback, setFeedback] = useState([]);

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false,
    })

    useEffect(() => {
        fetchFeedback();
    }, []);

    // Fetch feedback
    const fetchFeedback = async () => {
        const res = await fetch(`/feedback?_sort=id&_order=desc`);
        const data = await res.json();
        setFeedback(data);
        setIsLoading(false);
    };

    const addFeedback = async (newFeedback) => {
        const res = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(newFeedback),
        });

        const data = await res.json();

        // newFeedback.id = uuidv4();
        setFeedback([data, ...feedback])
        // console.log(newFeedback);
    };

    const deleteFeedback = async (id) => {
        if (window.confirm('Delete this feedback?')) {
            await fetch(`/feedback/${id}`, { method: 'DELETE' });
            setFeedback(feedback.filter((item) => item.id !== id));
        }
        console.log(`App ${id}`);
    };

    const updateFeedback = async (id, updItem) => {
        const res = await fetch(`/feedback/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updItem),
        });

        const data = await res.json();

        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...data } : item));
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
            isLoading,
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