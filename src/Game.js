import React from 'react';
import { useSelector } from 'react-redux';
import Point from './Point/Point';
import Scorecard from './Scorecard';

export default function Game(){
    const {frames,
        cumulativeScores,
        pins,
        gameOver,
        rolls}= useSelector((state)=>state.point) 
        const totalScore = cumulativeScores.slice(-1)[0];
    return(
        <>
         <Scorecard
          frames={frames}
          cumulativeScores={cumulativeScores}
          totalScore={totalScore}
        />
        <Point
          gameOver={gameOver}
          lastRoll={pins.slice(-1)[0]}
          rolls={rolls}
        />
        </>
    )
}