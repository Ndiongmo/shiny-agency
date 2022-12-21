import { useParams, Link } from 'react-router-dom'

function Survey() {
    const { questionNumber } = useParams()

    const pagination =
        questionNumber > 1 && questionNumber < 10 ? (
            <div>
                <Link to={`/survey/${parseInt(questionNumber) - 1}`}>
                    Précédent
                </Link>
                ...
                <Link to={`/survey/${parseInt(questionNumber) + 1}`}>
                    Suivant
                </Link>
            </div>
        ) : parseInt(questionNumber) === 1 ? (
            <Link to={`/survey/${parseInt(questionNumber) + 1}`}>Suivant</Link>
        ) : parseInt(questionNumber) === 10 ? (
            <Link to="/Results">Resultats</Link>
        ) : null

    return (
        <div>
            <h1>Questionnaire 🗄 </h1>
            <h2>Question {questionNumber}</h2>
            <br />
            {pagination}
        </div>
    )
}

export default Survey
