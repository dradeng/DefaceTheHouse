import requests
import json
from bs4 import BeautifulSoup
import pymongo


URL = 'https://www.espn.com/mens-college-basketball/game?gameId=401302750'
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

