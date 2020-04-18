import React, { Component } from 'react';

export default class Watches extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: props.UTC.id,
            name: props.UTC.name,
            UTC: Number(props.UTC.UTC),
            funcDel: props.funcDel,
            timeUTC: Date.now() + new Date().getTimezoneOffset() * 60 * 1000 + Number(props.UTC.UTC) * 3600 * 1000,
        };

    }

    componentDidMount() {
        setInterval(()=>{
            this.setState({timeUTC: Date.now() + new Date().getTimezoneOffset() * 60 * 1000 +this.state.UTC * 3600 * 1000})
        }, 1000);
    }

    clock = (data) => {
        const time = new Date(data.timeUTC);
        return (
            <div key={this.state.id}>
                <div>
                    {data.name}
                </div>
                <div>
                    {`${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()}`}
                </div>
                <form onSubmit={this.state.funcDel}>
                    <input name='del' type='hidden' value={this.state.id}/>
                    <button>Del</button>  
                </form>             
            </div>    
        );
    }

    render() {
        return (
            <div key={this.state.id}>
                {/* <button onClick={()=>{this.state.funcDel(this.state.id)}}>Del</button> */}
                {this.clock(this.state)}
            </div>
        )
    }
}
