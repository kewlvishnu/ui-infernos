import React from 'react';
import axios from 'axios';

export default class Post extends React.Component {
    state = {
        authentication: false,
        secret: '',
        whitelistIP: false,
        whitelistIPlist: '',
        path: ''
    }

    handleAuthCheckBoxChange = event => {
        this.setState({authentication: event.target.value});
    }
    handleSecretChange = event => {
        this.setState({secret: event.target.value});
    }
    handleIpWhitelistingCheckBoxChange = event => {
        this.setState({whitelistIP: event.target.value});
    }
    handleIPWhiteListChange = event => {
        this.setState({whitelistIPlist: event.target.value});
    }
    handlePathChange = event => {
        this.setState({path: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.post(`https://app.infernos.io/tiller/v2/releases/${this.state.id}/json?purge=true`, {})
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Authentication Required <input type="checkbox" id="authcheckboxid" name="authcheckbox"
                                                          defaultChecked={this.state.authentication}
                                                          onChange={this.handleAuthCheckBoxChange}/></label><br/>
                    <label>Secret <input type="text" name="secret" onChange={this.handleSecretChange}/></label><br/>
                    <label>IP Whitelisting Required<input type="checkbox" id="ipwhitelistingcheckboxid"
                                                          name="ipwhitelistingcheckbox"
                                                          defaultChecked={this.state.whitelistIP}
                                                          onChange={this.handleIpWhitelistingCheckBoxChange}/></label><br/>
                    <label>List of IPs to be Whitelisted<input type="text" name="listOfIp"
                                                               onChange={this.handleIPWhiteListChange}/></label><br/>
                    <label>Path<input type="text" name="path" onChange={this.handlePathChange}/></label><br/>
                    <button type="submit">Post</button>
                </form>
            </div>
        )
    }
}
