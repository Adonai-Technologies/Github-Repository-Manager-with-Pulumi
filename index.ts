import * as github from "@pulumi/github";
import * as pulumi from "@pulumi/pulumi";

// Define a new GitHub repository
const newRepo = new github.Repository("new-repo", {
    name: "my-new-repo2", // Name of the repository
    description: "A repository created using Pulumi",
    visibility: "public", // Can be "private" or "public"
    autoInit: true, // Automatically initialize the repository with a README
    licenseTemplate: "mit", // License type (MIT, Apache-2.0, etc.)
});

// Set up a webhook to track repository events (e.g., issue creation)
const webhook = new github.RepositoryWebhook("repo-webhook", {
    repository: newRepo.name,
    configuration: {
        url: "	https://webhook.site/3c332e34-ed7d-4fc3-9046-464b42ff7050", // Replace with your webhook URL (e.g., from Webhook.site)
        contentType: "json",
        insecureSsl: false,
    },
    events: ["issues"], // Listen for issue creation events
});

// Export the repository URL
export const repoUrl = newRepo.htmlUrl;
