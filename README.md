# Client Portal

This project is a redesign of the Rayse client portal.

## BitBucket

We're using [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow#:~:text=What%20is%20Gitflow%3F,lived%20branches%20and%20larger%20commits.). This means that you will create feature branches for each ticket. 

Example: feature/CPV-1-add-logo

These branches should be created from the develop branch. A Pull Request will be created to merge the feature branch back into the develop branch. 

Note: Please use Squash merge when merging from a Feature branch to the Develop branch. Close the feature branch after merging.

### Important branches

- develop - current working state
- main - current production state
- release/* - versions that have been pushed to QA, UAT, or Prod (always in this order)

### CI / CD

Every merge to develop will push to the development environment.

#### Releases

When code-freeze occurs at the end of the 2nd Tuesday of the sprint, we cut a new release branch (example: release/1.{sprint #}). This will be automatically deployed to the QA environment.

This release branch may be updated for bugfixes, but should not contain any new work that will be done in the next sprint. 

When QA has passed all of the tickets in the sprint, the release may be promoted to UAT.

Once the product team has approved the current state of UAT, the release may be promoted to Production.


test