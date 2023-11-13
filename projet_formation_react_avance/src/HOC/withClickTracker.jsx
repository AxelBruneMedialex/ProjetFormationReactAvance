import React from "react";
import {MonContexte} from "../Contexts/MonContexte";
function withClickTracker(WrappedComponent){
    return class extends React.Component {
        render() {
            return <MonContexte.Consumer>
                {
                    contexte => <WrappedComponent
                        {...this.props}
                        onClick={contexte.switchTheme}
                        theme={contexte.theme}
                    />
                }
            </MonContexte.Consumer>
        }
    }
}

export default withClickTracker;