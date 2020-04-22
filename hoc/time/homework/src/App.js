import React, {useState} from 'react';
import './components/index.css';

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

function withLogger(Component) {
   
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                date: '',
            } 
            this.hour = 60 * 60 * 1000;
            this.day = 24 * 60 * 60 * 1000;
        }

        componentDidMount() {
            this.setState({date: this.difference()})
        }

        difference = () => {
            const difference = new Date() - new Date(this.props.date);
            
            if (difference <= this.hour)  return '12 минут назад'
            if (difference > this.hour && difference <= this.day) return '5 часов назад'
            if (difference > this.day) {
                const days = (difference / this.day).toFixed(0)
                return `${days} дней назад`
            }
        }

        render() {
            return <Component {...this.props} date={this.state.date} />;
        }
    }
}

const DateTimePretty = withLogger(DateTime)

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            // date: '2017-07-31 13:24:00'
            date: '2020-04-21 19:04:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}