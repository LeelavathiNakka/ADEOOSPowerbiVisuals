import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
import DialogConstructorOptions = powerbiVisualsApi.extensibility.visual.DialogConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];
var LeftSideMenuBarUpdated4F3B1D4EC3AC4878BA83B09523149C97: IVisualPlugin = {
    name: 'LeftSideMenuBarUpdated4F3B1D4EC3AC4878BA83B09523149C97',
    displayName: 'LeftSideMenuBarUpdated',
    class: 'Visual',
    apiVersion: '5.3.0',
    create: (options?: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }
        throw 'Visual instance not found';
    },
    createModalDialog: (dialogId: string, options: DialogConstructorOptions, initialState: object) => {
        const dialogRegistry = (<any>globalThis).dialogRegistry;
        if (dialogId in dialogRegistry) {
            new dialogRegistry[dialogId](options, initialState);
        }
    },
    custom: true
};
if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["LeftSideMenuBarUpdated4F3B1D4EC3AC4878BA83B09523149C97"] = LeftSideMenuBarUpdated4F3B1D4EC3AC4878BA83B09523149C97;
}
export default LeftSideMenuBarUpdated4F3B1D4EC3AC4878BA83B09523149C97;