import { JiraProjectLoader } from "@langchain/community/document_loaders/web/jira";

const username = process.env.JIRA_USERNAME;
const accessToken = process.env.JIRA_ACCESS_TOKEN;

if (username && accessToken) {
  const loader = new JiraProjectLoader({
    host: "https://example.atlassian.net/wiki",
    projectKey: "PI",
    username,
    accessToken,
  });

  const documents = await loader.load();
  console.log(documents);
} else {
  console.log(
    "You must provide a username and access token to run this example."
  );
}