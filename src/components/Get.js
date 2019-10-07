import React from "react";
import axios from "axios"

class Get extends React.Component {

    state = {
        releaseName: "",
        statusCode : ""
    }
    componentDidMount() {
        axios.get(`https://app.infernos.io/tiller/v2/releases/testnet1/content/json?format_values_as_json=true`)
            .then(res => {
                const releaseName = res.data.release.name;
                const statusCode = res.data.release.info.status.code;
                this.setState({releaseName, statusCode});
            })
    }

    render() {
        return (
            <div>
                <h1>{this.state.releaseName}</h1>
                <h1>{this.state.statusCode}</h1>
            </div>

        );
    }
}

export default Get;
