import React from 'react';
export interface CogBoxData {
    path: string;
    name: string;
    isOpen: boolean;
}
export interface State {
    jsonData: boolean;
}
export declare const initialState: State;
export declare class LeftSideMenuBarUpdated extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    renderMenu: () => void;
    render(): React.JSX.Element;
}
export default LeftSideMenuBarUpdated;
