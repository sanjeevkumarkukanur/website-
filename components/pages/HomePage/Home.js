import React from 'react'
import Pricing from '../../Pricing';
import Section1 from '../../Section1'
import {homeObjFour, homeObjone, homeObjThree, homeObjTwo} from './Data';
function Home() {
    return (
        <>
         <Section1 {...homeObjone}/>   
         <Section1 {...homeObjThree}/>   
         <Section1 {...homeObjTwo}/> 
         <Pricing />  
         <Section1 {...homeObjFour}/>   
        </>
    )
}

export default Home;
