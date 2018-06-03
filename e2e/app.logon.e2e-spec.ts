import { AppLogonPage } from './app.logon.po';
import { JSONP_ERR_NO_CALLBACK } from '@angular/common/http/src/jsonp';

describe('test-app', () => {
  let page: AppLogonPage;

  const LOGON_URL:string = 'https://vncmpd1-manulife-vietnam.cs57.force.com/cmp/services/oauth2/authorize?response_type=token&client_id=3MVG959Nd8JMmavSSkSQ8nbxqHkOF4MrsFUPGo8YF71dzh0pSapMAU2_JLvq_BO0Gc3jattQY.XiACotwxtRo&redirect_uri=sfdc://success';
  const USERNAME:string = 'jeffrey.garcia@gmail.com';
  const PASSWORD:string = 'abcD1234!';
  const CALLBACK_SCHEME:string = "sfdc://success#";

  beforeEach(() => {
    page = new AppLogonPage();
  });

  it('should login success', () => {
    page.navigateTo(LOGON_URL).then(launchUrl => {
      page.submitCredentials(USERNAME, PASSWORD, CALLBACK_SCHEME).then(callbackUrl => {
        //console.log("callback url: " + callbackUrl);
        expect(callbackUrl).not.toBeNull();
        expect(callbackUrl.length).toBeGreaterThan(0);
  
        let scheme:string = "sfdc://success#";
        if (callbackUrl.indexOf(scheme) > -1) {
          let result = new Map<string, string>();
          let params:string[] = callbackUrl.substring(scheme.length).split("&");
          for (var i = 0; i < params.length; i++) {
            //console.log(params[i]);
            let param:string[] = params[i].split("=");
            result.set(param[0], param[1]);
          }
          // result.forEach((value: string, key: string) => {
          //   console.log(key, value);
          // });
  
          expect(result).not.toBeNull();
          expect(result.size).toBeGreaterThan(0);
          expect(result.get("access_token")).not.toBeNull();
          expect(result.get("access_token").length).toBeGreaterThan(0);
          console.log("access_token: " + result.get("access_token"));
          expect(result.get("refresh_token")).not.toBeNull();
          expect(result.get("refresh_token").length).toBeGreaterThan(0);
          console.log("refresh_token: " + result.get("refresh_token"));
        }
      });
    });
  });
});
