const fetch = require("isomorphic-fetch");
const puppeteer = require("puppeteer");

const browser = await puppeteer.launch({
  headless: false,
});
