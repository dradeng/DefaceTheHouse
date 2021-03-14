import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getNbaGame } from '../../actions/game';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../img/intertops.png';
import Helmet from 'react-helmet';

const NbaGame = ({ getNbaGame, nbaGame: { nbaGame, loading }, match }) => {
  useEffect(() => {
    getNbaGame(match.params.id);
  }, [getNbaGame, match.params.id]);

  if (loading || nbaGame == null) {
  	return <Spinner />;
  } else {

	  const homeSpread = nbaGame.home_abbreviation + ' ' + nbaGame.home_votes + '%';
	  const awaySpread = nbaGame.away_abbreviation + ' ' + nbaGame.away_votes + '%';

	  const homeEspn = nbaGame.home_abbreviation + ' ' + nbaGame.home_win_percentage;
	  const awayEspn = nbaGame.away_abbreviation + ' ' + nbaGame.away_win_percentage;

	  const underVotes = 'Under ' + nbaGame.under_votes + '%';
	  const overVotes = 'Over ' + nbaGame.over_votes + '%';

	  const spreadConsensus = (nbaGame.home_votes >= nbaGame.away_votes) ? nbaGame.home_abbreviation + ' ' + nbaGame.home_spread : nbaGame.away_abbreviation + ' ' + nbaGame.away_spread;

	  const dataMock = [
	  	{ title: homeSpread, value: nbaGame.home_votes*100, color: nbaGame.home_primary_color },
	  	{ title: awaySpread, value: nbaGame.away_votes*100, color: nbaGame.away_primary_color },
		];

	  const dataEspn = [
	  	{ title: homeEspn, value: nbaGame.home_win_percentage.slice(0, -1)*100, color: nbaGame.home_primary_color },
	  	{ title: awayEspn, value: nbaGame.away_win_percentage.slice(0, -1)*100, color: nbaGame.away_primary_color },
		];
		const dataMock2 = [
	  	{ title: underVotes, value: nbaGame.under_votes*100, color: nbaGame.home_primary_color },
	  	{ title: overVotes, value: nbaGame.over_votes*100, color: nbaGame.away_primary_color },
		];

	  return (
	    <Fragment>
	    	<Helmet>
            <title>{nbaGame.home_name} vs {nbaGame.away_name} odds</title>
     	  </Helmet>
	      <Link to="/nba" className="btn" style={{marginTop: '20px'}}>
	        Back To NBA Games
	      </Link>
	      <div style={{textAlign: 'center', margin: '60px 0px'}}>
	      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
	        {nbaGame.home_name} vs {nbaGame.away_name}
	      </div>
		  	<div>

		      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
		      	<div style={{fontWeight: '700'}}>{nbaGame.home_name}</div>
		      	<div style={{fontWeight: '700'}}>{nbaGame.home_team_subtitle}</div>
		      </div>
		      <div class='middleScorePanel' style={{}}>
		      	<div class='location'>
		      		<div>{nbaGame.date}</div>
		      		<div>{nbaGame.location}</div>
		      	</div>
		      	<div>Predicted Score</div>
		      	<div style={{marginTop: '40px', height: '100px'}}>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >{nbaGame.home_predicted_score}</div>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >{nbaGame.away_predicted_score}</div>
		      	</div>
		      </div>
		      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
		      	<div style={{fontWeight: '700'}}>{nbaGame.away_name}</div>
		      	<div style={{fontWeight: '700'}}>{nbaGame.away_team_subtitle}</div>
		      </div>
		    </div>
		    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
		      	<div class='location'>
		      		<div>{nbaGame.date}</div>
		      		<div>{nbaGame.location}</div>
		      	</div>
		      	<div>Predicted Score</div>
		      	<div style={{marginTop: '40px', height: '100px'}}>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >{nbaGame.home_predicted_score}</div>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >{nbaGame.away_predicted_score}</div>
		      	</div>
		      </div>
		    <div style={{marginTop: '0px', fontSize: '20px', width: '375px', margin: 'auto'}}>
	    		<div style={{fontSize: '24px', fontWeight: '700'}}>
	    			Model Record
	    		</div>
	    		<div style={{height: '100px', marginTop: '20px', marginBottom: '20px', width: '300px', margin: 'auto'}}>
	    			<div class='text'>
	    				Spread Record: {nbaGame.model_spread_record}
	    			</div>
	   				<br />
	    			<div class='text'>
	    				O/U Record: {nbaGame.model_over_under_record}
	    			</div>
	    			<br />
	    		</div>
	    	</div>
		    <div style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}>
		    	<div style={{width: '280px', margin: '0px 20px'}}>
		  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus <br /> {spreadConsensus}</div>
		  			<PieChart
		  				style={{height: '200px'}}
				      data={dataMock}
				      lineWidth={20}
				      paddingAngle={18}
				      rounded
				      label={({ dataEntry }) => dataEntry.title}
				      labelStyle={(index) => ({
				        fill: dataMock[index].color,
				        fontSize: '7px',
				        fontFamily: 'sans-serif',
				        fontWeight: '700' 
				      })}
				      labelPosition={30}
				    />
		  		</div>
		  	</div>
		  	<div style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}>
		    	<div style={{width: '280px', margin: '0px 20px'}}>
		  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>ESPN Prediction <br /> <br /></div>
		  			<PieChart
		  				style={{height: '200px'}}
				      data={dataEspn}
				      lineWidth={20}
				      paddingAngle={18}
				      rounded
				      label={({ dataEntry }) => dataEntry.title}
				      labelStyle={(index) => ({
				        fill: dataEspn[index].color,
				        fontSize: '7px',
				        fontFamily: 'sans-serif',
				        fontWeight: '700' 
				      })}
				      labelPosition={30}
				    />
		  		</div>
		  	</div>
	  		<div style={{marginTop: '20px', display: 'inline-block', verticalAlign: 'top'}}>
	  		  <div style={{width: '280px', margin: '0px 20px'}}>
		  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus <br /> {nbaGame.over_under}</div>
		  			<PieChart
		  				style={{height: '200px'}}
				      data={dataMock2}
				      lineWidth={20}
				      paddingAngle={18}
				      rounded
				      label={({ dataEntry }) => dataEntry.title}
				      labelStyle={(index) => ({
				        fill: dataMock2[index].color,
				        fontSize: '7px',
				        fontFamily: 'sans-serif',
				        fontWeight: '700',
				      })}
				      labelPosition={30}
				    />
		  		</div>
	  		</div>
	  		<div>
	  			<div>
	  				<div style={{fontWeight: '700', padding: '20px', fontSize: '24px'}}>Home Trends</div>
	  					<div style={{textAlign: 'left',}}>
		  					{nbaGame.home_trends.map((trend) => (
				          <div style={{paddingTop: '10px'}}>{trend}</div>
				        ))}
				      </div>

	  			</div>

	  			<div>
	  				<div style={{fontWeight: '700', padding: '20px', fontSize: '24px'}} >Away Trends</div>
	  				<div style={{textAlign: 'left',}}>
		  				{nbaGame.away_trends.map((trend) => (
				          <div style={{paddingTop: '10px'}}>{trend}</div>
				      ))}
				    </div>
	  			</div>

	  		</div>
	  		<div>
	  			<div>
	  				<div style={{fontWeight: '700', padding: '20px', fontSize: '24px'}}>Home Injuries</div>
	  					<div style={{textAlign: 'left',}}>
		  					{nbaGame.home_injuries.map((injury) => (
				          <div style={{paddingTop: '10px'}}>{injury} </div>
				        ))}
				      </div>

	  			</div>

	  			<div>
	  				<div style={{fontWeight: '700', padding: '20px', fontSize: '24px'}} >Away Injuries</div>
	  				<div style={{textAlign: 'left',}}>
		  				{nbaGame.away_injuries.map((injury) => (
				          <div style={{paddingTop: '10px'}}>{injury} </div>
				      ))}
				    </div>
	  			</div>

	  		</div>
		    <div style={{marginTop: '40px'}}>
		    	<div style={{display: 'inline-block', width: '300px'}}>
		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {nbaGame.home_abbreviation} Spread ({nbaGame.best_home_spread_number})</div>
		    	  <a href={nbaGame.best_home_spread_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_home_spread_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{nbaGame.best_home_spread_price}
		    	  	</div>
		    	  </a>

		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {nbaGame.home_abbreviation} Moneyline</div>
		    	  <a href={nbaGame.best_home_moneyline_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_home_moneyline_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  	{nbaGame.best_home_moneyline_price}
		    	  	</div>
		    	  </a>
		    	</div>
		    	<div style={{display: 'inline-block'}}>
		    		<div>
		    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over ({nbaGame.best_over_number})</div>
		    			<a href={nbaGame.best_over_link}>
		    	  		<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_over_image} />
		    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  			{nbaGame.best_over_price}
		    	  		</div>
		    	  	</a>
		    	  </div>
		    	  <div style={{}}>
		    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under ({nbaGame.best_under_number})</div>
			    	  <a href={nbaGame.best_under_link}>
			    	  	<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_under_image} />
			    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  			{nbaGame.best_under_price}
		    	  		</div>
			    	  </a>
			    	 </div>

		    	</div>
		    	<div style={{display: 'inline-block', width: '300px'}}>
		    	  <div style={{marginBottom: '20px', paddingTop: '20px',fontSize: '24px', fontWeight: '700'}}>Best {nbaGame.away_abbreviation} Spread ({nbaGame.best_away_spread_number})</div>
		    	  
		    	  <a href={nbaGame.best_away_spread_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_away_spread_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{nbaGame.best_away_spread_price}
		    	  	</div>
		    	  </a>
		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {nbaGame.away_abbreviation} Moneyline</div>
		    	  <a href={nbaGame.best_away_moneyline_link}>
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={nbaGame.best_away_moneyline_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{nbaGame.best_away_moneyline_price}
		    	  	</div>
		    	  </a>
		    	  
		    	</div>
		    </div>
	    </div>
	      
	    </Fragment>
	  );
  }
};


NbaGame.propTypes = {
  getNbaGame: PropTypes.func.isRequired,
  nbaGame: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  nbaGame: state.game
});

export default connect(mapStateToProps, { getNbaGame })(NbaGame);