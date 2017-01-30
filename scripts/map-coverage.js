/*
https://github.com/facebook/jest/issues/2418
 */

const createReporter = require('istanbul-api').createReporter;
const coverage = require('../coverage/coverage-final.json');
const istanbulCoverage = require('istanbul-lib-coverage');

const map = istanbulCoverage.createCoverageMap();
const reporter = createReporter();

const mapFileCoverage = fileCoverage => {
  fileCoverage.path = fileCoverage.path
    .replace(/(.*packages\/.*\/)(build)(\/.*)/, '$1src$3');
  return fileCoverage;
};

Object.keys(coverage).forEach(
  filename => map.addFileCoverage(mapFileCoverage(coverage[filename]))
);

reporter.addAll(['json', 'lcov', 'text']);
reporter.write(map);
