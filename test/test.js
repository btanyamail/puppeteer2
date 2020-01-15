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
    let browser;
    let context;
    let page;

    before(async function() {
    //    browser = await puppeteer.launch();
       browser = await puppeteer.launch({
        slowMo: config.slowMo,
        devtools: config.isDevtools,
        timeout: config.launchTimeout
    });
        // Create a new incognito browser context.
        context = await browser.createIncognitoBrowserContext();
        // Create a new page in a pristine context.
         page = await context.newPage();
        // Do stuff
        // await page.goto('https://example.com');
        

        // context = await browser.createIncognitoBrowserContext();
    //     // browser = await puppeteer.launch({
    //     //     headless: config.isHeadles,
    //     //     slowMo: config.slowMo,
    //     //     devtools: config.isDevtools,
    //     //     timeout: config.launchTimeout
    //     // });
    //     page = await context.newPage();
    //     await page.setDefaultTimeout(config.waitingTimeout);
    //     await page.setViewport({
    //         width: config.viewportWidth,
    //         height: config.viewportHeight
    //     });
    });

    after(async function(){
        await context.close();
    });


    // it('My first test step', async () => {
    //     await loadUrl(page, config.baseUrl);
    //     await shouldExist(page, '#nav-search');

    //     const url = await page.url();
    //     const title = await page.title();

    //     expect(url).to.contain('dev');
    //     expect(title).to.contain('Community');
    // });

    // it('browser reload', async () => {
    //     await page.reload();
    //     await shouldExist(page, '#articles-list');

    //     await waitForText(page, 'body', 'WRITE A POST');

    //     const url = await page.url();
    //     const title = await page.title();


    //     expect(url).to.contain('dev');
    //     expect(title).to.contain('Community');
    // });

    // it('click method', async () => {
    //     await loadUrl(page, config.baseUrl);
    //     await click(page, '#write-link');
    //     await shouldExist(page, '.registration-rainbow');

    // });

    // it('submit search', async () => {
    //     await loadUrl(page, config.baseUrl);
    //     await typeText(page, 'JavaScript', '#nav-search');
    //     await pressKey(page, 'Enter');
    //     await shouldExist(page, '#articles-list');

    // });

    it('should navigate to homepage', async () => {
        await loadUrl(page, config.baseUrl);
        await shouldExist(page, 'body > select');
    });

    // it('should check mobile layout - button present', async () => {
    //     await click(page, '#login-link');
    //     await click(page, '#_loginByMail');
    //     await shouldExist(page, ".form-section");
    // });

//     it('should submit login form', async () => {
//         await typeText(page, 'test@m.dev', '.txtEmail');
//         await typeText(page, 'pass', '.txtPassword');
//         await click(page, '.btnSubmit');
//     });

//     it('should get error message', async () => {
//         await shouldExist(page, '#wrong-password-message');
//         await shouldExist(page, '.form-section');
//     });
});