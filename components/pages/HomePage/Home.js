import React from 'react'
import Section1 from '../../Section1'
import {homeObjone} from './Data';
function Home() {
    return (
        <>
         <Section1 {...homeObjone}/>   
        </>
    )
}

export default Home;
