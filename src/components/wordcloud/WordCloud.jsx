import React from "react";
import ReactWordcloud from 'react-wordcloud';

class WordCloud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            prevNumWords: undefined,
        }
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.data !== this.props.data) {
            this.setState({ prevNumWords: previousProps.data.length });
        }
    }

    render() {
        const options = {
            rotations: 2,
            rotationAngles: [0, 0],
          };
        const size = [1250, 500];
        
        if (this.props.data.length > 0) {
            return (
                <>
                    {
                        this.state.prevNumWords &&
                        <h3>Difference in Words From Previous Search: {this.props.data.length - this.state.prevNumWords }</h3>
                    }
                    <ReactWordcloud
                        options={options}
                        size={size}
                        words={this.props.data}
                    />
                </>
            );
        }

        return <div>No Search Performed</div>;
    }
}

export default WordCloud;