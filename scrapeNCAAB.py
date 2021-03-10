import requests
import json
import pymongo
from bs4 import BeautifulSoup

''' Oddsshark SCRAPE SECTION '''

URL = 'https://www.oddsshark.com/ncaab/oral-roberts-north-dakota-state-odds-march-9-2021-1389726'
espnURL = 'https://www.espn.com/mens-college-basketball/game?gameId=401287755'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
results = soup.find(id='gc-data').get_text(strip=True)
parsed = json.loads(results)
print(json.dumps(parsed, indent=4, sort_keys=True))


print(parsed['oddsshark_gamecenter']['gameCenterData'])

date = parsed['oddsshark_gamecenter']['matchup']['header_date']
location = parsed['oddsshark_gamecenter']['matchup']['stadium']

home_abbreviation = parsed['oddsshark_gamecenter']['matchup']['home_abbreviation']
home_name = parsed['oddsshark_gamecenter']['matchup']['home_name']
home_primary_color = parsed['oddsshark_gamecenter']['matchup']['home_primary_color']

home_predicted_score = parsed['oddsshark_gamecenter']['gameCenterData']['home_predicted_score']
home_team_subtitle = parsed['oddsshark_gamecenter']['gameCenterData']['home_team_subtitle']
home_value = parsed['oddsshark_gamecenter']['consensus']['home_value']
home_votes = parsed['oddsshark_gamecenter']['consensus']['home_votes']
under_votes = parsed['oddsshark_gamecenter']['consensus']['under_votes']
over_votes = parsed['oddsshark_gamecenter']['consensus']['over_votes']

if over_votes == 0:
	over_votes = 50
	under_votes = 50

away_abbreviation = parsed['oddsshark_gamecenter']['matchup']['away_abbreviation']
away_name = parsed['oddsshark_gamecenter']['matchup']['away_name']
away_primary_color = parsed['oddsshark_gamecenter']['matchup']['away_primary_color']

away_predicted_score = parsed['oddsshark_gamecenter']['gameCenterData']['away_predicted_score']
away_team_subtitle = parsed['oddsshark_gamecenter']['gameCenterData']['away_team_subtitle']
away_value = parsed['oddsshark_gamecenter']['consensus']['away_value']
away_votes = parsed['oddsshark_gamecenter']['consensus']['away_votes']

best_home_spread_number = parsed['oddsshark_gamecenter']['bestOdds']['home']['spread'];
best_home_spread_price = parsed['oddsshark_gamecenter']['bestOdds']['home']['spread_price'];
best_home_spread_image = parsed['oddsshark_gamecenter']['bestOdds']['home']['spread_book_image'];
best_home_spread_link = parsed['oddsshark_gamecenter']['bestOdds']['home']['spread_book_name'];

best_home_moneyline_price = parsed['oddsshark_gamecenter']['bestOdds']['home']['money_line'];
best_home_moneyline_image = parsed['oddsshark_gamecenter']['bestOdds']['home']['money_line_book_image'];
best_home_moneyline_link = parsed['oddsshark_gamecenter']['bestOdds']['home']['money_line_book_name'];


best_away_spread_number = parsed['oddsshark_gamecenter']['bestOdds']['away']['spread'];
best_away_spread_price = parsed['oddsshark_gamecenter']['bestOdds']['away']['spread_price'];
best_away_spread_image = parsed['oddsshark_gamecenter']['bestOdds']['away']['spread_book_image'];
best_away_spread_link = parsed['oddsshark_gamecenter']['bestOdds']['away']['spread_book_name'];

best_away_moneyline_price = parsed['oddsshark_gamecenter']['bestOdds']['away']['money_line'];
best_away_moneyline_image = parsed['oddsshark_gamecenter']['bestOdds']['away']['money_line_book_image'];
best_away_moneyline_link = parsed['oddsshark_gamecenter']['bestOdds']['away']['money_line_book_name'];

best_over_price = parsed['oddsshark_gamecenter']['bestOdds']['total']['over_price'];
best_over_number = parsed['oddsshark_gamecenter']['bestOdds']['total']['over_total'];
best_over_link = parsed['oddsshark_gamecenter']['bestOdds']['total']['over_book_name'];
best_over_image = parsed['oddsshark_gamecenter']['bestOdds']['total']['over_book_image'];

best_under_price = parsed['oddsshark_gamecenter']['bestOdds']['total']['under_price'];
best_under_number = parsed['oddsshark_gamecenter']['bestOdds']['total']['under_total'];
best_under_link = parsed['oddsshark_gamecenter']['bestOdds']['total']['under_book_name'];
best_under_image = parsed['oddsshark_gamecenter']['bestOdds']['total']['under_book_image'];

home_trends = parsed['oddsshark_gamecenter']['trends']['home'];
away_trends = parsed['oddsshark_gamecenter']['trends']['away'];

arr_home_trends = []
arr_away_trends = []


#home moneylinee
if best_home_moneyline_link  == '5Dimes':
	best_home_moneyline_link = 'https://www.5dimes.eu/'


elif best_home_moneyline_link == 'BOVADA.LV':
	best_home_moneyline_link = 'https://www.bovada.lv/'

elif best_home_moneyline_link == 'BetOnline':
	best_home_moneyline_link = 'https://betonline.ag/'

elif best_home_moneyline_link == 'Intertops':
	best_home_moneyline_link = 'https://link.intertops.eu/c/408817/'

elif best_home_moneyline_link == 'BetNow':
	best_home_moneyline_link = 'https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_home_moneyline_link == 'SportsBetting': #commision kings
	best_home_moneyline_link = 'https://sportsbetting.ag/'

else:
	best_home_moneyline_link = 'https://link.intertops.eu/c/408817/'

#away moneyline

if best_away_moneyline_link  == '5Dimes':
	best_away_moneyline_link = 'https://www.5dimes.eu/'

elif best_away_moneyline_link == 'BOVADA.LV':
	best_away_moneyline_link = 'https://www.bovada.lv/'

elif best_away_moneyline_link == 'BetOnline': 
	best_away_moneyline_link = 'https://betonline.ag/'

elif best_away_moneyline_link == 'Intertops':
	best_over_link = 'https://link.intertops.eu/c/408817/'

elif best_away_moneyline_link == 'BetNow':
	'https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_away_moneyline_link == 'SportsBetting': #commision kings
	best_away_moneyline_link = 'https://sportsbetting.ag/'

else:
	best_away_moneyline_link = 'https://link.intertops.eu/c/408817/'

#home spread

if best_home_spread_link  == '5Dimes':
	best_home_spread_link = 'https://www.5dimes.eu/'

elif best_home_spread_link == 'BOVADA.LV':
	best_home_spread_link = 'https://www.bovada.lv/'

elif best_home_spread_link == 'BetOnline':
	best_home_spread_link = 'https://betonline.ag/'

elif best_home_spread_link == 'Intertops':
	best_home_spread_link = 'https://link.intertops.eu/c/408817/'

elif best_home_spread_link == 'BetNow':
	best_home_spread_link ='https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_home_spread_link == 'SportsBetting': #commision kings
 	best_home_spread_link =  'https://sportsbetting.ag/'

else:
	best_home_spread_link = 'https://link.intertops.eu/c/408817/'

#away spread

if best_away_spread_link  == '5Dimes':
	best_away_spread_link = 'https://www.5dimes.eu/'

elif best_away_spread_link == 'BOVADA.LV':
	best_away_spread_link = 'https://www.bovada.lv/'

elif best_away_spread_link == 'BetOnline':
	best_away_spread_link = 'https://betonline.ag/'

elif best_away_spread_link == 'Intertops':
	best_over_link = 'https://link.intertops.eu/c/408817/'

elif best_away_spread_link == 'BetNow':
	best_away_spread_link = 'https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_away_spread_link == 'SportsBetting': #commision kings
	best_away_spread_link = 'https://sportsbetting.ag/'
else:
	best_away_spread_link = 'https://link.intertops.eu/c/408817/'

#over


if best_over_link  == '5Dimes': #applied waiting
	best_over_link = 'https://www.5dimes.eu/'
elif best_over_link == 'BOVADA.LV': #emailed need to follwuup
	best_over_link = 'https://www.bovada.lv/'
elif best_over_link == 'BetOnline': #commision kings
	best_over_link  = 'https://betonline.ag/'
elif best_over_link == 'Intertops': #its own approved
	best_over_link = 'https://link.intertops.eu/c/408817/'

elif best_over_link == 'BetNow': #waiting approval
	best_over_link = 'https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_over_link == 'SportsBetting': #commision kings
	best_over_link = 'https://sportsbetting.ag/'
else:
	best_over_link = 'https://link.intertops.eu/c/408817/'

#under

if best_under_link  == '5Dimes':
	best_under_link = 'https://www.5dimes.eu/'
elif best_under_link == 'BOVADA.LV':
	best_under_link = 'https://www.bovada.lv/'
elif best_under_link == 'BetOnline':
	best_under_link = 'https://betonline.ag/'
elif best_under_link == 'Intertops':
	best_under_link = 'https://link.intertops.eu/c/408817/'

elif best_under_link == 'BetNow':
	best_under_link = 'https://www.betnow.eu/wc/clicks.php?aff=DRADENGAFFNEY@GMAIL.COM_715_881_32740'

elif best_under_link == 'SportsBetting': #commision kings
	best_under_link = 'https://sportsbetting.ag/'
else:
	best_under_link = 'https://link.intertops.eu/c/408817/'





for object in home_trends:

	arr_home_trends.append(object['value'])

for object in away_trends:

	arr_away_trends.append(object['value'])




''' ESPN SCRAPE SECTION '''

page = requests.get(espnURL)

soup = BeautifulSoup(page.content, 'html.parser')

espnStats = soup.find_all('td', class_='score')


over_under = 0
home_spread = 0
away_spread = 0
home_moneyline = 0
away_moneyline = 0
home_win_percentage = soup.find('span', class_='value-home').get_text(strip=True)
away_win_percentage = soup.find('span', class_='value-away').get_text(strip=True)

count = 0
for stat in espnStats:

	count = count + 1
	if count == 4:
		away_spread = stat.get_text(strip=True)
	elif count == 5:
		away_moneyline = stat.get_text(strip=True)
	elif count == 6:
		over_under = stat.get_text(strip=True)
	elif count == 9:
		home_spread = stat.get_text(strip=True)
	elif count == 10:
		home_moneyline = stat.get_text(strip=True)


home_predicted_score = float(home_predicted_score)
away_predicted_score = float(away_predicted_score)

predicted_diff = abs(home_predicted_score - away_predicted_score)

espn_diff = abs((float(home_win_percentage[:-1]) - float(away_win_percentage[:-1]))/6)

changed = False

print(espn_diff)
print(predicted_diff)
while (espn_diff > predicted_diff+.5):
	
	if (float(home_win_percentage[:-1]) >= float(away_win_percentage[:-1])):
		home_predicted_score += .3
		away_predicted_score -= .3
	else:
		home_predicted_score -= .3
		away_predicted_score += .3

	predicted_diff = abs(home_predicted_score - away_predicted_score)
	changed = True

if not changed:
	home_predicted_score += .1 
	away_predicted_score -= .1

if (espn_diff > 15):
	home_predicted_score += 1
	away_predicted_score -= .5

home_predicted_score -= .5 
away_predicted_score -= .5


home_predicted_score = str(home_predicted_score)
away_predicted_score = str(away_predicted_score)




client = pymongo.MongoClient("mongodb://databaseUser:password11@cluster0-shard-00-00.9fxpc.mongodb.net:27017,cluster0-shard-00-01.9fxpc.mongodb.net:27017,cluster0-shard-00-02.9fxpc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-unth7l-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = client["DefaceTheHouse"]
mycol = mydb["ncaabgames"]
mydict = { 
	"date": date, 
	"location": location,
	"home_abbreviation": home_abbreviation,
	"home_name": home_name,
	"home_primary_color": home_primary_color,
	"home_predicted_score": home_predicted_score,
	"home_team_subtitle": home_team_subtitle,
	"home_value": home_value,
	"home_votes": home_votes,
	"away_abbreviation": away_abbreviation,
	"away_name": away_name,
	"away_primary_color": away_primary_color,
	"away_predicted_score": away_predicted_score,
	"away_team_subtitle": away_team_subtitle,
	"away_value": away_value,
	"away_votes": away_votes,

	"over_under": over_under, 
	"home_spread": home_spread,
	"away_spread": away_spread,
	"home_moneyline": home_moneyline,
	"away_moneyline": away_moneyline,
	"home_win_percentage": home_win_percentage,
	"away_win_percentage": away_win_percentage,
	"over_votes": over_votes,
	"under_votes": under_votes,

	'best_home_spread_number': best_home_spread_number,
	'best_home_spread_price': best_home_spread_price,
	'best_home_spread_image': best_home_spread_image,
	'best_home_spread_link': best_home_spread_link,

	'best_home_moneyline_price': best_home_moneyline_price,
	'best_home_moneyline_image': best_home_moneyline_image,
	'best_home_moneyline_link': best_home_moneyline_link,


	'best_away_spread_number': best_away_spread_number,
	'best_away_spread_price': best_away_spread_price,
	'best_away_spread_image': best_away_spread_image,
	'best_away_spread_link': best_away_spread_link,

	'best_away_moneyline_price': best_away_moneyline_price,
	'best_away_moneyline_image': best_away_moneyline_image,
	'best_away_moneyline_link': best_away_moneyline_link,

	'best_over_price': best_over_price,
	'best_over_number': best_over_number,
	'best_over_link': best_over_link,
	'best_over_image': best_over_image,

	'best_under_price': best_under_price,
	'best_under_number': best_under_number,
	'best_under_link': best_under_link,
	'best_under_image': best_under_image,

	'home_trends': arr_home_trends,
	'away_trends': arr_away_trends,

	'model_spread_record': '10-13',
  	'model_over_under_record': '10-13',
}

x = mycol.insert_one(mydict)