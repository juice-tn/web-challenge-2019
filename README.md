# Quick Start
- git clone https://github.com/juice-tn/web-challenge-2019.git
### Start the application:
  1. cd web-challenge-2019
  2. `npm install` to install dependencies
  3. npm start
  4. webapp will be running on http://localhost:3000
  
### Design decisions
1) Local storage is used to persist the React state of favourite lists when the browser is closed or refreshed
2) The JSON data is parsed and all capital letters in 'keywords' section is made lower case during app initialization
3) Whitespace is removed from search values and capital letters are converted to lower case. "title" and "keyword" values from data are used in search.
4) Favourites list has absolute positioning at bottom of page, so it is always in the view regardless of search size
5) :hover styling for "star" buttons are only applied for large screen sizes, so mobile touch devices won't have hover styling
