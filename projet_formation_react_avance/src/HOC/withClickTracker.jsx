import React from "react";
function withClickTracker(WrappedComponent){
    return class extends React.Component {
        handleClick = () => {
            console.log('Clic détecté');
        }
        render() {
            return <WrappedComponent {...this.props} onClick={this.handleClick} />
        }
    }
}

export default withClickTracker;