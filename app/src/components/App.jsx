import { useState } from 'react'
import Context from './Context'
import Feedback from './Feedback'
import Selection from './Selection'
import Timer from './Timer'
import '../styles/App.sass'

function App () {

    const [feedback, setFeedback] = useState(null)
    const [view, setView] = useState('start')
    const [min, setMin] = useState(null)

    const handleStartClick = (min) =>{
        setView('timer')
        setMin(min)
    }
    const handleBackClicked = () => setView('start')

    const handleFeedback = feedback => setFeedback(feedback)
    const handleFeedbackTimeout = () => setFeedback(null)


    return <Context.Provider value={{ handleFeedback }} >
        <div className="App">

        <main>
            <h1 className='App_title'>Egg Timer</h1>     
            {view==='start' && <Selection onStartClicked={handleStartClick} />}
            {view==='timer' && <Timer min={min} onBackClicked={handleBackClicked}/>}
        </main>

        {feedback && <Feedback type={feedback.type} message={feedback.message} callback={handleFeedbackTimeout}/> } 
        </div>
    </Context.Provider>
}

export default App