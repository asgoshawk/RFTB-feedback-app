import Card from "../components/shared/Card"
import { Link } from "react-router-dom"

const AboutPage = () => {
    return (
        <Card>
            <div className="about">
                <h1>This is about page.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque dolorum asperiores soluta perspiciatis distinctio impedit tenetur vero velit autem. Odit repellendus est reprehenderit iusto atque quidem placeat maiores beatae numquam a fugit consequatur facere, deserunt neque pariatur labore rem? Culpa iste saepe modi incidunt aut quidem at hic tempora expedita.</p>
                <p>Version 1.0.0</p>
                <p>
                    <Link to='/'>Back to home</Link>
                </p>
            </div>
        </Card>
    )
}

export default AboutPage