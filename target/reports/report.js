$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/malshuaibi/IdeaProjects/RSNA/src/test/resources/features/Rsna.feature");
formatter.feature({
  "name": "RSNA HomePage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@RSNA"
    }
  ]
});
formatter.background({
  "name": "RSNA HomePage",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User on RSNA HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "RsnaNews.user_on_RSNA_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User NewsPage Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RSNA"
    },
    {
      "name": "@NewsPage"
    }
  ]
});
formatter.step({
  "name": "User Click on News Button",
  "keyword": "When "
});
formatter.match({
  "location": "RsnaNews.user_Click_on_News_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d76.0.3809.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027IT-MALSHUAIBI\u0027, ip: \u002710.0.0.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002712.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 76.0.3809.132, chrome: {chromedriverVersion: 76.0.3809.126 (d80a294506b4..., userDataDir: C:\\Users\\MALSHU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54386}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: ff3c7b1076e83763038983d8e8c71473\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"news-link\"]/a}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat steps.RsnaNews.user_Click_on_News_Button(RsnaNews.java:26)\r\n\tat ✽.User Click on News Button(C:/Users/malshuaibi/IdeaProjects/RSNA/src/test/resources/features/Rsna.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User sees \"RSNA News\" In title",
  "keyword": "Then "
});
formatter.match({
  "location": "RsnaNews.user_sees_In_title(String)"
});
formatter.result({
  "status": "skipped"
});
});