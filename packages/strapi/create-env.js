// packages/strapi/init-script.js

const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');

const envExampleValues = fs.readFileSync(path.join(__dirname, '.env.example')).toString().split('\n');
const envValues = envExampleValues
  .map((line) =>
    line.includes('[change-me]') ? line.replaceAll('[change-me]', crypto.randomBytes(16).toString('base64')) : line,
  )
  .join('\n');

fs.writeFileSync(path.join(__dirname, '.env'), envValues);

const pkgJson = fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8');
const pkgJsonObject = JSON.parse(pkgJson);
pkgJsonObject.strapi.uuid = crypto.randomUUID();

fs.writeFileSync(path.join(__dirname, 'package.json'), JSON.stringify(pkgJsonObject, null, 2) + os.EOL);