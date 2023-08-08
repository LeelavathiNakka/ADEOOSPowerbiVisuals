import * as React from "react";
export interface CogBoxData {
    size: string;
    color: string;
    value: number;
    padding: string;
    font: number;
}
export interface State {
    jsonData: CogBoxData[];
}
export declare const initialState: State;
export declare class FDIAcrossSectorsResults extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default FDIAcrossSectorsResults;
