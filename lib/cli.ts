#! /usr/bin/env node

import * as commander from 'commander';
import * as _ from 'lodash';
import * as util from 'util';
import swaggerPactValidator from './swagger-pact-validator';

// tslint:disable:no-var-requires
const packageJson = require('../package.json');

commander
    .version(packageJson.version)
    .arguments('<swagger> <pact>')
    .description(
        'Confirms the swagger spec and pact are compatible with each other. ' +
        'The <swagger> and <pact> arguments should paths to the json files ' +
        'or urls to the json files.'
    )
    .action((swagger, pact) =>
        swaggerPactValidator.validate({
            pactPathOrUrl: pact,
            swaggerPathOrUrl: swagger
        })
        .then((results) => {
            const errors = _.get(results, 'errors', []);
            const warnings = _.get(results, 'warnings', []);

            console.log(`${errors.length} error(s)`);
            console.log(`${warnings.length} warning(s)\n`);

            if (warnings.length > 0) {
                console.log(`${util.inspect(results, {depth: 4})}\n`);
            }
        })
        .catch((error) => {
            console.log(`${error.message}\n`);
            if (error.details) {
                console.log(`${error.details.errors.length} error(s)`);
                console.log(`${error.details.warnings.length} warning(s)\n`);
                console.log(`${util.inspect(error.details, {depth: 4})}\n`);
            }
            console.log(error.stack);
            process.exitCode = 1;
        })
    )
    .parse(process.argv);

if (!commander.args.length) {
    commander.help();
}