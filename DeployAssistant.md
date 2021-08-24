the pattern is something like this

-make changes in develop branch

-remove the dist folder if it exists

-in develop branch add, commit and push to upstream

-go to master branch and git merge master develop (or I think can be done in develop by using git merge master develop)

-sudo npm run build

-sudo npm run generate

-sudo npm run deploy

-go to GitHub and add the CNAME commit for the hmousavi.dev domain

-done!
