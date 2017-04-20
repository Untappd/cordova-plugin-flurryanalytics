var exec = require('cordova/exec');

var FlurryAnalytics = {};

    /*
     deprecatedd pass the config options in the constructor
     the only function that is actually required to start tracking sessions

     options:

     version
     continueSessionSeconds       (must be less than or equal to five for Android)
     userId
     gender
     age
     logLevel                    (VERBOSE, DEBUG, INFO, WARN, ERROR)
     enableLogging               (defaults to false)
     enableEventLogging          (defaults to true)
     enableCrashReporting        (defaults to false, iOS only)
     enableBackgroundSessions    (defaults to false, iOS only)
     reportSessionsOnClose       (defaults to true, iOS only)
     reportSessionsOnPause       (defaults to true, iOS only)
     */
    FlurryAnalytics.init = function (appKey /* [options], successCallback, failureCallback */) {

        var successCallback,
            failureCallback,
            options;

        if (arguments.length === 4) {
            options = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            options = arguments[1];
        }

        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'initialize', [appKey, options]);
    };

    // the params parameter is optional
    FlurryAnalytics.logEvent = function (event /* [params], successCallback, failureCallback */) {

        var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }

        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logEvent', [
            event,
            false,
            params
        ]);
    };

    // the params parameter is optional
    FlurryAnalytics.startTimedEvent = function (event /* [params], successCallback, failureCallback */) {

        var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }

        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logEvent', [
            event,
            true,
            params
        ]);
    };

    // the params parameter is optional
    FlurryAnalytics.endTimedEvent = function (event /* [params], successCallback, failureCallback */) {

        var successCallback,
            failureCallback,
            params;

        if (arguments.length === 4) {
            params = arguments[1];
            successCallback = arguments[2];
            failureCallback = arguments[3];
        } else if (arguments.length === 3) {
            successCallback = arguments[1];
            failureCallback = arguments[2];
        } else if (arguments.length === 2) {
            params = arguments[1];
        }
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'endTimedEvent', [
            event,
            params
        ]);
    };

    FlurryAnalytics.logPageView = function (successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logPageView', []);
    };

    FlurryAnalytics.logError = function (code, message, successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'logError', [code, message]);
    };

    FlurryAnalytics.setLocation = function (location, message, successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'setLocation', [
            location.latitude,
            location.longitude,
            location.verticalAccuracy,
            location.horizontalAccuracy
        ]);
    };

    // only needed for older versions of Android
    FlurryAnalytics.startSession = function (successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'startSession', []);
    };

    // only needed for older versions of Android
    FlurryAnalytics.endSession = function (successCallback, failureCallback) {
        exec(successCallback, failureCallback, 'FlurryAnalyticsPlugin', 'endSession', []);
    };



module.exports = FlurryAnalytics;

