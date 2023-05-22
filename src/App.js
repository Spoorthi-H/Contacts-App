import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './Contact/ContactApp'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route  path="/contact" component={ContactApp} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default App