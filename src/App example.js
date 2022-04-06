const App = () => {
    const title = 'Blog post';
    const body = 'This is a blog post';
    const comments = [
        { id: 0, text: 'comment 0' },
        { id: 1, text: 'comment 1' },
        { id: 2, text: 'comment 2' },
    ];
    const loading = false;
    const showComments = true;

    if (loading) return <h1>Loading...</h1>

    return (
        <div className="container">
            <h1>{title.toLocaleUpperCase()}</h1>
            <p>{body}</p>

            {showComments && (
                <div className="comments">
                    <h3> Comments ({comments.length})</h3>
                    <ul>
                        {comments.map((comment, index) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                    </ul>
                </div>)
            }
        </div>
    )
}

export default App;