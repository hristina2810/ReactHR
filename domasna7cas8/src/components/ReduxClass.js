import React from 'react';
import { connect } from 'react-redux';
import { driveCar,driveBus } from './../actions/DriveAction';

class ReduxClass extends React.Component {

componentDidMount() {
    this.props.getCar();
    this.props.getBus();
}
    render() {
        return(
            <div id="redux-clas">
                <h2>Redux Class Component: </h2>
                <p>{this.props.car}</p>
                <p>{this.props.bus}</p>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        car: state.DriveReducer.drive_car,
        bus: state.DriveReducer.drive_bus
        }
    }


const mapDispatchToProps = (dispatch) => {
    return{
        getCar: () => {
            dispatch(driveCar())
        },
        getBus: () => {
            dispatch(driveBus())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(ReduxClass)