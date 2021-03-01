import requests
import json
import pymongo
from bs4 import BeautifulSoup

URL = 'https://www.oddsshark.com/nba/minnesota-washington-odds-february-27-2021-1350521'
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

away_abbreviation = parsed['oddsshark_gamecenter']['matchup']['away_abbreviation']
away_name = parsed['oddsshark_gamecenter']['matchup']['away_name']
away_primary_color = parsed['oddsshark_gamecenter']['matchup']['away_primary_color']

away_predicted_score = parsed['oddsshark_gamecenter']['gameCenterData']['away_predicted_score']
away_team_subtitle = parsed['oddsshark_gamecenter']['gameCenterData']['away_team_subtitle']
away_value = parsed['oddsshark_gamecenter']['consensus']['away_value']
away_votes = parsed['oddsshark_gamecenter']['consensus']['away_votes']
under_votes = parsed['oddsshark_gamecenter']['consensus']['under_votes']
over_votes = parsed['oddsshark_gamecenter']['consensus']['over_votes']

client = pymongo.MongoClient("mongodb://databaseUser:password11@cluster0-shard-00-00.9fxpc.mongodb.net:27017,cluster0-shard-00-01.9fxpc.mongodb.net:27017,cluster0-shard-00-02.9fxpc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-unth7l-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = client["DefaceTheHouse"]
mycol = mydb["nbagames"]
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
	"over_votes": over_votes,
	"under_votes": under_votes,
}

x = mycol.insert_one(mydict)



