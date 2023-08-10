import React from 'react';
export interface CogBoxData {
    label: string;
    imgPath: string;
    c: string;
    desc: string;
}
export interface State {
    index: number;
}
export declare const initialState: State;
export declare class TrafficSnarlsCard extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    static content: any;
    onArrowClick: () => void;
    render(): React.JSX.Element;
}
export default TrafficSnarlsCard;
