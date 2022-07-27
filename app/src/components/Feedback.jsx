import '../styles/Feedback.sass'

function Feedback({ type, message, callback }) { 

    setTimeout(callback, 3500)
    
    return <div className={`Feedback Feedback--${type}`}>
        <p className="Feedback__font">{message}</p>
    </div>
}

export default Feedback