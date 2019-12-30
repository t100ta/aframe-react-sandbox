import * as React from 'react'
import { HogeState } from '../states/hogeState'
import { HogeAction } from '../containers/hogeContainer'

interface OwnProps {}

type HogeProps = OwnProps & HogeState & HogeAction

export const HogeComponent: React.SFC<HogeProps> = (props: HogeProps) => {
    return (
        <div>
            <div className="field">
                <input type="text" placeholder="name" value={props.name} onChange={(e) => props.updateName(e.target.value)} />
            </div>
            <div className="field">
                <input type="email" placeholder="email" value={props.email} onChange={(e) => props.updateEmail(e.target.value)} />
            </div>
        </div>
    )
}