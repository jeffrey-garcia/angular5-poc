import { browser, by, element } from 'protractor';

const TIMEOUT:number = 5000;

export class AppLogonPage {
  navigateTo(logonUrl) {
    browser.waitForAngularEnabled(false);
    return browser.get(logonUrl);
  }
  
  submitCredentials(username, password, callbackScheme) {
    browser.wait(function() {
      return element(by.id('username')).isPresent().then(function(isPresent) {
        if (isPresent) {
          element(by.id('username')).sendKeys(username);
          return true;
        }
      });
    }, TIMEOUT);

    browser.wait(function() {
      return element(by.id('password')).isPresent().then(function(isPresent) {
        if (isPresent) {
          element(by.id('password')).sendKeys(password);
          return true;
        }
      });
    }, TIMEOUT);

    browser.wait(function() {
      return element(by.css('button[ng-click]')).isPresent().then(function(isPresent) {
        if (isPresent) {
          element(by.css('button[ng-click]')).click();
          return true;
        }
      });
    }, TIMEOUT);
    
    browser.wait(function() {
      return browser.getCurrentUrl().then(function(url) {
        if (url.indexOf(callbackScheme) > -1) {
          return true;
        }
      });
    }, TIMEOUT);
    return browser.getCurrentUrl();
  }
}
