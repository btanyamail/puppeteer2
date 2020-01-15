const puppeteer = require('puppeteer');
const expect = require('chai').expect;

const config = require('../lib/config');
const click = require('../lib/helpers').click;
const typeText = require('../lib/helpers').typeText;
const loadUrl = require('../lib/helpers').loadUrl;
const waitForText = require('../lib/helpers').waitForText;
const pressKey = require('../lib/helpers').pressKey;
const shouldExist = require('../lib/helpers').shouldExist;


describe('My first puppeteer test', () => {
    let browser
    let page

    before(async function() {
        browser = await puppeteer.launch({
            headless: config.isHeadles,
            slowMo: config.slowMo,
            devtools: config.isDevtools,
            timeout: config.launchTimeout
        });
        page = await browser.newPage();
        await page.setDefaultTimeout(config.waitingTimeout);
        await page.emulate(puppeteer.devices['iPhone 8']);
        // await page.setViewport({
        //     width: config.viewportWidth,
        //     height: config.viewportHeight
        // });
    });

    after(async function(){
        await browser.close();
    });


    it('should navigate to homepage', async () => {
        await loadUrl(page, config.baseUrl);
        await shouldExist(page, 'body > select');
    });

    it('should check mobile layout - button present', async () => {
        await loadUrl(page, config.baseUrl);
        await shouldExist(page, ".gpay-button");
    });


});