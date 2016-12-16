var os = require('os');
var url = require('./env/url.js');
var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');

var config = {
    "src_folders": [
        "test" // Where you are storing your Nightwatch e2e tests
    ],
    'page_objects_path': ['test/pages'],
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": selenium.path,
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver": chromeDriver.path,
            "webdriver.firefox.profile" : "nightwatch"
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": false, // if you want to keep screenshots
                "path": './screenshots' // save screenshots here
            },
            "globals": {
                "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
                "url_index": url.index
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            },
            "skip_testcases_on_fail": true
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        }
    },
    "test_runner" : {
        "type" : "mocha",
        "options" : {
            "ui" : "bdd",
            "reporter" : "list"
        }
    }
}

module.exports = config;
