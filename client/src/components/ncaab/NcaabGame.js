import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getNcaabGame } from '../../actions/game';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../img/intertops.png';

const NcaabGame = ({ getNcaabGame, ncaabGame: { ncaabGame, loading }, match }) => {
  useEffect(() => {
    getNcaabGame(match.params.id);
  }, [getNcaabGame, match.params.id]);

  if (loading || ncaabGame == null) {
  	return <Spinner />;
  } else {

	  const homeSpread = ncaabGame.home_abbreviation + ' ' + ncaabGame.home_votes + '%';
	  const awaySpread = ncaabGame.away_abbreviation + ' ' + ncaabGame.away_votes + '%';

	  const homeEspn = ncaabGame.home_abbreviation + ' ' + ncaabGame.home_win_percentage;
	  const awayEspn = ncaabGame.away_abbreviation + ' ' + ncaabGame.away_win_percentage;

	  const underVotes = 'Under ' + ncaabGame.under_votes + '%';
	  const overVotes = 'Over ' + ncaabGame.over_votes + '%';

	  const spreadConsensus = (ncaabGame.home_votes >= ncaabGame.away_votes) ? ncaabGame.home_abbreviation + ' ' + ncaabGame.home_spread : ncaabGame.away_abbreviation + ' ' + ncaabGame.away_spread;

	  const dataMock = [
	  	{ title: homeSpread, value: ncaabGame.home_votes*100, color: ncaabGame.home_primary_color },
	  	{ title: awaySpread, value: ncaabGame.away_votes*100, color: ncaabGame.away_primary_color },
		];

	  const dataEspn = [
	  	{ title: homeEspn, value: ncaabGame.home_win_percentage.slice(0, -1)*100, color: ncaabGame.home_primary_color },
	  	{ title: awayEspn, value: ncaabGame.away_win_percentage.slice(0, -1)*100, color: ncaabGame.away_primary_color },
		];
		const dataMock2 = [
	  	{ title: underVotes, value: ncaabGame.under_votes*100, color: ncaabGame.home_primary_color },
	  	{ title: overVotes, value: ncaabGame.over_votes*100, color: ncaabGame.away_primary_color },
		];

		console.log(ncaabGame.best_away_moneyline_image);

	  return (
	    <Fragment>
	      <Link to="/ncaab" className="btn" style={{marginTop: '20px'}}>
	        Back To NCAAB Games
	      </Link>
	      <div style={{textAlign: 'center', margin: '60px 0px'}}>
	      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
	        {ncaabGame.home_name} vs {ncaabGame.away_name}
	      </div>
		  	<div>

		      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
		      	<div style={{fontWeight: '700'}}>{ncaabGame.home_name}</div>
		      	<div style={{fontWeight: '700'}}>{ncaabGame.home_team_subtitle}</div>
		      </div>
		      <div class='middleScorePanel' style={{}}>
		      	<div class='location'>
		      		<div>{ncaabGame.date}</div>
		      		<div>{ncaabGame.location}</div>
		      	</div>
		      	<div>Predicted Score</div>
		      	<div style={{marginTop: '40px', height: '100px'}}>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >{ncaabGame.home_predicted_score}</div>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >{ncaabGame.away_predicted_score}</div>
		      	</div>
		      </div>
		      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
		      	<div style={{fontWeight: '700'}}>{ncaabGame.away_name}</div>
		      	<div style={{fontWeight: '700'}}>{ncaabGame.away_team_subtitle}</div>
		      </div>
		    </div>
		    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
		      	<div class='location'>
		      		<div>{ncaabGame.date}</div>
		      		<div>{ncaabGame.location}</div>
		      	</div>
		      	<div>Predicted Score</div>
		      	<div style={{marginTop: '40px', height: '100px'}}>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >{ncaabGame.home_predicted_score}</div>
		      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >{ncaabGame.away_predicted_score}</div>
		      	</div>
		      </div>
		    <div style={{marginTop: '0px', fontSize: '20px', width: '375px', margin: 'auto'}}>
	    		<div style={{fontSize: '24px', fontWeight: '700'}}>
	    			Model Record
	    		</div>
	    		<div style={{height: '100px', marginTop: '20px', marginBottom: '20px', width: '300px', margin: 'auto'}}>
	    			<div class='text'>
	    				Spread Record: {ncaabGame.model_spread_record}
	    			</div>
	   				<br />
	    			<div class='text'>
	    				O/U Record: {ncaabGame.model_over_under_record}
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
		  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus <br /> {ncaabGame.over_under}</div>
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
		  					{ncaabGame.home_trends.map((trend) => (
				          <div style={{paddingTop: '10px'}}>{trend}</div>
				        ))}
				      </div>

	  			</div>

	  			<div>
	  				<div style={{fontWeight: '700', padding: '20px', fontSize: '24px'}} >Away Trends</div>
	  				<div style={{textAlign: 'left',}}>
		  				{ncaabGame.away_trends.map((trend) => (
				          <div style={{paddingTop: '10px'}}>{trend}</div>
				      ))}
				    </div>
	  			</div>

	  		</div>
		    <div style={{marginTop: '40px'}}>
		    	<div style={{display: 'inline-block', width: '300px'}}>
		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {ncaabGame.home_abbreviation} Spread ({ncaabGame.best_home_spread_number})</div>
		    	  <a href={ncaabGame.best_home_spread_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_home_spread_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{ncaabGame.best_home_spread_price}
		    	  	</div>
		    	  </a>

		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {ncaabGame.home_abbreviation} Moneyline</div>
		    	  <a href={ncaabGame.best_home_moneyline_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_home_moneyline_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  	{ncaabGame.best_home_moneyline_price}
		    	  	</div>
		    	  </a>
		    	</div>
		    	<div style={{display: 'inline-block'}}>
		    		<div>
		    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over ({ncaabGame.best_over_number})</div>
		    			<a href={ncaabGame.best_over_link}>
		    	  		<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_over_image} />
		    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  			{ncaabGame.best_over_price}
		    	  		</div>
		    	  	</a>
		    	  </div>
		    	  <div style={{}}>
		    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under ({ncaabGame.best_under_number})</div>
			    	  <a href={ncaabGame.best_under_link}>
			    	  	<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_under_image} />
			    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  			{ncaabGame.best_under_price}
		    	  		</div>
			    	  </a>
			    	 </div>

		    	</div>
		    	<div style={{display: 'inline-block', width: '300px'}}>
		    	  <div style={{marginBottom: '20px', paddingTop: '20px',fontSize: '24px', fontWeight: '700'}}>Best {ncaabGame.away_abbreviation} Spread ({ncaabGame.best_away_spread_number})</div>
		    	  
		    	  <a href={ncaabGame.best_away_spread_link} target="_blank" >

		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_away_spread_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{ncaabGame.best_away_spread_price}
		    	  	</div>
		    	  </a>
		    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best {ncaabGame.away_abbreviation} Moneyline</div>
		    	  <a href={ncaabGame.best_away_moneyline_link}>
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={ncaabGame.best_away_moneyline_image} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
		    	  		{ncaabGame.best_away_moneyline_price}
		    	  	</div>
		    	  </a>
		    	  
		    	</div>
		    </div>
	    </div>
	      
	    </Fragment>
	  );
  }
};


NcaabGame.propTypes = {
  getNcaabGame: PropTypes.func.isRequired,
  ncaabGame: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  ncaabGame: state.game
});

export default connect(mapStateToProps, { getNcaabGame })(NcaabGame);