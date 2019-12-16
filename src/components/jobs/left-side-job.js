import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

let jobs = [
    {
      checked: false,
      jobCategory: 'Software development 0 (173)',
      id: 1
    },
    {
      checked: true,
      jobCategory: 'Software development 1 (173)',
      id: 2
    },
    {
      checked: false,
      jobCategory: 'Software development 2 (173)',
      id: 3
    },
    {
      checked: false,
      jobCategory: 'Software development 3 (173)',
      id: 4
    },
  ]

class LeftSideJob extends React.Component {
    constructor() {
        super();
        this.state = {jobs};

    }

    handleChange(id) {
        this.state.jobs.map((item, i) => {
            if (item.id === id) {
                this.setState(state => {item.checked = !item.checked})
            }
        })
    }

    render() {

        let elements = this.state.jobs.map((item) => {
            return (
                <div key={item.id}>
                    <Checkbox 
                        checked={item.checked}
                        onChange={this.handleChange.bind(this, item.id)}
                         />
                    <span>{ item.jobCategory}</span><br />
                </div>
            )
        })
        return (
            <span>
                { elements }
            </span>
           
        )

    }
}

export default LeftSideJob;