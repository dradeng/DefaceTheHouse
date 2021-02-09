import React, { Fragment } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import intertops from '../../../../../img/intertops.png';


const Feb_8_21_CelticsJazz = () => {

	var firstColor = 'rgb(42, 99, 55)';
	var secondColor = 'rgb(8,21,60)';


	const dataMock = [
  	{ title: 'BOS 37%', value: 37, color: firstColor },
  	{ title: 'UTA 63%', value: 63, color: secondColor },
	];
	const dataEspn = [
  	{ title: 'BOS 37.7%', value: 37.7, color: firstColor },
  	{ title: 'UTA 62.3%', value: 62.3, color: secondColor },
	];
	const dataMock2 = [
  	{ title: 'Under 37%', value: 37, color: firstColor },
  	{ title: 'Over 63%', value: 63, color: secondColor },
	];

  return (
    <div style={{textAlign: 'center', margin: '60px 0px'}}>
      <div style={{fontSize: '40px', fontWeight: '700', marginBottom: '40px'}}>
        Boston Celtics vs Utah Jazz
      </div>
	  	<div>

	      <div class='leftScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Boston Celtics</div>
	      	<div style={{fontWeight: '700'}}>12-10 (12-10) ATS</div>
	      </div>
	      <div class='middleScorePanel' style={{}}>
	      	<div class='location'>
	      		<div>February 09, 2021,10:00 PM ET</div>
	      		<div>Vivint Smart Home Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >105.2</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >118.1</div>
	      	</div>
	      </div>
	      <div class='rightScorePanel' style={{display: 'inline-block', verticalAlign: 'top'}}>
	      	<div style={{fontWeight: '700'}}>Utah Jazz</div>
	      	<div style={{fontWeight: '700'}}>19-5 (17-6) ATS</div>
	      </div>
	    </div>
	    <div class='mobileMiddleScorePanel' style={{marginTop: '40px'}}>
	      	<div class='location'>
	      		<div>February 09, 2021,10:00 PM ET</div>
	      		<div>Vivint Smart Home Arena</div>
	      	</div>
	      	<div>Predicted Score</div>
	      	<div style={{marginTop: '40px', height: '100px'}}>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'left', fontWeight: '700'}} >105.2</div>
	      		<div class='predictedScore' style={{display: 'inline-block', float: 'right', fontWeight: '700'}} >118.1</div>
	      	</div>
	      </div>
	    <div style={{marginTop: '0px', fontSize: '20px', width: '375px', margin: 'auto'}}>
    		<div style={{fontSize: '24px', fontWeight: '700'}}>
    			Model Record
    		</div>
    		<div style={{height: '100px', paddingTop: '20px', width: '300px', margin: 'auto'}}>
    			<div class='text'>
    				Spread Record: 17-22-2
    			</div>
   				<br />
    			<div class='text'>
    				O/U Record: 28-13
    			</div>
    			<br />
    		</div>
    	</div>
	    <div style={{display: 'inline-block', marginTop: '20px', verticalAlign: 'top'}}>
	    	<div style={{width: '280px', margin: '0px 20px'}}>
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Spread Consensus <br /> UTA -5.5</div>
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
	  			<div style={{fontSize: '24px', fontWeight: '700', marginBottom: '20px'}}>Total Consensus <br /> 220.5</div>
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
	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best BOS Spread</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		-110
	    	  	</div>
	    	  </a>

	    	  <div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best BOS Moneyline</div>
	    	  <a href="https://link.intertops.eu/c/408817/" target="_blank" >

	    	  	<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  	<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  		+185
	    	  	</div>
	    	  </a>
	    	</div>
	    	<div style={{display: 'inline-block'}}>
	    		<div>
	    		  <div style={{marginBottom: '20px', fontSize: '24px', paddingTop: '20px', fontWeight: '700'}}>Best Over (220.5)</div>
	    			<a href="https://link.intertops.eu/c/408817">
	    	  		<img style={{width: '200px', borderRadius: '8px'}} src={intertops} />
	    	  		<div style={{marginTop: '6px', fontWeight: '700' , color: 'green'}}>
	    	  			-110
	    	  		</div>
	    	  	</a>
	    	  </div>
	    	  <div style={{}}>
	    	  	<div style={{paddingTop: '20px', marginBottom: '20px', fontSize: '24px', fontWeight: '700'}}>Best Under (220.5)</div>
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
	    	  		-200
	    	  	</div>
	    	  </a>
	    	  
	    	</div>
	    </div>
    </div>
  );
};

export default Feb_8_21_CelticsJazz;