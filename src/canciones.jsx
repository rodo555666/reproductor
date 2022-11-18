import React from 'react'
import { useState, useEffect } from 'react';
import datos from './json/datos.json'
import "./canciones.css";







let c = [new Audio('02 Judas Priest - Electric Eye.mp3'),new Audio('Municipal Waste - Grave Dive.mp3'),new Audio('02 Slayer - Disciple.mp3')] ;




let minutes = Math.floor(c[0].currentTime / 60);



function canciones() {
    const [ state, setState ] = useState(0);

    const [ pl, setpl ] = useState(false);

    const [ ct, setct ] = useState(c[state].currentTime);
    const [ t, sett ] = useState(0);
    const [ pimg, setpimg ] = useState(<i className="fa-solid fa-play"></i>);
 
    const play = () => { setpl(true)
        setpimg (<i className="fa-solid fa-play"></i>)
       if (pl == false) {
        sett(t+1)
        setpimg ( <i className="fa-solid fa-pause"></i>)
        
         c[state].play()} else { setpl(false)
            sett(0) 
         c[state].pause() }
        
    };

    const ante = ()=> { setState(state - 1)
        setpl(false)
       c[state].pause()
       c[state].currentTime = 0
      if (state <= 0 ) { setState(2) }};


    const sig = () => { setState(state + 1)
        c[state].pause()
        setpl(false)
        c[state].currentTime = 0
      
        if (state >= 2) { setState(0) } }

   /* useEffect(() => {
     if (pl == true) {
        sett(t+1) 
         minutes = Math.floor(t / 60)
     }
      return () => {
      }
    }, [t])*/
       
    console.log(datos)




    return (
        <div>
        <article className='card'>
            <img src={datos[state].portada} alt="vite" />
            <h3>{datos[state].artista}</h3>
            <h2>{datos[state].cancion}</h2>
            <h4>{datos[state].disco}</h4>
            <button onClick={play} className="play"> <div>{pimg}</div></button>
            <div className='btn'>
            <button className='estrella'> <i className="fa-solid fa-star"></i></button> 
            <button className='aleatorio'><i className="fa-solid fa-shuffle"></i></button>
            <button className='repetir'><i className="fa-solid fa-repeat"></i></button>    
            <audio> <source src={datos[state].sound} type="audio/mp3" />  </audio>
          

           
            <button onClick={sig} className="siguiente"><img src="./svg/bxs-right-arrow.svg" alt="play" /></button>
            <button onClick={ante} className="anterior"><img src="./svg/bxs-left-arrow.svg" alt="play" /></button></div>
              <div className='tiempo'>  <p>{minutes} </p> </div>

        </article>
       </div>

    );
        
 }
export default canciones
