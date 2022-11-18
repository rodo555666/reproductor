import React from 'react'
import { useState } from 'react';
import "./canciones.css";







let c = [new Audio('02 Judas Priest - Electric Eye.mp3'),new Audio('Municipal Waste - Grave Dive.mp3'),new Audio('02 Slayer - Disciple.mp3')] ;

let arr = [ { 
    sound: '02 Judas Priest - Electric Eye.mp3',   
    artista: "Judas Priest",
    cancion:"Electric Eye",
    disco :"Screaming For Vengeance",
    portada: "judas.jpg",
    play: "./svg/bx-play.svg"
    }, 
    { 
sound:'Municipal Waste - Grave Dive.mp3',   
artista: "Municipal Waste",
cancion:"Grave Dive",
disco :"Electrified Brain",
portada: "tapa.jpg",
play: "./svg/bx-play.svg"
}, 
{ 
    sound: '02 Slayer - Disciple.mp3',   
    artista: "Slayer",
    cancion:"Disciple",
    disco :"God Hates Uss All",
    portada: "slayer.jpg",
    play: "./svg/bx-play.svg"
    }
];

let ctime = (c[0].currentTime);





function canciones() {
    const [ state, setState ] = useState(0);

    const [ pl, setpl ] = useState(false);

    const [ ct, setct ] = useState(c[state].currentTime);

    function name() {
        setct(c[state].currentTime)
    }

    c[state].onplay = () => {  };


    return (
        <div>
        <article className='card'>
            <img src={arr[state].portada} alt="vite" />
            <h3>{arr[state].artista}</h3>
            <h2>{arr[state].cancion}</h2>
            <h4>{arr[state].disco}</h4>
            <audio> <source src={arr[state].sound} type="audio/mp3" />  </audio>
            <div className='tiempo'>  <p>{ct} </p> </div>

            <button onClick={()=> { setpl(true)
             console.log(c[state].currentTime)
           if (pl == false) {
             c[state].play()} else { setpl(false)
             c[state].pause()  }
            
            }} className="play"><img src={arr[state].play} alt="play" /></button>



            <button onClick={ () => { setState(state + 1)
            c[state].pause()
            setpl(false)
            c[state].currentTime = 0
          
            if (state >= 2) { setState(0) } }} className="siguiente"><img src="./svg/bxs-right-arrow.svg" alt="play" /></button>


            <button onClick={()=> { setState(state - 1)
             setpl(false)
            c[state].pause()
            c[state].currentTime = 0
           /*setTimeout(() => {
            c[state].play()
           }, 200);*/

           if (state <= 0 ) { setState(2) }}} className="anterior"><img src="./svg/bxs-left-arrow.svg" alt="play" /></button>

        </article>
       </div>

    );
}

export default canciones
