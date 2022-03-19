import React from 'react';
import './PageInput.css';
import { mockRawData, submitMessage } from '../../services/search/search.service';

class PageInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: undefined,
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    } 

    onSubmit() {
        submitMessage(this.state.message);
    }

    render() {
      return (
        <div class="input-group mb-3">
            <input type="text" onChange={this.handleChange} value={this.state.url} class="form-control" placeholder="message" aria-label="message" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" onClick={this.onSubmit}>Submit</button>
            </div>
        </div>
      );
    }
}

export default PageInput;
