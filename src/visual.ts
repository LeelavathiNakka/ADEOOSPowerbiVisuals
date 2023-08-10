/* eslint-disable @typescript-eslint/no-empty-function */
"use strict";
import powerbi from "powerbi-visuals-api";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./../style/visual.less";
//import {CogBoxData, FDIAcrossSectorsResults, initialState } from "./FDIAcrossSectorsResults";
//import {CogBoxData, IntelligentHubPortal, initialState } from "./IntelligentHubPortal";
//import {CogBoxData, TrafficSnarlsCard, initialState } from "./TrafficSnarlsCard";
//import {CogBoxData, LeftSideMenuBar, initialState } from "./LeftSideMenuBar";
import {CogBoxData, LeftSideMenuBarUpdated, initialState } from "./LeftSideMenuBarUpdated";

import IViewport = powerbi.IViewport;

//FDIAcrossSectorResults

// export class Visual implements IVisual {
//     private target: HTMLElement;
//     private reactRoot: React.ComponentElement<any, any>;

//     constructor(options: VisualConstructorOptions) {
//         this.reactRoot = React.createElement(FDIAcrossSectorsResults, {});
//         this.target = options.element;
//         ReactDOM.render(this.reactRoot, this.target);
//     }

//     public update(options: VisualUpdateOptions) {
//         if (options.dataViews && options.dataViews[0]) {
//             const dataView: DataView = options.dataViews[0];
//             const jsonData:CogBoxData[] = [
//                     {
//                        size:"29px",
//                        color:"yellow",
//                        value:90,
//                        padding:"15px",
//                        font:15
//                      },
//                      {
//                        size:"20px",
//                        color:"red",
//                        value:50,
//                        padding:"15px",
//                        font:15
//                      },
//                      {
//                        size:"14px",
//                        color:"yellow",
//                        value:40,
//                        padding:"15px",
//                        font:15
//                      },
//                      {
//                        size:"8px",
//                        color:"yellow",
//                        value:25,
//                        padding:"15px",
//                        font:15
//                      },
//                      {
//                        size:"0px",
//                        color:"yellow",
//                        value:18,
//                        padding:"10px",
//                        font:15
//                      }
//               ];
              
//               FDIAcrossSectorsResults.update({jsonData});
//         } else {
//             this.clear();
//         }
//     }
//     private clear() {
//         FDIAcrossSectorsResults.update(initialState);
//     }
// }


//IntelligentHubPortal

// export class Visual implements IVisual {
//     private target: HTMLElement;
//     private reactRoot: React.ComponentElement<any, any>;

//     constructor(options: VisualConstructorOptions) {
//         this.reactRoot = React.createElement(IntelligentHubPortal, {});
//         this.target = options.element;
//         ReactDOM.render(this.reactRoot, this.target);
//     }

//     public update(options: VisualUpdateOptions) {
//         if (options.dataViews && options.dataViews[0]) {
//             const dataView: DataView = options.dataViews[0];
            
//             const jsonData:CogBoxData[] = [
//                 {
//                     label: "What's Trending?",
//                     imgPath:
//                       'https://media.istockphoto.com/id/911404660/photo/rush-hour-traffic-in-downtown-beijing.jpg?s=1024x1024&w=is&k=20&c=CRe3ADO6j-TLvLYhbVHfy7g91SGDfv7wpJW4kCekli8=',
//                     subtext1:"The DOH launches ",
//                     subtext2:"``Mabrouk ma yak``",
//                     desc:"@DoHsocoal | Jan 2,2023",
//                     desc2:"Traffic Snarls in the Downtown area is impacting citizens.",
//                     desc3:"By Abeer Abu | February 10,2023",
//                     isImage:"yes",
//                     headerIcon:"arrow",
//                     display:"false",
//                     isIconAvailable:"true",
                    
//                   },
//                   {
//                     label: "Dashboards & Documents",
//                     imgPath:
//                       'https://media.istockphoto.com/id/159406920/photo/aerial-view-of-cars-in-traffic.jpg?s=612x612&w=0&k=20&c=2BeXnk1EppE_mfWgYFqoXidmge0uAhSk9gl8bbtHyF8=',
//                     subtext1:"The DOH launches ",
//                     subtext2:"``Mabrouk ma yak``",
//                     desc:"@DoHsocoal | Jan 2,2023",
//                     desc2:"",
//                     desc3:"",
//                     isImage:"yes",
//                     headerIcon:"file",
//                     display:"false",
//                     isIconAvailable:"false",
                    
//                   },
//                   {
//                     label: "Prompted Intelligence",
//                     imgPath:
//                       '',
//                     subtext1:"Economy: ",
//                     subtext2:"",
//                     desc:"There has been a 21% increase in GDP from the last financial year.",
//                     desc2:"",
//                     desc3:"",
//                     isImage:"no",
//                     headerIcon:"brainCircuit",
//                     display:"false",
//                     isIconAvailable:"false",
                    
//                   },
                  
//                 ];
                
//               IntelligentHubPortal.update({jsonData});
//         } else {
//             this.clear();
//         }
//     }
//     private clear() {
//         IntelligentHubPortal.update(initialState);
//     }
// }

// Traffic SnarlsCard

// export class Visual implements IVisual {
//     private target: HTMLElement;
//     private reactRoot: React.ComponentElement<any, any>;

//     constructor(options: VisualConstructorOptions) {
//         this.reactRoot = React.createElement(TrafficSnarlsCard, {});
//         this.target = options.element;
//         ReactDOM.render(this.reactRoot, this.target);
//     }

//     public update(options: VisualUpdateOptions) {
//         if (options.dataViews && options.dataViews[0]) {
//             const dataView: DataView = options.dataViews[0];
           
//                const index:number=0;
//               TrafficSnarlsCard.update({index});
//         } else {
//             this.clear();
//         }
//     }
//     private clear() {
//         TrafficSnarlsCard.update(initialState);
//     }
// }


//Left side menu bar
// export class Visual implements IVisual {
//     private target: HTMLElement;
//     private reactRoot: React.ComponentElement<any, any>;

//     constructor(options: VisualConstructorOptions) {
//         this.reactRoot = React.createElement(LeftSideMenuBar, {});
//         this.target = options.element;
//         ReactDOM.render(this.reactRoot, this.target);
//     }

//     public update(options: VisualUpdateOptions) {
//         if (options.dataViews && options.dataViews[0]) {
//             const dataView: DataView = options.dataViews[0];

//               const jsonData:boolean=false;
//               LeftSideMenuBar.update({jsonData});
//         } else {
//             this.clear();
//         }
//     }
//     private clear() {
//       LeftSideMenuBar.update(initialState);
//     }
// }



//Left side menu bar updated
export class Visual implements IVisual {
  private target: HTMLElement;
  private reactRoot: React.ComponentElement<any, any>;

  constructor(options: VisualConstructorOptions) {
      this.reactRoot = React.createElement(LeftSideMenuBarUpdated, {});
      this.target = options.element;
      ReactDOM.render(this.reactRoot, this.target);
  }

  public update(options: VisualUpdateOptions) {
      if (options.dataViews && options.dataViews[0]) {
          const dataView: DataView = options.dataViews[0];

            const jsonData:boolean=false;
            LeftSideMenuBarUpdated.update({jsonData});
      } else {
          this.clear();
      }
  }
  private clear() {
    LeftSideMenuBarUpdated.update(initialState);
  }
}


