import React, { Component } from 'react';

export default class Watches extends Component {
    constructor (props) {
        super(props);
        this.state = {
            UTC: Number(this.props.UTC.UTC),
            timeUTC: this.getTimeUTC(),
        };

    }

    getTimeUTC = () => {
        return Date.now() + new Date().getTimezoneOffset() * 60 * 1000 + Number(this.props.UTC.UTC) * 3600 * 1000
    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({timeUTC: this.getTimeUTC()})
        }, 1000);
    }

    clock = (data) => {
        const time = new Date(data.timeUTC);
        return (
            <div key={this.props.UTC.id}>
                <div className='Watches-element Watches-name'>
                    {this.props.UTC.name}
                </div>
                <div className='Watches-timer Watches-element'>
                    {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
                </div>
                <form onSubmit={this.props.onDelete}>
                    <input name='del' type='hidden' value={this.props.UTC.id}/>
                    <button>Del</button>  
                </form>             
            </div>    
        );
    }

    render() {
        return (
            <div className='Watches-box' key={this.props.UTC.id}>
                {this.clock(this.state)}
            </div>
        )
    }
}
