import { useState, useEffect } from 'react'
import useSound from 'use-sound'
import alarm from '../bell_notification.wav'
import '../styles/Timer.sass'

function Timer({min}) {

    const [ minutes, setMinutes ] = useState(min)
    const [ seconds, setSeconds ] = useState(0)
    const [ timer, setTimer ] = useState(true)
    const [ image, setImgae ] = useState(-1)
    
    const [play] = useSound(alarm)

    const playSound=() => {
        play()
        setTimeout(function() {
            play()
        }, 2500);
    }

    useEffect(()=>{
        let myInterval = setInterval(() => {
            if (minutes===0 && seconds===0) {
                setTimer(false)
                playSound()
            }
            if (seconds > 0) {
                setSeconds(seconds - 1)
            }
            else {
                setImgae(image+1)
                setSeconds(59)
                setMinutes(minutes - 1)
            }
        }, 1000)
        return ()=>  {
            clearInterval(myInterval)}
    })

    return (
        <div className='Timer__container'>
            { timer && <h1 className='Timer__number-countdown'> {minutes<10 ? `0${minutes}`: minutes}:{seconds<10 ? `0${seconds}`: seconds}</h1> }
            { !timer && <p className='Timer__end'>Finalizado</p> }

            {image===-1 && <div className='Timer__noImage'/>}
            {image===0 && <img className='Timer__image' src='../image/0.png' alt=''/>}
            {image===1 && <img className='Timer__image' src='../image/1.png' alt=''/>}
            {image===2 && <img className='Timer__image' src='../image/2.png' alt=''/>}
            {(image===3 || image===4) && <img className='Timer__image' src='../image/3.png' alt=''/>}
            {(image===5 || image===6) && <img className='Timer__image' src='../image/5.png' alt=''/>}
            {(image===7 || image===8) && <img className='Timer__image' src='../image/7.png' alt=''/>}
            {(image===9 || image===10) && <img className='Timer__image' src='../image/9.png' alt=''/>}
            {(image===11 || image===12) && <img className='Timer__image' src='../image/11.png' alt=''/>}
            {(image===13 || image===14) && <img className='Timer__image' src='../image/13.png' alt=''/>}
            {(image>14) && <img className='Timer__image' src='../image/15.png' alt=''/>}
            
        </div>
    )
}

export default Timer