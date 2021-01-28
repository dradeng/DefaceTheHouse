import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from '../layout/Alert';
import Dashboard from '../dashboard/Dashboard';
import NotFound from '../layout/NotFound';
import PrivateRoute from '../routing/PrivateRoute';
import SuperBowl from '../picks/nfl/2020/KC_TB_2_7_2020';
import NCAAFHome from '../picks/ncaaf/NCAAFHome';
import MLBHome from '../picks/mlb/MLBHome';
import NHLHome from '../picks/nhl/NHLHome';
import NBAHome from '../picks/nba/NBAHome';
import AboutUs from '../layout/AboutUs';
import TopSportsbooks from '../layout/TopSportsbooks';
import SportsbookReviews from '../layout/SportsbookReviews';
import ComputerModel from '../layout/ComputerModel';


const Routes = props => {
  return (
    <section className="container">
      <Alert />
      <Switch>
        <Route exact path="/nfl" component={SuperBowl} />
        <Route exact path="/ncaaf" component={NCAAFHome} />
        <Route exact path="/mlb" component={MLBHome} />
        <Route exact path="/nba" component={NBAHome} />
        <Route exact path="/nhl" component={NHLHome} />
        <Route exact path="/about-us" component={AboutUs} />
        <Route exact path="/computer-model" component={ComputerModel} />
        <Route exact path="/top-sportsbooks" component={TopSportsbooks} />
        <Route exact path="/sportsbook-reviews" component={SportsbookReviews} />
        <Route exact path="/" component={SuperBowl}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
