import React from 'react';
import './App.css';

export default class App extends React.Component {
    state = {
        count: 0,
        isCounting: false, //идет ли счет
    };

    handleStart = () => {
        this.setState({isCounting: true});
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count + 1});
        }, 1000);
    };

    handleStop = () => {
        this.setState({isCounting: false});
        clearInterval(this.timerId)
    };

    handleReset = () => {
        this.setState({isCounting: false, count: 0});
        clearInterval(this.timerId);
    };

    componentDidMount() {
    // Берем сохраненное значение из localStorage браузера
        const userCount = localStorage.getItem('timer');
        if (userCount) {
            this.setState({count: +userCount}); //+ превращает строку в число
        }
    }

    componentDidUpdate() {
// Сохраняем текущее значение счетчика в localStorage
        localStorage.setItem('timer', this.state.count) //установи значение (ключ, с каким значением)
    }

    componentWillUnmount() {
// Отключает счётчик при выходе со страницы
        clearInterval(this.timerId)
    }

    render() {
        return (
            <div className="App">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}