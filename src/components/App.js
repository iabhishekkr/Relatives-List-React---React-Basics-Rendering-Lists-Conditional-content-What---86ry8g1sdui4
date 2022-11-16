import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return (
            <div id="main">
                {/* Do not remove the main div */}
                <ol key="relativeList">
                    <li key="relativeListItem1">Aditya</li>
                    <li key="relativeListItem2">Saurav</li>
                    <li key="relativeListItem3">Rahul</li>
                    <li key="relativeListItem4">Pradeep</li>
                </ol>
            </div>
        )
    }
}


export default App;
