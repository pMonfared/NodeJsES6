## Git Roadmap - Project preparation for "deployment"

### Create your project folder as you wish like `NodeJsEs6`

Open `CMD` from the root of the project folder:

Let's start typing some git commands.

`git init`

`git add -A`  => That told git to add all of the files that it could find in the directory.                                            

`git commit -a -m "initialize"`  => first commit all with message "initialize"

`git clone NodeJsEs6 local_clone` => clone from exist to another folder as development on local

`cd local_clone`

=> The target is now setup so we can test the deployment from the main repostiory.
   first we need to change the check out branch in the local_clone
   beacause git does not like to do pushes to repositories with the target branch checked out already.

`git checkout -b tmp` => we'll check out a temprorary branch

`cd ../NodeJsEs6`
 => We need to use the remote command.What the remote does is it links different repositores together, 
    so that you can push commits from one to the other.

`git remote add second ../local_clone/` => add new remote and the remote is going to be name 'second' and we can find it at 'local_clone'

`git push second master` => So we need to make a change to one of the files.

`vi README.md`  -> On Mac and use notepad or any IDE to make a change

`git commit -a -m "README.md updated pushing to local_clone"`

`git push second master`  => now , go take a look in that directory 'local_clone'

`cd ../local_clone`

`git checkout master`

`cd ../NodeJsEs6`

### !== Setup On your Github ==!
create a repository with a name like `test_deploy`
After creating the repository github helpfully tells us how to use our own existing repository

`git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/test_deploy.git`
   
=> So we need to make a change to one of the files.

`git commit -a -m "README.md updated Setup Github"`

`git push origin master`

### TADAAAA!


`git config push.default tracking --global`

`git branch --set-upstream-to production/master master`

`git checkout -b staging`

`git branch --set-upstream-to staging/master staging`

`git checkout master`

=> So we need to make a change to one of the files.

`git commit -a -m "test git tracking"`

`git push`

