import requests
import json
from bs4 import BeautifulSoup
import pymongo
import re
from slimit import ast
from slimit.parser import Parser
from slimit.visitors import nodevisitor

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By


URL = 'https://www.espn.com/mens-college-basketball/scoreboard/_/group/50'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
print('***********************************START')


EspnLinks = []

count = 0
for script in soup.find_all('script'):

	#print('--------------------------------------'+ str(count) +'--------------------------------------')
	#print(str(script))
	#print('--------------------------------------')
	
	if count == 13:
		script = str(script)
		#script = script[38:]
		#script = script[:-9]
		ans = []


		ans = [m.start() for m in re.finditer('http://www.espn.com/mens-college-basketball/game', script)]

		EspnLinks = []
		for index in ans:
			EspnLinks.append(script[index:index+65])
		
		# ODDSHARK LINKS
		break

	
	count += 1

url = 'https://www.oddsshark.com/ncaab/scores'
browser = webdriver.Chrome(executable_path=r"/Users/dragaf/Downloads/chromedriver2")
browser.get(url)
delay = 3

WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.CLASS_NAME,'scores-matchup__link')))

soup = bs4.BeautifulSoup(browser.page_source, "html.parser")


elements = soup.find_all("a", {"class": "scores-matchup__link"})

OddssharkLinks = []

for a_tag in elements:

	ref = a_tag['href']
	completeURL = 'http://oddshark.com' + ref 
	OddssharkLinks.append(completeURL)


matches = []


for EspnLink in EspnLinks:

print(matches)	

