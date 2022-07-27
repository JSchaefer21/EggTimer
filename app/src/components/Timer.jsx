import { useState } from 'react'
import TimerCountdown from './TimerCountdown'
import '../styles/Timer.sass'


function Selection(props) {

    const [min] = useState(props.min)

    const handleBackClick = () => props.onBackClicked()

    return <div className="Timer">

        <button className='Timer__button' onClick={handleBackClick}>FINALIZAR</button>
        <p className='Timer__text'>Espere a que finalice el temporizador</p>
        <TimerCountdown min={min}/>  
    
    </div>
}

export default Selection