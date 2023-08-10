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
import {TitleIcon1} from "./LeftSideMenuBarUpdatedConstants";
import {TitleIcon2} from "./LeftSideMenuBarUpdatedConstants";
import {subtitleIcon1} from "./LeftSideMenuBarUpdatedConstants";
import {subtitleIcon2} from "./LeftSideMenuBarUpdatedConstants";
import {subtitleIcon3} from "./LeftSideMenuBarUpdatedConstants";
import {subtitleIcon4} from "./LeftSideMenuBarUpdatedConstants";
import {subtitleIcon5} from "./LeftSideMenuBarUpdatedConstants";
import {flameCurvedIcon} from "./LeftSideMenuBarUpdatedConstants";
import {DirectionsICon} from "./LeftSideMenuBarUpdatedConstants";

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
export class LeftSideMenuBarUpdated extends React.Component<object, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof LeftSideMenuBarUpdated.updateCallback === 'function') {
            LeftSideMenuBarUpdated.updateCallback(newState);
        }
    }
    public state: State = initialState;
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    public componentWillMount() {
        LeftSideMenuBarUpdated.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        LeftSideMenuBarUpdated.updateCallback = null;
    }
     
    renderMenu = () =>  {
        this.setState(({ jsonData }) => ({ jsonData: !jsonData }));
        
    }
    render() {
       const { jsonData } = this.state
     
        return (
        <div className="container">
           <div style={{width: ""}} className="sidebar">
               <div className="top_section">
                   <img src={TitleIcon1} alt="titleIcon1"  width="30" height="35"/>
                   <span className="titleText">INSIGHTS EXPLORER</span>
                   <img src={TitleIcon2} alt="titleIcon2"  width="30" height="35"/>
                </div>
               <div  className="TopicsDiv" >
                           <img src={subtitleIcon1} alt="TopicsIcon" className="topicsIcon" width="30" height="35"/>
                           <div className='topicsIcons'>
                           <img src={subtitleIcon2} alt="titleIcon2"  width="25" height="30"/>
                           <img src={subtitleIcon3} alt="titleIcon2"  width="25" height="30"/>
                           <img src={subtitleIcon4} alt="titleIcon2"  width="25" height="30"/>
                           <img src={subtitleIcon5} alt="titleIcon2"  width="25" height="30"/>
                           </div>
                </div>
               <div>
                <span className='topicsText'>TOPICS</span>
               </div>
                <div className="hotTopicsTitle" >
                           <div style={{display: "" }} className="hotTopicsText">Hot Topics</div>
                           <img src={flameCurvedIcon} alt="flameCurvedIcon" className='flameCurvedIcon' width="25" height="30"/>
                           
               </div>
               <div className='horizontalLineStyle'><hr></hr></div>
               <div  className="hotTopicsText1" >
                             <div className='buttonText' ><span>Delivery Performance</span></div>
                            <div className='buttonText' ><span>Capex Monitor</span></div>
                </div>
                
                 <div  className="hotTopicsText1" >
                           <div className='buttonText' ><span>Service Effort</span></div>
                           <div className='buttonText' ><span>Traffic Congestion</span></div>
                </div>
                <div className='loadMoreStyle' >Load more..</div>
                <div className="prioritiesDiv" >
                          <span className='prioritiesText'>Priorities</span>
                         <img src={DirectionsICon} alt="DirectionIcon" className='directionsIcon' width="25" height="30"/>
                </div> 
                <div className='horizontalLineStyle'><hr></hr></div>

             <div className="" >
                <div className='priorityButtons' ><span>Aspiration Tracker</span></div>
                <div className='priorityButtons' ><span>Foundational Strategy</span></div>
                <div className='priorityButtons' ><span>Complaints</span></div>
                <div className='priorityButtons' ><span>Budget Monitor </span></div>
                <div className='priorityButtons' ><span>Delivery Effectiveness</span></div>
                <div className='priorityButtons' ><span>WoG WorkForce</span></div></div>
                <div className='priorityButtons' ><span>Service Effectiveness</span></div>
                <div className='priorityButtons' ><span>Service Effort</span></div>
                <div className='loadMoreStyle' >Load more..</div>
            </div> 
            
            
             </div> 
         
            
        )
    }
}

export default LeftSideMenuBarUpdated;