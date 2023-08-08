import { faLeaf, faLightbulb, faMapLocationDot, faShareAlt, faStopwatch, faTruckMoving } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "@mui/material";
import * as React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
export interface State {
    textValue: string,
    size: number
}
export const initialState: State = {
    textValue: "",
    size: 200
}
export class FDIAcrossSectors extends React.Component<object, State>{
    private static updateCallback: (data: object) => void = null;

    public static update(newState: State) {
        if (typeof FDIAcrossSectors.updateCallback === 'function') {
            FDIAcrossSectors.updateCallback(newState);
        }
    }
    public state: State = initialState;
    constructor(props: any) {
        super(props);
        this.state = initialState;
    }
    public componentWillMount() {
        FDIAcrossSectors.updateCallback = (newState: State): void => { this.setState(newState); };
    }
    public componentWillUnmount() {
        FDIAcrossSectors.updateCallback = null;
    }

    render() {
        const { textValue } = this.state;
        return (
            <div >
           <Card className='card'>
            <CardActionArea >
             <CardContent >
             <Typography className='title' >
                <Typography >FDI ACROSS SECTORS</Typography>
                <Typography className='iconRight' ><FontAwesomeIcon icon={faShareAlt} /></Typography>
             </Typography>
             
              <Typography className='labels'>
                <Typography  >
                <FontAwesomeIcon icon={faLeaf} />
                </Typography>
                <Typography className='text'>Green Technology</Typography>
                <Typography className='icon2'>
                <FontAwesomeIcon icon={faTruckMoving} />
                </Typography>
                <Typography className='text2'>Mobility & Logistics</Typography>
                <Typography className='icon3' >
                <FontAwesomeIcon icon={faMapLocationDot} />
                </Typography>
                <Typography className='text3'>Culture & Tourism</Typography>
                <Typography className='icon4' >
                <FontAwesomeIcon icon={faStopwatch} />
                </Typography>
                <Typography className='text4'>Health & Wellbeing</Typography>
                <Typography className='icon5' >
                <FontAwesomeIcon icon={faLightbulb} />
                </Typography>
                <Typography className='text5'>Human Capital & Innovation</Typography>
             </Typography>
             </CardContent>
             </CardActionArea>
           </Card>
         </div>
        )
    }
}

export default FDIAcrossSectors;