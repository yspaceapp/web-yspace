import path from 'path';
import axios from 'axios';
import { Agent } from 'https';
import fs from 'fs';

const sitesPath = path.resolve(__dirname, '../renderer/assets/data/sites.json');
fs.writeFileSync(path.join(sitesPath), JSON.stringify([]));

const getSites = async (url: string, name: string) => {
  try {
    const options = {
      method: 'GET',
      url,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.142.86 Safari/537.36',
      },
      httpsAgent: new Agent({
        rejectUnauthorized: false,
      }),
    };

    const response = await axios.request(options);

    const sitesFile = JSON.parse(fs.readFileSync(sitesPath, 'utf-8'));

    fs.writeFileSync(
      path.join(sitesPath),
      JSON.stringify([
        ...sitesFile,
        {
          name,
          html: response.data,
        },
      ]),
    );
  } catch (error) {
    console.log(error);
  }
};

const localApp = [
  {
    name: 'Telegram',
    link: 'https://web.telegram.org/',
    status: false,
    categoryId: 1,
  },
  {
    name: 'WhatApp',
    link: 'https://web.whatsapp.com/',
    status: false,
    categoryId: 1,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/',
    status: false,
    categoryId: 2,
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/direct/inbox/',
    status: false,
    categoryId: 2,
  },
  {
    name: 'Facebook',
    link: 'https://www.messenger.com/',
    status: false,
    categoryId: 3,
  },
  {
    name: 'Slack',
    link: 'https://slack.com/intl/pt-br',
    status: false,
    categoryId: 3,
  },
];

export function createSitesStatic() {
  localApp.forEach((site) => {
    getSites(site.link, site.name);
  });
}
