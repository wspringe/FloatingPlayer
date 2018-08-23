import React, { Component } from 'React';

class SettingsPage extends Component {
  //handleSubmit = (data) => console.log
    render() {
        return(
          <div>

            <label for="frameless">Frameless Mode? </label>
            <input id="frameless" type="checkbox"></input>

            <h4>Record and start player in last place it closed?</h4>
            <input type="checkbox"></input>
            <h4>Show Menu Bar?</h4>
            <input type="checkbox"></input>
            <h4>Customize welcome message:</h4>
            <textarea placeholder="Enter custom message here..."></textarea>
            </div>
        )
    }
}

export default SettingsPage;