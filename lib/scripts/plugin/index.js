#!/usr/bin/env node
const { program } = require('commander');

program
  .version('1.0.0')
  .description('A simple CLI tool example')
  .option('-g, --greet', 'Say hello to the CLI world')
  .parse(process.argv);

console.log('Hello Word');
if (program.greet) {
  console.log('Hello, CLI world!');
}
