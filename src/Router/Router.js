import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import Roles from '../Roles/Roles'
import Home from '../Home/Home'
import Candidates from '../Candidates/Candidates'
import Newcandidates from '../Candidates/Newcandidates/Newcandidates'
import RootComponent from '../RootComponent/RootComponent'
import Templates from '../Templates/Templates'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// Some doucumentation: https://reactjsexample.com/react-side-nav-component/
// https://github.com/trendmicro-frontend/react-sidenav

const Routers = () => {

    const styles = {
        background: 'royalblue',
        height: '100vh',
        position: 'fixed'
    }

    return (<Router>
        <Route render={({ location, history }) => (
            <React.Fragment>
                <SideNav style={styles}
                    onSelect={(selected) => {
                        const to = '/' + selected;
                        if (location.pathname !== to) {
                            history.push(to);
                        }
                    }}
                >
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Home
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="roles">
                            <NavIcon>
                                <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Roles 
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="candidates">
                            <NavIcon>
                                <i className="fa fa-fw fa-black-tie" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Candidates
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="templates">
                            <NavIcon>
                                <i className="fa fa-fw fa-sticky-note" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Templates
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="profile">
                            <NavIcon>
                                <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                Profile
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
                <main>
                    <Route path="/" exact component={props => <RootComponent />} />
                    <Route path="/home" component={props => <Home />} />
                    <Route path="/roles" component={props => <Roles />} />
                    <Route path="/templates" component={props => <Templates />} />
                    <Route path="/candidates" component={props => <Candidates />} />
                    <Route path="/newcandidates" component={props => <Newcandidates />} />
                </main>
            </React.Fragment>
        )}
        />
    </Router>  );
}
 
export default Routers;