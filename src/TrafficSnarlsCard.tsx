import React from 'react';
import Typography from "@material-ui/core/Typography"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {  faHamburger, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CardMedia from '@material-ui/core/CardMedia';
import {trafficCard} from "./TrafficCardConstants";
import {trafficCard2} from "./TrafficCardConstants";
import {trafficCard3} from "./TrafficCardConstants";
export interface CogBoxData {
    label: string;
    imgPath:string;
    c: string;
    desc:string;
}
export interface State {
    index: number
}
export const initialState: State = {
    index: 0
};
export class TrafficSnarlsCard extends React.Component<object, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof TrafficSnarlsCard.updateCallback === 'function') {
            TrafficSnarlsCard.updateCallback(newState);
        }
    }
    public state: State = initialState;
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    public componentWillMount() {
        TrafficSnarlsCard.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        TrafficSnarlsCard.updateCallback = null;
    }
    public static content:any=trafficCard;
    onArrowClick = () =>  {
        const increment = 1;
        const data=[trafficCard,trafficCard2,trafficCard3];
        const dataLength=data.length;
        const newIndex = (this.state.index + increment + dataLength) % dataLength;
        this.setState(({ index }) => ({ index: newIndex }));
         TrafficSnarlsCard.content=data[this.state.index];
    }
    render() {
        
        return (
            <div className='trafficCardRoot'>
                <div className='text'>
                     <Typography className='title' >
                        <Typography className='hamburger' >
                        <FontAwesomeIcon icon={faHamburger} />
                        </Typography>
                            Traffic Snarls in the Downtown area is impacting Citizens
                     <Typography className='iconRight' ><FontAwesomeIcon icon={faShareAlt} /></Typography>
                    </Typography>
                    <Typography className='subtitle' >
                    <span>By Abeer Abu  Omar</span>
                    </Typography>
                    <Typography  className='timestamp' >
                    <h5>Al Fajr</h5><div className=''>|</div>
                    <Typography className='date'><h5>&nbsp;March 3,2023</h5></Typography>
                    </Typography>
                     <Typography className='leftArrow'>
                    <FaChevronLeft onClick={this.onArrowClick}/>
                    </Typography>
                    <Typography className='rightArrow'>
                    <FaChevronRight onClick={this.onArrowClick}/>
                    </Typography>
                    </div>
                    <div className='image'>
                        <CardMedia  className='media' image={TrafficSnarlsCard.content} title="trafficImages"/>
                    </div>
             </div>

        )
    }
}

export default TrafficSnarlsCard;