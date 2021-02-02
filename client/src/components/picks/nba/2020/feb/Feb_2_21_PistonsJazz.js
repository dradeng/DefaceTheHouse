import React, { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../../../../img/intertops.png';


const Feb_2_21_PistonsJazz = () => {

	var firstColor = 'rgb(217,54,79)';
	var secondColor = 'rgb(11,43,88)';


	const dataMock = [
  	{ title: 'DET 41%', value: 41, color: firstColor },
  	{ title: 'UTA 59%', value: 59, color: secondColor },
	];
	const dataEspn = [
  	{ title: 'DET 25.4%', value: 25.4, color: firstColor },
  	{ title: 'UTA 74.6%', value: 74.6, color: secondColor },
	];
	const dataMock2 = [
  	{ title: 'Under 63%', value: 63, color: firstColor },
  	{ title: 'Over 37%', value: 37, color: secondColor },
	];


  return (
    <div style={{textAlign: 'center', margin: '60px 0px'}}>
      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
        Detroit Pistons vs Utah Jazz
      </div>
	  	<div>
	      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Boston Celtics</div>
	      	<div style={{fontWeight: '700'}}>5-15 (10-9-1) ATS</div>
	      </div>
	      <div class='middleScorePanel' style={{}}>
	      	<div class='location'>
	      		<div>February 02, 2021, 10:00 PM ET</div>
	      		<div>Vivint Smart Home Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >98.0</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >112.9</div>
	      	</div>
	      </div>
	      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Utah Jazz</div>
	      	<div style={{fontWeight: '700'}}>15-5 (14-6) ATS</div>
	      </div>
	    </div>
	    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
	      	<div class='location'>
	      		<div>February 02, 2021, 10:00 PM ET</div>
	      		<div>Vivint Smart Home Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >98.0</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >112.9</div>
	      	</div>
	      </div>
	    <div style={{marginTop: '0px', fontSize: '20px', width: '375px', margin: 'auto'}}>
    		<div style={{fontSize: '24px', fontWeight: '700'}}>
    			Model Record
    		</div>
    		<div style={{height: '100px', paddingTop: '20px', width: '375px', margin: 'auto'}}>
    			<div class='text' style={{float:'left'}}>
    				Spread Record: 7-5
    			</div>
    			<div class='text' style={{float:'right'}}>
    				O/U Record: 9-3
    			</div>
    		</div>
    	</div>
	    <div style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}>
	    	<div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus <br /> UTA -12</div>
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
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus <br /> 218 </div>
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
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best DET Spread</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>

	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best DET Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		+600
	    	  	</div>
	    	  </a>
	    	</div>
	    	<div style={{display: 'inline-block'}}>
	    		<div>
	    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over (218)</div>
	    			<a href="https://link.intertops.eu/c/408817">
	    	  		<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
	    	  	</a>
	    	  </div>
	    	  <div style={{}}>
	    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under (218)</div>
		    	  <a href="https://link.intertops.eu/c/408817">
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
		    	  </a>
		    	 </div>

	    	</div>
	    	<div style={{display: 'inline-block', width: '300px'}}>
	    	  <div style={{marginBottom: '20px', paddingTop: '20px',fontSize: '24px', fontWeight: '700'}}>Best UTA Spread</div>
	    	  
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best UTA Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817">
	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-600
	    	  	</div>
	    	  </a>
	    	  
	    	</div>
	    </div>
    </div>
  );
};

export default Feb_2_21_PistonsJazz;