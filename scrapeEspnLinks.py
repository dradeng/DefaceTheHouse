import requests
import json
from bs4 import BeautifulSoup
import pymongo
import re
from slimit import ast
from slimit.parser import Parser
from slimit.visitors import nodevisitor


URL = 'https://www.espn.com/mens-college-basketball/scoreboard/_/group/50'
page = requests.get(URL)

soup = BeautifulSoup(page.content, 'html.parser')
print('***********************************START')


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

		links = []
		for index in ans:
			links.append(script[index:index+65])
		print(links)	
		#[m.start() for m in re.finditer('http://www.espn.com/mens-college-basketball/boxscore?gameId=', script)]
	
	count += 1
