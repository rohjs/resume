rm -rf node_modules/.cache
rm -rf out
git push --delete gh-pages

npm run build
npm run export
touch out/.nojekyll
git add -f out/
git checkout -b temp-for-deploy-gh-pages
git commit -m "Deploy Next.js to gh-pages"
git subtree split --prefix out -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages
git checkout main
git branch -D temp-for-deploy-gh-pages