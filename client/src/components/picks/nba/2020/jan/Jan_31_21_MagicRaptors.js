import React, { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../../../../img/intertops.png';


const Jan_31_21_MagicRaptors = () => {


	const dataMock = [
  	{ title: 'ORL 33%', value: 33, color: 'rgb(47, 118, 185)' },
  	{ title: 'TOR 67%', value: 67, color: 'rgb(189, 48, 71)' },
	];
	const dataEspn = [
  	{ title: 'UTA 24.2%', value: 24.2, color: 'rgb(47, 118, 185)' },
  	{ title: 'DEN 75.8%', value: 75.8, color: 'rgb(189, 48, 71)' },
	];
	const dataMock2 = [
  	{ title: 'Under 6%', value: 6, color: 'rgb(47, 118, 185)' },
  	{ title: 'Over 94%', value: 94, color: 'rgb(189, 48, 71)' },
	];


  return (
    <div style={{textAlign: 'center', margin: '60px 0px'}}>
      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
        Orlando Magic vs Toronto Raptors
      </div>
	  	<div>
	      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Orlando Magic</div>
	      	<div style={{fontWeight: '700'}}>8-12 (9-11) ATS</div>
	      </div>
	      <div class='middleScorePanel' style={{}}>
	      	<div class='location'>
	      		<div>January 31, 2021, 7:00 PM ET</div>
	      		<div>Amalie Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >103.9</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >115.8</div>
	      	</div>
	      </div>
	      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Toronto Raptors</div>
	      	<div style={{fontWeight: '700'}}>7-12 (6-13) ATS</div>
	      </div>
	    </div>
	    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
	      	<div class='location'>
	      		<div>January 31, 2021, 7:00 PM ET</div>
	      		<div>Amalie Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >103.9</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >115.8</div>
	      	</div>
	      </div>
	    <div style={{marginTop: '0px', fontSize: '20px', width: '375px', margin: 'auto'}}>
    		<div style={{fontSize: '24px', fontWeight: '700'}}>
    			Model Record
    		</div>
    		<div style={{height: '100px', paddingTop: '20px', width: '375px', margin: 'auto'}}>
    			<div class='text' style={{float:'left'}}>
    				Spread Record: 0-0
    			</div>
    			<div class='text' style={{float:'right'}}>
    				O/U Record: 0-0
    			</div>
    		</div>
    	</div>
	    <div style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}>
	    	<div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus <br /> TOR -5.5</div>
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
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus <br /> 216 </div>
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
	    <div style={{marginTop: '40px'}}>
	    	<div style={{display: 'inline-block', width: '300px'}}>
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best ORL Spread</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>

	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best ORL Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		+185
	    	  	</div>
	    	  </a>
	    	</div>
	    	<div style={{display: 'inline-block'}}>
	    		<div>
	    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over (216)</div>
	    			<a href="https://link.intertops.eu/c/408817">
	    	  		<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
	    	  	</a>
	    	  </div>
	    	  <div style={{}}>
	    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under (216)</div>
		    	  <a href="https://link.intertops.eu/c/408817">
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
		    	  </a>
		    	 </div>

	    	</div>
	    	<div style={{display: 'inline-block', width: '300px'}}>
	    	  <div style={{marginBottom: '20px', paddingTop: '20px',fontSize: '24px', fontWeight: '700'}}>Best TOR Spread</div>
	    	  
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best TOR Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817">
	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-225
	    	  	</div>
	    	  </a>
	    	  
	    	</div>
	    </div>
    </div>
  );
};

export default Jan_31_21_MagicRaptors;