import React, { Component } from 'react'

export default class ExpsItem extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">{this.props.name}</h3>
                  <div className="subheading mb-3">{this.props.title}</div>
                  <p>{this.props.details}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">{this.props.time}</span>
                </div>
              </div>
            </div>
        )
    }
}

