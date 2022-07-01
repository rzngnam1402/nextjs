import React from 'react'
import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import { useState } from 'react';

const FeedbackPage = (props) => {

    const [feedbackData, setFeedbackData] = useState()
    function loadFeedbackHandler(id) {
        fetch(`/api/${id}`)
            .then(res => res.json())
            .then(data => {
                setFeedbackData(data.feedback)
            });
    }

    return (
        <>
            {feedbackData && <p>{feedbackData.email}</p>}
            <ul>
                {props.feedbackItems.map(item => (
                    <li onClick={loadFeedbackHandler.bind(null, item.id)} key={item.id}>{item.text}
                        <button>Show detail</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export async function getStaticProps() {
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return {
        props: {
            feedbackItems: data,
        }
    }

}

export default FeedbackPage