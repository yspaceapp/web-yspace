import scrape from 'website-scraper';
import PuppeteerPlugin from 'website-scraper-puppeteer';
import path from 'path';

export function getSites() {
  scrape({
    // Forneça a URL do site que você quer copiar
    urls: ['https://web.telegram.org/'],

    // Especifique a pasta onde os arquivos do site serão salvos em pasta-do-site
    directory: path.resolve(__dirname, '../renderer/assets/stites'),

    // carregue o plugin do Puppeteer
    plugins: [
      new PuppeteerPlugin({
        launchOptions: {
          headless: true,
        },
        scrollToBottom: {
          timeout: 10000,
          viewportN: 10,
        },
      }),
    ],
  });
}
