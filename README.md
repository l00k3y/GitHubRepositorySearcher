# GitHub Repository Searcher

This project was made as a submission for a front end focused technical test for Naimuri.

## To Run

Clone this repository locally

Navigate to the project directory in a terminal / command prompt

Enter `npm install`


Enter `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

To actually use this program, enter a search term in the repository name field and click search.

A datagrid will display the results if any are found. Clicking on a row will display more information on the repository. Information such as: fork, issue and star counts. The readme, if one is found, is displayed too. 

## Future Improvements
If I had more time to work on this project I would:

- Proper loading effects on asynchronous request interfaces
- Deployment using GitLab CI
- Testing using jest
- Themeing using MUI Themes - dark mode / light mode
- Implement proper state management with Zustand
- Add hyperlink as URL field in datagrid
- Use of proper typographies for text
- Only map paged rows