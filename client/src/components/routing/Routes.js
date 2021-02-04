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

import jan_31_21_76ersPacers from '../picks/nba/2020/jan/Jan_31_21_76ersPacers';
import jan_31_21_CavaliersTimberwolves from '../picks/nba/2020/jan/Jan_31_21_CavaliersTimberwolves';
import jan_31_21_ClippersKnicks from '../picks/nba/2020/jan/Jan_31_21_ClippersKnicks';
import jan_31_21_JazzNuggets from '../picks/nba/2020/jan/Jan_31_21_JazzNuggets';
import jan_31_21_MagicRaptors from '../picks/nba/2020/jan/Jan_31_21_MagicRaptors';
import jan_31_21_NetsWizards from '../picks/nba/2020/jan/Jan_31_21_NetsWizards';

import feb_1_21_HornetsHeat from '../picks/nba/2020/feb/Feb_1_21_HornetsHeat';
import feb_1_21_KingsPelicans from '../picks/nba/2020/feb/Feb_1_21_KingsPelicans';
import feb_1_21_KnicksBulls from '../picks/nba/2020/feb/Feb_1_21_KnicksBulls';
import feb_1_21_LakersHawks from '../picks/nba/2020/feb/Feb_1_21_LakersHawks'
import feb_1_21_RocketsThunder from '../picks/nba/2020/feb/Feb_1_21_RocketsThunder';
import feb_1_21_TimberwolvesCavaliers from '../picks/nba/2020/feb/Feb_1_21_TimberwolvesCavaliers';

import feb_2_21_CelticsWarriors from '../picks/nba/2020/feb/Feb_2_21_CelticsWarriors';
import feb_2_21_ClippersNets from '../picks/nba/2020/feb/Feb_2_21_ClippersNets';
import feb_2_21_GrizzliesPacers from '../picks/nba/2020/feb/Feb_2_21_GrizzliesPacers';
import feb_2_21_PistonsJazz from '../picks/nba/2020/feb/Feb_2_21_PistonsJazz';
import feb_2_21_RaptorsMagic from '../picks/nba/2020/feb/Feb_2_21_RaptorsMagic';
import feb_2_21_TrailBlazersWizards from '../picks/nba/2020/feb/Feb_2_21_TrailBlazersWizards';

import feb_3_21_76ersHornets from '../picks/nba/2020/feb/Feb_3_21_76ersHornets';
import feb_3_21_CelticsKings from '../picks/nba/2020/feb/Feb_3_21_CelticsKings';
import feb_3_21_ClippersCavaliers from '../picks/nba/2020/feb/Feb_3_21_ClippersCavaliers';
import feb_3_21_KnicksBulls from '../picks/nba/2020/feb/Feb_3_21_KnicksBulls';
import feb_3_21_MavericksHawks from '../picks/nba/2020/feb/Feb_3_21_MavericksHawks';
import feb_3_21_PacersBucks from '../picks/nba/2020/feb/Feb_3_21_PacersBucks';
import feb_3_21_RocketsThunder from '../picks/nba/2020/feb/Feb_3_21_RocketsThunder';
import feb_3_21_SunsPelicans from '../picks/nba/2020/feb/Feb_3_21_SunsPelicans';
import feb_3_21_TimberwolvesSpurs from '../picks/nba/2020/feb/Feb_3_21_TimberwolvesSpurs';
import feb_3_21_WizardsHeat from '../picks/nba/2020/feb/Feb_3_21_WizardsHeat';

import feb_4_21_JazzHawks from '../picks/nba/2020/feb/Feb_4_21_JazzHawks';
import feb_4_21_NuggetsLakers from '../picks/nba/2020/feb/Feb_4_21_NuggetsLakers';
import feb_4_21_TrailBlazers76ers from '../picks/nba/2020/feb/Feb_4_21_TrailBlazers76ers';
import feb_4_21_WarriorsMavericks from '../picks/nba/2020/feb/Feb_4_21_WarriorsMavericks';
import feb_4_21_RocketsGrizzlies from '../picks/nba/2020/feb/Feb_4_21_RocketsGrizzlies';


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

        <Route exact path="/feb_1_21_HornetsHeat" component={feb_1_21_HornetsHeat} />
        <Route exact path="/feb_1_21_KingsPelicans" component={feb_1_21_KingsPelicans} />
        <Route exact path="/feb_1_21_KnicksBulls" component={feb_1_21_KnicksBulls} />
        <Route exact path="/feb_1_21_LakersHawks" component={feb_1_21_LakersHawks} />
        <Route exact path="/feb_1_21_RocketsThunder" component={feb_1_21_RocketsThunder} />
        <Route exact path="/feb_1_21_TimberwolvesCavaliers" component={feb_1_21_TimberwolvesCavaliers} />

        <Route exact path="/feb_2_21_CelticsWarriors" component={feb_2_21_CelticsWarriors} />
        <Route exact path="/feb_2_21_ClippersNets" component={feb_2_21_ClippersNets} />
        <Route exact path="/feb_2_21_GrizzliesPacers" component={feb_2_21_GrizzliesPacers} />
        <Route exact path="/feb_2_21_PistonsJazz" component={feb_2_21_PistonsJazz} />
        <Route exact path="/feb_2_21_RaptorsMagic" component={feb_2_21_RaptorsMagic} />
        <Route exact path="/feb_2_21_TrailBlazersWizards" component={feb_2_21_TrailBlazersWizards} />

        <Route exact path="/feb_3_21_76ersHornets" component={feb_3_21_76ersHornets} />
        <Route exact path="/feb_3_21_CelticsKings" component={feb_3_21_CelticsKings} />
        <Route exact path="/feb_3_21_ClippersCavaliers" component={feb_3_21_ClippersCavaliers} />
        <Route exact path="/feb_3_21_KnicksBulls" component={feb_3_21_KnicksBulls} />
        <Route exact path="/feb_3_21_MavericksHawks" component={feb_3_21_MavericksHawks} />
        <Route exact path="/feb_3_21_PacersBucks" component={feb_3_21_PacersBucks} />
        <Route exact path="/feb_3_21_RocketsThunder" component={feb_3_21_RocketsThunder} />
        <Route exact path="/feb_3_21_SunsPelicans" component={feb_3_21_SunsPelicans} />
        <Route exact path="/feb_3_21_TimberwolvesSpurs" component={feb_3_21_TimberwolvesSpurs} />
        <Route exact path="/feb_3_21_WizardsHeat" component={feb_3_21_WizardsHeat} />

        <Route exact path="/feb_4_21_JazzHawks" component={feb_4_21_JazzHawks} />
        <Route exact path="/feb_4_21_NuggetsLakers" component={feb_4_21_NuggetsLakers} />
        <Route exact path="/feb_4_21_RocketsGrizzlies" component={feb_4_21_RocketsGrizzlies} />
        <Route exact path="/feb_4_21_TrailBlazers76ers" component={feb_4_21_TrailBlazers76ers} />
        <Route exact path="/feb_4_21_WarriorsMavericks" component={feb_4_21_WarriorsMavericks} />



        <Route exact path="/" component={SuperBowl}/>
        <Route component={NotFound} />
      </Switch>
    </section>
  );
};

export default Routes;
