import React, { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../../../img/intertops.png';


const Jan_31_21_76ersPacers = () => {


	const dataMock = [
  	{ title: 'PHI 61%', value: 61, color: 'rgb(42,107,176)' },
  	{ title: 'IND 39%', value: 39, color: 'rgb(8,23,63)' },
	];
	const dataEspn = [
  	{ title: 'PHI 54.9%', value: 54.9, color: 'rgb(42,107,176)' },
  	{ title: 'IND 45.1%', value: 45.1, color: 'rgb(8,23,63)' },
	];
	const dataMock2 = [
  	{ title: 'Under 20%', value: 20, color: 'rgb(42,107,176)' },
  	{ title: 'Over 80%', value: 80, color: 'rgb(8,23,63)' },
	];


  return (
    <div style={{textAlign: 'center', margin: '60px 0px'}}>
      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
        Philadelphia 76ers vs Indiana Pacers
      </div>
	  	<div>
	      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Philadelphia 76ers</div>
	      	<div style={{fontWeight: '700'}}>14-6 (11-8-1) ATS</div>
	      </div>
	      <div class='middleScorePanel' style={{}}>
	      	<div class='location'>
	      		<div>January 31, 2021, 7:00 PM ET</div>
	      		<div>Bankers Life Fieldhouse</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >115.5</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >113.2</div>
	      	</div>
	      </div>
	      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Indiana Pacers</div>
	      	<div style={{fontWeight: '700'}}>11-8 (10-9) ATS</div>
	      </div>
	    </div>
	    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
	      	<div class='location'>
	      		<div>January 31, 2021, 7:00 PM ET</div>
	      		<div>Bankers Life Fieldhouse</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >115.5</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >113.2</div>
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
	    <div style={{display: 'inline-block', marginTop: '20px'}}>
	    	<div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus 1.5</div>
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
	  	<div style={{display: 'inline-block', marginTop: '20px'}}>
	    	<div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>ESPN Prediction</div>
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
  		<div style={{marginTop: '20px', display: 'inline-block'}}>
  		  <div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus 225</div>
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
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best PHI Spread</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>

	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best PHI Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-125
	    	  	</div>
	    	  </a>
	    	</div>
	    	<div style={{display: 'inline-block'}}>
	    		<div>
	    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over (223)</div>
	    			<a href="https://link.intertops.eu/c/408817">
	    	  		<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
	    	  	</a>
	    	  </div>
	    	  <div style={{}}>
	    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under (223)</div>
		    	  <a href="https://link.intertops.eu/c/408817">
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
		    	  </a>
		    	 </div>

	    	</div>
	    	<div style={{display: 'inline-block', width: '300px'}}>
	    	  <div style={{marginBottom: '20px', paddingTop: '20px',fontSize: '24px', fontWeight: '700'}}>Best IND Spread</div>
	    	  
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best IND Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817">
	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		+105
	    	  	</div>
	    	  </a>
	    	  
	    	</div>
	    </div>
    </div>
  );
};

export default Jan_31_21_76ersPacers;