import React, {Component} from 'react';
class ButtonHideShowDone extends Component {
    constructor(){
        super();
        this.varsState = {
            hide: {action: 'hide', label: 'Скрыть выполненные', nextState: 'show'},
            show: {action: 'show', label: 'Показать выполненные', nextState: 'hide'}
        }
        this.state = this.varsState.hide;
    }
    handleClick2=e=>{
        this.props.hideShowDone(this.state.action);
        const nextState = this.varsState[this.state.nextState];
        this.setState(nextState);
    }
    render() {
        const label = this.state.label;
        return (
            <button onClick={this.handleClick2}>{label}</button>
        );
    }
}
export default ButtonHideShowDone;