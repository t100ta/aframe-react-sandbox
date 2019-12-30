import 'aframe'
// import { Entity, Scene } from 'aframe-react'
import * as React from 'react'
import { AframeReactState } from '../states/aframeReactState'
import { AframeReactAction } from '../containers/aframeReactContainer'

// TODO 型定義ファイルを自作 or @types/aframe-reactの完成を待つ
const { Entity, Scene } = require('aframe-react')

interface OwnProps {}

type aframeReactProps = OwnProps & AframeReactState & AframeReactAction

export const aframeReactComponent: React.SFC<aframeReactProps> = (props: aframeReactProps) => {
    return (
        <Scene>
            <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
            <Entity particle-system={{preset: 'snow'}}/>
            <Entity light={{type: 'point'}}/>
            {/* <Entity gltf-model={{src: 'virtualcity.gltf'}}/> */}
            <Entity text={{value: 'Hello, WebVR!'}}/>
        </Scene>
    )
}