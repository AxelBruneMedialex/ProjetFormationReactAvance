import React from "react";
function withClickTracker(WrappedComponent){
    return class extends React.Component {
        state={
            theme: 'light'
        }
        handleClick = () => {
            this.setState({theme: this.state.theme === 'light' ? 'dark' : 'light'});
        }

        render() {
            return <WrappedComponent
                {...this.props}
                onClick={this.handleClick}
                theme={this.state.theme}
            />
        }
    }
}

export default withClickTracker;