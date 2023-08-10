import * as React from "react";
export interface State {
    textValue: string;
    size: number;
}
export declare const initialState: State;
export declare class FDIAcrossSectors extends React.Component<object, State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    constructor(props: any);
    componentWillMount(): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
export default FDIAcrossSectors;
