Modification of Appu with HTTP Response Status Codes
====

### Files added
* auth_cookie_results.js
* auth_cookie_results.css
* auth_cookie_results.html
* status_codes.js
* find_auth_cookie_display.js

### Files modified
* cookies.js
* background.js

#### Notes
These files are quite large.  Here are a list of the changes for both files:
##### background.js
* Line 436 -- Added line to initialize FindAuthCookieDiplay
##### cookies.js
* Change everywhere where usernames were detected to using the StatusCodeService to check whether the page has redirected
* Line 9 -- Added line to initialize StatusCodeService
* Line 1974 -- Added line to reset StatusCodeService when test is over

### To Run
* Load Google Chrome
* Enter "chrome://extensions" in the address bar
* Click "Load unpacked extension"
* Select this directory

### To use Find Authentication Cookies
* Fill out the necessary information to create an account
* Log in to the website which you would like to test
* Access a user only URL
* Click "Find Authentication Cookies" in the extension pop-up menu
