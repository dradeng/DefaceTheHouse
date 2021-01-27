import React, { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../../../img/intertops.png';


const KC_TB_2_7_2020 = () => {


	const dataMock = [
  	{ title: 'KC 55%', value: 59, color: '#FFB81C' },
  	{ title: 'TB 45%', value: 41, color: '#D40909' },
	];
	const dataEspn = [
  	{ title: 'KC 52.1%', value: 52.1, color: '#FFB81C' },
  	{ title: 'TB 47.9%', value: 47.9, color: '#D40909' },
	];
	const dataMock2 = [
  	{ title: 'Under 59%', value: 59, color: '#FFB81C' },
  	{ title: 'Over 41%', value: 41, color: '#D40909' },
	];


  return (
    <div style={{textAlign: 'center', margin: '60px 0px'}}>
      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
        Kansas City Chiefs vs Tampa Bay Buccaneers
      </div>
	  	<div>
	      <div style={{display: 'inline-block', width: '300px'}}>
	      	<div style={{fontSize: '24px', fontWeight: '700'}}>Kansas City Chiefs</div>
	      	<div style={{fontSize: '24px', fontWeight: '700'}}>9-1 (6-4) ATS</div>
	      </div>
	      <div style={{display: 'inline-block', width: '300px'}}>
	      	<div>February 07, 2021, 6:30 PM ET</div>
	      	<div>Raymond James Stadium</div>
	      	<div>Computer Model Predicted Score</div>
	      	<div style={{marginTop: '40px'}}>
	      		<div style={{display: 'inline-block', float: 'left', fontSize: '24px', fontWeight: '700'}} >28.5</div>
	      		<div style={{display: 'inline-block', float: 'right', fontSize: '24px', fontWeight: '700'}} >20.9</div>
	      	</div>
	      </div>
	      <div style={{display: 'inline-block', width: '300px'}}>
	      	<div style={{fontSize: '24px', fontWeight: '700'}}>Tampa Bay Buccaneers</div>
	      	<div style={{fontSize: '24px', fontWeight: '700'}}>7-4 (5-6) ATS</div>
	      </div>
	    </div>
	    <div style={{display: 'inline-block'}}>
	    	<div style={{width: '280px', margin: '0px 40px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus 3.5</div>
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
	  	<div style={{display: 'inline-block'}}>
	    	<div style={{width: '280px', margin: '0px 40px'}}>
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
  		<div style={{marginTop: '40px', display: 'inline-block'}}>
  		  <div style={{width: '280px', margin: '0px 40px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus 56.5</div>
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
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best KC Spread</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-105
	    	  	</div>
	    	  </a>

	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best KC Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-150
	    	  	</div>
	    	  </a>
	    	</div>
	    	<div style={{display: 'inline-block'}}>
	    		<div style={{marginTop: '80px'}}>
	    		  <div style={{marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Over</div>
	    			<a href="https://link.intertops.eu/c/408817">
	    	  		<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
	    	  	</a>
	    	  </div>
	    	  <div>
	    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under</div>
		    	  <a href="https://link.intertops.eu/c/408817">
		    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
		    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
		    	  </a>
		    	 </div>

	    	</div>
	    	<div style={{display: 'inline-block', width: '300px'}}>
	    	  <div style={{paddingBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best TB Spread</div>
	    	  
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-115
	    	  	</div>
	    	  </a>
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best TB Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817">
	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		+170
	    	  	</div>
	    	  </a>
	    	  
	    	</div>
	    </div>
    </div>
  );
};

export default KC_TB_2_7_2020;
