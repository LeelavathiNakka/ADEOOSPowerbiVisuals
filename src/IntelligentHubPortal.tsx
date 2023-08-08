import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faArrowTrendUp, faB, faBrain,  faDollarSign, faFile, faUpRightFromSquare, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
//import robotIcon from './images/robotIcon';
import styled from "styled-components";
import {robotIcon} from "./constants";
import {trafficCard} from "./TrafficCardConstants";

export interface CogBoxData {
    label: string;
    imgPath:string;
    c: string;
    desc:string;
    desc2:string;
    desc3:string;
    isImage:string;
    headerIcon:string;
    display:string,
    isIconAvailable:string
}
export interface State {
    jsonData: CogBoxData[];
}
export const initialState: State = {
    jsonData: []
};
export class IntelligentHubPortal extends React.Component<object, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof IntelligentHubPortal.updateCallback === 'function') {
            IntelligentHubPortal.updateCallback(newState);
        }
    }
    public state: State = initialState;
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    public componentWillMount() {
        IntelligentHubPortal.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        IntelligentHubPortal.updateCallback = null;
    }

    render() {
        const { jsonData } = this.state
        
        return (
            <div className='IHRoot'>
                <div className='IHTitle'>
                 <img src={robotIcon} alt="robot"  width="40" height="45"/>
                 <span>Intelligence Hub</span>
                 </div>
                 {
                    jsonData.map((item, index) => (
        <Accordion  sx={{ width: '100%',height:'10%',position:"relative",left:"0px", color:"aliceblue", fontSize:"small",backgroundColor:"rgba(33,45,79,255)"}} className=''>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className='expandMoreIcon'/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header" >
        
          <Typography sx={{ width: '100%', flexShrink: 0 ,color: "aliceblue", fontSize:"small",fontFamily:"sans-serif",display:"flex"}}>
           {item.headerIcon==='arrow'?<FontAwesomeIcon icon={faArrowTrendUp} className="arrowTrendUp"/>:<></>} 
           {item.headerIcon==='file'?<FontAwesomeIcon icon={faFile} className="file"/>:<></>}
           {item.headerIcon==='brainCircuit'?<FontAwesomeIcon icon={faBrain} className="file" />:<></>}
           <span className='Header'>{item.label}</span> 
            {item.headerIcon==='file'?<FontAwesomeIcon icon={faUpRightFromSquare} className="upRightFromSquare"/>:<></>} 
            {item.headerIcon==='brainCircuit'?<FontAwesomeIcon icon={faUpRightFromSquare} className="upRightFromSquare2"/>:<></>} 
		</Typography>
       </AccordionSummary>
        <AccordionDetails  sx={{  backgroundColor: "rgba(33,38,79,255)"}}>
        <Typography  sx={{ width: '100%', flexShrink: 0,display:'flex',fontSize:"small",height:"100%" }}>
         {item.isImage==='no'?<span className='subText'>Here is something else that might Interest you..</span>:<></>}
         </Typography >

          <Typography  sx={{ width: '100%', flexShrink: 0,display:'flex',fontSize:"small",height:"100%" }}>
         
          <span className="myimg">{item.isImage==='yes'?<img  src={trafficCard} alt="image"  width="100px;" height="70px;" />:<FontAwesomeIcon icon={faDollarSign} className="icon"/>}</span>
           {item.isImage==='no'?
               <Typography >

               <span className='desc3'>Economy:</span>
               <span  className="desc">{item.desc}</span>
               </Typography>
               : 
               <Typography sx={{ width: '60%', padding:"5px" ,display:"grid",fontSize:"100%",height:"100%",}}>
                  <span  >{item.c}</span> 
                  <span  className="desc">{item.desc}</span>
                </Typography>
             } 
          </Typography>
          <Typography sx={{ width: '100%', flexShrink: 0 ,fontSize:"small" ,display:"flex",height:"100%"}} >
          {item.headerIcon==='arrow'?<FontAwesomeIcon icon={faB} className="bIcon"/>:<></>}
              <Typography className='' sx={{  padding:"5px" ,display:"grid"}}>
              <span className='desc2'>{item.desc2}</span>
              <span  className="desc">{item.desc3}</span> 
           </Typography>
           </Typography>
        </AccordionDetails>

        <AccordionDetails  sx={{  backgroundColor: "rgba(33,38,79,255)"}}>
          <Typography  sx={{ width: '100%', flexShrink: 0,display:'flex',fontSize:"small",height:"100%" }}>
          <span className="myimg">{item.isImage==='yes'?<img  src={trafficCard} alt="image"  width="100px;" height="70px;" />:<FontAwesomeIcon icon={faUserCircle} className="icon"/>}</span>
          {item.isImage==='no'?
               <Typography >
               <span className='desc3'>Economy:</span>
               <span  className="desc">{item.desc}</span>
               </Typography>
               : 
               <Typography sx={{ width: '60%', padding:"5px" ,display:"grid",fontSize:"100%",height:"100%",}}>
                  <span  >{item.c}</span> 
                  <span  className="desc">{item.desc}</span>
                  </Typography>
            }
          </Typography>
          <Typography sx={{ width: '100%', flexShrink: 0 ,fontSize:"small" ,display:"flex",height:"100%"}} >
          {item.headerIcon==='arrow'?<FontAwesomeIcon icon={faB} className="bIcon"/>:<></>}
              <Typography className='' sx={{  padding:"5px" ,display:"grid"}}>
              <span className='desc2'>{item.desc2}</span>
              <span  className="desc">{item.desc3}</span> 
           </Typography>
           </Typography>
        </AccordionDetails> 

        <AccordionDetails  sx={{  backgroundColor: "rgba(33,38,79,255)" }}>
          <Typography  sx={{ width: '100%', flexShrink: 0,display:'flex',fontSize:"small",height:"100%" }}>
          <span className="myimg">{item.isImage==='yes'?<img  src={trafficCard} alt="image"  width="100px;" height="70px;" />:<FontAwesomeIcon icon={faDollarSign} className="icon"/>}</span>
          {item.isImage==='no'?
               <Typography >
               <span className='desc3'>Economy:</span>
               <span  className="desc">{item.desc}</span>
               </Typography>
               : 
               <Typography sx={{ width: '60%', padding:"5px" ,display:"grid",fontSize:"100%",height:"100%",}}>
               {false?<FontAwesomeIcon icon={faB} className="icon"/>:<></>}
                  <span  >{item.c}</span> 
                  <span className="desc">{item.desc}</span>
                </Typography>
            } 
          </Typography>
          <Typography sx={{ width: '100%', flexShrink: 0 ,fontSize:"small" ,display:"flex",height:"100%"}} >
          {item.headerIcon==='arrow'?<FontAwesomeIcon icon={faB} className="bIcon"/>:<></>}
           <Typography className='' sx={{  padding:"5px" ,display:"grid"}}>
              <span className='desc2'>{item.desc2}</span>
              <span  className="desc">{item.desc3}</span> 
           </Typography>
           </Typography>
        </AccordionDetails> 
        
      </Accordion>
                    ))
                }
        </div>
            
        )
    }
}

export default IntelligentHubPortal;