import * as React from 'react';
export interface CogBoxData {
    label: string;
    imgPath: string;
    c: string;
    desc: string;
    desc2: string;
    desc3: string;
    isImage: string;
    headerIcon: string;
    display: string;
    isIconAvailable: string;
}
export interface State {
    jsonData: CogBoxData[];
}
export declare const initialState: State;
export declare class IntelligentHubPortal extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default IntelligentHubPortal;
