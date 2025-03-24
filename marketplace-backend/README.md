# Backend API Template


## Instruction 
1. Clone the repo `git clone <repo-url> <new-project-name>`
git clone <> my-new-api
2. cd into your new project folder and run `npm i`
3. Rename the package.json to your folder name
4. `ls -la` to see if the repo is still connected to previous repo. If you see `.git`, run `rm -rf .git`
5. Create a new `.env `file and add the `MONGODB_URI`
6. add a database name to the URI. You can use same name as folder. `.....mongodb.net/<database name goes here>?retryWrites=true&w.....`
7. Run the app with: `npm run dev`


## Dependencies
"cors": "^2.8.5", "dotenv": "^16.4.7", "express": "^4.21.2", "helmet": "^8.0.0", "mongoose": "^8.12.1", "pug": "^3.0.3"