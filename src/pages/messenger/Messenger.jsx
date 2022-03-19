import React from 'react';
import './Messenger.css';
import PageInput from '../../components/pageinput/PageInput';

class Messenger extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <section>
            <h1>Messenger</h1>
            <PageInput/>
        </section>
      );
    }
}

export default Messenger;
