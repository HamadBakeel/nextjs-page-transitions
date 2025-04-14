import React, { useEffect, useState } from 'react'
import Curve from './Curve';
import Stairs from './Stairs';
import Inner from './Inner';
import PageTransitionModal from './PageTransitionModal';

export default function PageTransition({children}) {

    const [selectedTransition, setSelectedTransition] = useState('curve');

    useEffect(()=>{
        let storedSelectedTransition = localStorage.getItem('selectedTransition');
        if(!storedSelectedTransition){
            localStorage.setItem('selectedTransition', 'curve');
            setSelectedTransition('curve')
        }else{
            setSelectedTransition(storedSelectedTransition)
        }
    }, [])

    function changeSelectedTransition (name){
        setSelectedTransition(name);
        localStorage.setItem('selectedTransition', name);
        console.log(name)
    }

    return (
        <>
            <PageTransitionModal setSelectedTransition={changeSelectedTransition}/>
            {selectedTransition === 'curve' && (
                <Curve>
                    {children}
                </Curve>
            )}
            {selectedTransition === 'inner' && (
                <Inner>
                    {children}
                </Inner>
            )}
            {selectedTransition === 'stairs' && (
                <Stairs>
                    {children}
                </Stairs>
            )}
        </>
    )
}
