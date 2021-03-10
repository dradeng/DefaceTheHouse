
import requests, bs4
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

links = []

for a_tag in elements:

	ref = a_tag['href']
	completeURL = 'http://oddshark.com' + ref 
	links.append(completeURL)

print links
