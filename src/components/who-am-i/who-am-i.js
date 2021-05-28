import React from 'react';
import './who.scss';
class WhoAmI extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            years: 26
        }

        // bind
        // this.nextYear = this.nextYear.bind(this);
        // this.prevYear = this.prevYear.bind(this);

        // Method 2
        this.nextYear = () => {
            this.setState(state => ({
            years: ++state.years
            }))
        }

        this.prevYear = () => {
            this.setState(state => ({
            years: --state.years
            }))
        }

    }

    // method 3
    // nextYear = () => {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }

    //method 1
    // nextYear() {
    //     this.setState(state => ({
    //         years: ++state.years
    //     }))
    // }
    // prevYear(){
    //     this.setState(state =>({
    //         years: --state.years
    //     }))
    // }

    render(){
        const {name, surname, link} = this.props;
        const {years} = this.state;
        return(
            <>
            
            <h1 className="who-title">My name: {name}, surname: {surname}</h1>
            <button onClick={this.nextYear}>++</button>
            <button onClick={this.prevYear}>--</button>
            <h2>My age: {years} </h2>
            <a href={link}>My Profile</a>
            </>
        );
    }
}




export default WhoAmI;