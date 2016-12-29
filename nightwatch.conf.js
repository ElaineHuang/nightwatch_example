var os = require('os');
var selenium = require('selenium-server-standalone-jar');
var chromeDriver = require('chrome-driver-standalone');
var geckoDriver = require('geckodriver');

var config = {
    "src_folders": [
        "test" // Where you are storing your Nightwatch e2e tests
    ],
    "custom_commands_path": "test/command",
    'page_objects_path': ['test/pages'],
    "output_folder": "./reports", // reports (test outcome) output by nightwatch
    "selenium": { // downloaded by selenium-download module (see readme)
        "start_process": true, // tells nightwatch to start/stop the selenium process
        "server_path": selenium.path,
        "host": "127.0.0.1",
        "port": 4444, // standard selenium port
        "cli_args": { // chromedriver is downloaded by selenium-download (see readme)
            "webdriver.chrome.driver": chromeDriver.path,
            "webdriver.gecko.driver": geckoDriver.path
        }
    },
    "test_settings": {
        "default": {
            "screenshots": {
                "enabled": true, // if you want to keep screenshots
                "path": './screenshots', // save screenshots here
                "on_failure": true
            },
            "globals": {
                "waitForConditionTimeout": 5000, // sometimes internet is slow so wait.
            },
            "desiredCapabilities": { // use Chrome as the default browser for tests
                "browserName": "chrome"
            },
            "skip_testcases_on_fail": false
        },
        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                "javascriptEnabled": true // set to false to test progressive enhancement
            }
        },
        "firefox": {
            "desiredCapabilities": {
                "browserName": 'firefox'
            }
        }
    }
}

module.exports = config;
