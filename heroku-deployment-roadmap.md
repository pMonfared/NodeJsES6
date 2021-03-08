## Heroku Roadmap - Project preparation for "deployment" as "Production"

`heroku create <YOUR_APP_NAME OR Release it to generate a random name> --remote production`

`git remote -v`

we need to set some Environments:

`heroku config:set DB_URL=<YOUR_DB_URL>`

it's set and ready to go. Now we need to push our code to Heroku so that the application will run. We're going to push the master branch to the production remote set up by Heroku. So git push production master. 

`git push production master`



add this line to your postgresql database connection string:

`?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory`

and add this environment variable to you hosting server:

`NODE_TLS_REJECT_UNAUTHORIZED=0`


## Heroku Roadmap - Project preparation for "deployment" as "Staging"

`heroku create <YOUR_APP_NAME OR Release it to generate a random name> --remote staging`

`git remote -v`


### Get Heroku app logs

`heroku logs --remote staging`


### Last and important part is config git tracking to be push and deploy automatically 

`git config push.default tracking --global`

`git branch --set-upstream-to production/master master`

`git checkout -b staging`

`git branch --set-upstream-to staging/master staging`

`git checkout master`

=> So we need to make a change to one of the files.

`git commit -a -m "test git tracking"`

`git push`

you can change your branch between `staging` and `production` and just use `git push` to do auto push and deploy