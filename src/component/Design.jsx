import React, { useState } from 'react'
import Model from './Model'
import Customization from './Customization'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import 'bootstrap/dist/css/bootstrap.css'

const Design = () => {
    const [colors, setColors] = useState({
        snapBody: '#fff',
        zipperBody: '#fff',
        snaps: '#fff',
        collar1: '#fff',
        collar2: '#fff',
        bottom: '#fff',
        hand: '#fff',
        shol: '#fff',
        end: '#fff'
    });

    return (
        <>
            <div style={{textAlign:"center", background:"rgb(159, 158, 158)"}}>
                <h2>Jacket Designer</h2>
                <hr />
            </div>
            <div style={{marginLeft:"150px", marginTop:"80px"}}>
                <div className="">
                    <div className="row" style={{width:"80%"}}>
                        <div className="col model" style={{paddingLeft:"100px"}}>
                            <Canvas style={{borderStyle:"solid", borderRadius:"20px", width:"90%", height:"450px"}}>
                                <Model colors={colors} />
                                <Environment preset="sunset" />
                                <OrbitControls />
                            </Canvas>
                        </div>
                        <div className="col customization container text-center">
                            <Customization colors={colors} setColors={setColors} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Design
