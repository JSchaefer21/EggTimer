import { useState, useContext } from 'react'
import Context from './Context'
import '../styles/App.sass'



function Selection(props) {

    const { handleFeedback } = useContext(Context)
    const [min, setMin] = useState(null)


    const handleStartClick = () => {
        if(min === null){
            handleFeedback({ type: 'error', message: 'Por favor seleccione el nivel de coccion'})
        }
        else props.onStartClicked(min)
    }

    const removeClass = () => {
        ['0', '1', '2','3','5','7','9','11','13','15'].forEach(id=> {
            document.getElementById(id).classList.remove('selected') 
        })
    }
    
    const handle0click = () => { setMin(0); removeClass(); document.getElementById("0").classList.add('selected') }
    const handle1click = () => { setMin(1); removeClass(); document.getElementById("1").classList.add('selected') }
    const handle2click = () => { setMin(2); removeClass(); document.getElementById("2").classList.add('selected') }
    const handle3click = () => { setMin(3); removeClass(); document.getElementById("3").classList.add('selected') }
    const handle5click = () => { setMin(5); removeClass(); document.getElementById("5").classList.add('selected') }
    const handle7click = () => { setMin(7); removeClass(); document.getElementById("7").classList.add('selected') }
    const handle9click = () => { setMin(9); removeClass(); document.getElementById("9").classList.add('selected') }
    const handle11click = () => { setMin(11); removeClass(); document.getElementById("11").classList.add('selected') }
    const handle13click = () => { setMin(13); removeClass(); document.getElementById("13").classList.add('selected') }
    const handle15click = () => { setMin(15); removeClass(); document.getElementById("15").classList.add('selected') }
 
    return <div className="Selection">

        <p className='Selection__text'>Seleccione el nivel de coccion deseado</p>
        <p className='Selection__text'>Pulse START cuando el agua empiece a hervir</p>
        <button className='Selection__button' onClick={handleStartClick}>START</button>

        <div className='Selection__scroll'>
            <button id='0' className='Image__egg-button' onClick={handle0click}>
                <img className='image' src='../image/0.png' alt=''/>
            </button>
            <button id='1' className='Image__egg-button' onClick={handle1click}>
                <img className='image' src='../image/1.png' alt=''/>
            </button>
            <button id='2' className='Image__egg-button' onClick={handle2click}>
                <img className='image' src='../image/2.png' alt=''/>
            </button>
            <button id='3' className='Image__egg-button' onClick={handle3click}>
                <img className='image' src='../image/3.png' alt=''/>
            </button>
            <button id='5' className='Image__egg-button' onClick={handle5click}>
                <img className='image' src='../image/5.png' alt=''/>
            </button>
            <button id='7' className='Image__egg-button' onClick={handle7click}>
                <img className='image' src='../image/7.png' alt=''/>
            </button>
            <button id='9' className='Image__egg-button' onClick={handle9click}>
                <img className='image' src='../image/9.png' alt=''/>
            </button>
            <button id='11' className='Image__egg-button' onClick={handle11click}>
                <img className='image' src='../image/11.png' alt=''/>
            </button>
            <button id='13' className='Image__egg-button' onClick={handle13click}>
                <img className='image' src='../image/13.png' alt=''/>
            </button>
            <button id='15' className='Image__egg-button' onClick={handle15click}>
                <img className='image' src='../image/15.png' alt=''/>
            </button>
        </div>
    
    </div>
}

export default Selection