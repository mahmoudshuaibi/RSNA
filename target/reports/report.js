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
  "status": "passed"
});
formatter.step({
  "name": "User sees \"RSNA News\" In title",
  "keyword": "Then "
});
formatter.match({
  "location": "RsnaNews.user_sees_In_title(String)"
});
formatter.result({
  "status": "passed"
});
});