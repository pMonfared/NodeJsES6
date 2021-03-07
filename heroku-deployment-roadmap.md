## Heroku Roadmap - Project preparation for "deployment"

`heroku create <YOUR_APP_NAME OR Release it to generate a random name> --remote production`

`git remote -v`

we need to set some Environments:

`heroku config:set DB_URL=<YOUR_DB_URL>`

it's set and ready to go. Now we need to push our code to Heroku so that the application will run. We're going to push the master branch to the production remote set up by Heroku. So git push production master. 

`git push production master`