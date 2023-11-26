const crypto = require('crypto');
const fs = require('fs');
const { argv } = require('node:process');
const os = require('os');
const path = require('path');

// taking care of the '.env' file related to the strapi package
const envExampleValues = fs
  .readFileSync(path.join(__dirname, 'packages', 'strapi', '.env.example'))
  .toString()
  .split('\n');
const envValues = envExampleValues
  .map((line) =>
    line.includes('[change-me]')
      ? line.replaceAll('[change-me]', crypto.randomBytes(16).toString('base64'))
      : line.includes('[PORT]')
        ? line.replaceAll('[PORT]', process.argv[2] || 5000)
        : line,
  )
  .join('\n');

fs.writeFileSync(path.join(__dirname, 'packages', 'strapi', '.env'), envValues);

const pkgJson = fs.readFileSync(path.join(__dirname, 'packages', 'strapi', 'package.json'), 'utf8');
const pkgJsonObject = JSON.parse(pkgJson);
pkgJsonObject.strapi.uuid = crypto.randomUUID();

fs.writeFileSync(
  path.join(__dirname, 'packages', 'strapi', 'package.json'),
  JSON.stringify(pkgJsonObject, null, 2) + os.EOL,
);

// taking care of the '.env' file related to the client package
{
  const envExampleValues = fs
    .readFileSync(path.join(__dirname, 'packages', 'client', '.env.example'))
    .toString()
    .split('\n');
  const envValues = envExampleValues
    .map((line) => (line.includes('[PORT]') ? line.replaceAll('[PORT]', argv[2] || 5000) : line))
    .join('\n');

  fs.writeFileSync(path.join(__dirname, 'packages', 'client', '.env'), envValues);
}
