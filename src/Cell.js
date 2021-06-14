import React, { Component } from 'react'

export class Cell extends Component {
    constructor(props){
        super()

        this.state = {
            color: props.value
        }
    }

    activate = () => {
        this.setState({
            color: '#333'
        })
    }


    render() {
        return (
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.activate}>
                
            </div>
        )
    }
}

export default Cell
