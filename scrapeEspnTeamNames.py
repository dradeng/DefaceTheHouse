import requests, bs4
import json
import pymongo
import re
from bs4 import BeautifulSoup
from slimit import ast
from slimit.parser import Parser
from slimit.visitors import nodevisitor
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

url = 'https://www.oddsshark.com/ncaab/scores'
browser = webdriver.Chrome(executable_path=r"/Users/dragaf/Downloads/chromedriver2")
browser.get(url)
delay = 3

WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.CLASS_NAME,'scores-matchup__link')))

soup = bs4.BeautifulSoup(browser.page_source, "html.parser")


elements = soup.find_all("a", {"class": "scores-matchup__link"})

OddsharkLinks = []

for a_tag in elements:

	ref = a_tag['href']
	completeURL = 'http://oddshark.com' + ref 
	OddsharkLinks.append(completeURL)



URL = 'https://www.espn.com/mens-college-basketball/scoreboard/_/group/50'
page = requests.get(URL)

linkResults = []

soup = BeautifulSoup(page.content, 'html.parser')
print('***********************************START')

espnLinks = []

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

		espnLinks = []
		for index in ans:
			espnLinks.append(script[index:index+65])
	
	count += 1


browser = webdriver.Chrome(executable_path=r"/Users/dragaf/Downloads/chromedriver2")
print(espnLinks)

for espnLink in espnLinks:

	browser.get(espnLink)
	delay = 3

	WebDriverWait(browser, delay).until(EC.presence_of_element_located((By.CLASS_NAME,'score-container')))

	soup = bs4.BeautifulSoup(browser.page_source, "html.parser")


	elements = soup.find_all("span", {"class": "long-name"})

	

	count = 0
	homeTeam = ''
	awayTeam = ''

	for name in elements:

		if count == 0:
			awayTeam = name.text
		elif count == 1:
			homeTeam = name.text
		else:
			break
		count += 1

	homeTeam = homeTeam.replace(' ', '-', 10)
	awayTeam = awayTeam.replace(' ', '-', 10)
	homeTeam = homeTeam.lower()
	awayTeam = awayTeam.lower()

	print(awayTeam)
	print(homeTeam)
	print('-----------------')

	
	for link in OddsharkLinks:

		if homeTeam in link and awayTeam in link:
			linkResults.append((link, espnLink))

print linkResults
print len(linkResults)


