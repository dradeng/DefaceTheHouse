import requests
import json
from bs4 import BeautifulSoup
import pymongo


URL = 'https://www.espn.com/nba/game?gameId=401267689'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')

print(soup)

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
		home_spread = stat.get_text(strip=True)
	elif count == 5:
		home_moneyline = stat.get_text(strip=True)
	elif count == 6:
		over_under = stat.get_text(strip=True)
	elif count == 9:
		away_spread = stat.get_text(strip=True)
	elif count == 10:
		away_moneyline = stat.get_text(strip=True)


client = pymongo.MongoClient("mongodb://databaseUser:password11@cluster0-shard-00-00.9fxpc.mongodb.net:27017,cluster0-shard-00-01.9fxpc.mongodb.net:27017,cluster0-shard-00-02.9fxpc.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-unth7l-shard-0&authSource=admin&retryWrites=true&w=majority")
mydb = client["DefaceTheHouse"]
mycol = mydb["NBA"]
mydict = { 
	"over_under": over_under, 
	"home_spread": home_spread,
	"away_spread": away_spread,
	"home_moneyline": home_moneyline,
	"away_moneyline": away_moneyline,
	"home_win_percentage": home_win_percentage,
	"away_win_percentage": away_win_percentage,
}

x = mycol.insert_one(mydict)

print(x.inserted_id)