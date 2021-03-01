const puppeteer = require('puppeteer');
async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.oddsshark.com/nba/brooklyn-los-angeles-odds-february-18-2021-1349051');
  await page.screenshot({'path': 'oxylabs_js.png'})
  await browser.close();
}
main();