import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faFireFlameCurved, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {insightExplorer} from "./LeftSideMenuBarConstants";
import {topics} from "./LeftSideMenuBarConstants";
import {DeliveryPerformance} from "./LeftSideMenuBarConstants";
import {DirectionsICon} from "./LeftSideMenuBarConstants";
import {filesIcon} from "./LeftSideMenuBarConstants";
import {HotTopics} from "./LeftSideMenuBarConstants";
import {TrafficCongestion} from "./LeftSideMenuBarConstants";
import {WOGWorkForce} from "./LeftSideMenuBarConstants";
import {LoadMore} from "./LeftSideMenuBarConstants";
import {serviceEffectivenss} from "./LeftSideMenuBarConstants";
import {ServiceEffort} from "./LeftSideMenuBarConstants";

export interface CogBoxData {
    path: string;
    name:string;
    isOpen:boolean;
    }
export interface State {
    jsonData: boolean;
}
export const initialState: State = {
    jsonData: false
};
export class LeftSideMenuBar extends React.Component<object, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof LeftSideMenuBar.updateCallback === 'function') {
            LeftSideMenuBar.updateCallback(newState);
        }
    }
    public state: State = initialState;
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    public componentWillMount() {
        LeftSideMenuBar.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        LeftSideMenuBar.updateCallback = null;
    }
     
    renderMenu = () =>  {
        this.setState(({ jsonData }) => ({ jsonData: !jsonData }));
        
    }
    render() {
       const { jsonData } = this.state
     
        return (
            <div className="container">
           <div style={{width: jsonData ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                    <img src={insightExplorer} alt="insightsExplorerIcon"  width="25" height="30"/>
                   <span style={{display: jsonData? "block" : "none"}} className="logo">InsightsExplorer</span>
                   <div style={{marginLeft: jsonData ? "30px" : "0px"}} className="bars">
                       <FaBars onClick={this.renderMenu}/>
                   </div>
               </div>
               <div  className="link" >
                           <img src={topics} alt="TopicsIcon"  width="30" height="35"/>
                           <div style={{display: jsonData ? "block" : "none" }} className="link_text">Topics</div>
                           <FontAwesomeIcon icon={faMagnifyingGlass} className="magnifyingGlass" style={{display: "" }}/>
               </div>
               <div className="link" >
                          <img src={HotTopics} alt="insightsHotTopicsExplorerIcon"  width="30" height="35"/>
                           <div style={{display: jsonData ? "block" : "none" }} className="link_text">Hot Topics</div>
                           <FontAwesomeIcon icon={faFireFlameCurved} className="flameCurved" style={{display: "" }}/>
                           
               </div>
              
               <div  className="link" >
                           <img src={DeliveryPerformance} alt="DeliveryPerformanceIcon"  width="30" height="30"/>
                           <div style={{display:jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText' ><span>Delivery Performance</span></div></div>
              </div>
              <div  className="link" >
                            <div className='imageAligning'>
                           <img src={ServiceEffort} alt="ServiceEffort"  width="30" height="35"/>
                           </div>  
                           <div className='aligning'>
                           <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='StylingText' ><span>Service Effort</span></div></div>
                          
                          <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='StylingText' ><span>Capex Monitor</span></div></div>
                          </div>
                 </div>
                 <div  className="link" >
                           <img src={TrafficCongestion} alt="TrafficCOngestion"  width="30" height="35"/>
                           <div style={{display: jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText' ><span>Traffic Congestion</span></div></div>

                 </div>
                 <div  className="link" >
                           
                           <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='loadMoreStyle' >Load More</div></div>

                 </div>
                 <div  className="link" >
                      <div style={{display: jsonData ? "block" : "none"}} className='HotTopicsDiv'>
                      <span>Hot Topics </span>
                     <img src={DirectionsICon} alt="DirectionsIcon"  width="20" height="22"/>
                     </div>
                
                 </div>
                 <div className='horizontalLineStyle'><hr></hr></div>
                 <div className='spacingText'>
                 <div  className="link" >
                           <div style={{display:jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText2'><span>Aspiration Tracker</span></div></div>
                 </div>
                 <div  className="link" >
                          <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='StylingText2'><span>Foundational Strategy</span></div></div>
                 </div>
                 <div  className="link" >
                          <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='StylingText2'><span>Complaints</span></div></div>
                 </div>
                 <div  className="link" >
                          <div style={{display:jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText2'><span>Budget Monitor</span></div></div>
                 </div>
                 <div  className="link" >
                          <div style={{display: jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText2'><span>Delivery Effectiveness</span></div></div>
                 </div>
                 </div>
                 <div  className="link" >
                            
                           <img src={filesIcon} alt="FilesIcon"  width="35" height="105"/>
                            
                           <div className=''>
                           <div style={{display: jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText3' ><span>WoG WorkForce</span></div></div>
                           <div style={{display:jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText3' ><span>Service Effectiveness</span></div></div>
                          <div style={{display:jsonData ? "block" : "none"}} className="link_text">  <div className='StylingText3' ><span>Service Effort</span></div></div>
                          <div style={{display: jsonData ? "block" : "none" }} className="link_text">  <div className='loadMoreStyle2' ><span>Load More</span></div></div>

                          </div>
                 </div>
              
           </div>
       
        </div>
            
        )
    }
}

export default LeftSideMenuBar;