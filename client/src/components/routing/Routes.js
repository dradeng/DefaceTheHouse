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

import jan_31_21_76ersPacers from '../picks/nba/2020/Jan_31_21_76ersPacers';
import jan_31_21_CavaliersTimberwolves from '../picks/nba/2020/Jan_31_21_CavaliersTimberwolves';
import jan_31_21_ClippersKnicks from '../picks/nba/2020/Jan_31_21_ClippersKnicks';
import jan_31_21_JazzNuggets from '../picks/nba/2020/Jan_31_21_JazzNuggets';
import jan_31_21_MagicRaptors from '../picks/nba/2020/Jan_31_21_MagicRaptors';
import jan_31_21_NetsWizards from '../picks/nba/2020/Jan_31_21_NetsWizards';

import feb_1_21_GrizzliesSpurs from '../picks/nba/2020/feb_1_21_GrizzliesSpurs';
import feb_1_21_HornetsHeat from '../picks/nba/2020/feb_1_21_HornetsHeat';
import feb_1_21_KingsPelicans from '../picks/nba/2020/feb_1_21_KingsPelicans';
import feb_1_21_KnicksBulls from '../picks/nba/2020/feb_1_21_KnicksBulls';
import feb_1_21_LakersHawks from '../picks/nba/2020/feb_1_21_LakersHawks';
import feb_1_21_PistonsNuggets from '../picks/nba/2020/feb_1_21_PistonsNuggets';
import feb_1_21_RocketsThunder from '../picks/nba/2020/feb_1_21_RocketsThunder';
import feb_1_21_SunsMavericks from '../picks/nba/2020/feb_1_21_SunsMavericks';
import feb_1_21_TimberwolvesCavaliers from '../picks/nba/2020/feb_1_21_TimberwolvesCavaliers';
import feb_1_21_TrailBlazersBucks from '../picks/nba/2020/feb_1_21_TrailBlazersBucks';


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
        <Route exact path="/jan_31_21_76ersPacers" component={jan_31_21_76ersPacers} />
        <Route exact path="/jan_31_21_CavaliersTimberwolves" component={jan_31_21_CavaliersTimberwolves} />
        <Route exact path="/jan_31_21_ClippersKnicks" component={jan_31_21_ClippersKnicks} />
        <Route exact path="/jan_31_21_JazzNuggets" component={jan_31_21_JazzNuggets} />
        <Route exact path="/jan_31_21_MagicRaptors" component={jan_31_21_MagicRaptors} />
        <Route exact path="/jan_31_21_NetsWizards" component={jan_31_21_NetsWizards} />

        <Route exact path="/feb_1_21_GrizzliesSpurs" component={feb_1_21_GrizzliesSpurs} />
        <Route exact path="/feb_1_21_HornetsHeat" component={feb_1_21_HornetsHeat} />
        <Route exact path="/feb_1_21_KingsPelicans" component={feb_1_21_KingsPelicans} />
        <Route exact path="/feb_1_21_KnicksBulls" component={feb_1_21_KnicksBulls} />
        <Route exact path="/feb_1_21_LakersHawks" component={feb_1_21_LakersHawks} />
        <Route exact path="/feb_1_21_PistonsNuggets" component={feb_1_21_PistonsNuggets} />
        <Route exact path="/feb_1_21_RocketsThunder" component={feb_1_21_RocketsThunder} />
        <Route exact path="/feb_1_21_SunsMavericks" component={feb_1_21_SunsMavericks} />
        <Route exact path="/feb_1_21_TimberwolvesCavaliers" component={feb_1_21_TimberwolvesCavaliers} />
        <Route exact path="/feb_1_21_TrailBlazersBucks" component={feb_1_21_TrailBlazersBucks} />

        <Route exact path="/" component={SuperBowl}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
