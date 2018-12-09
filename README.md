# PV247-Chat-app

Heya :) if you'd like to use our app as an existing user, you can use these emails: jane@gmail.com, harry@gmail.com, and sally@gmail.com amd click Log in.
If you'd like to create your own profile, switch to the Sign Up tab and enter an email address along with your username and click Sign up.

https://is.muni.cz/auth/el/1433/podzim2018/PV247/um/ProjectAssignment.pdf

https://pv247messaging.azurewebsites.net/help/index.html

## Feature set

Channel management

* Create new
* Delete exiting
* Change name
* Invite user(s)
* Ordering

Attachments / images

* Options:
* Inline in rich text
* Attach to message
* Attach to channel
* Images should have preview thumbnails

Messaging in channels

* Send message
* Delete message
* Profile picture next to message
* Message up/down voting
* Rich text editing experience
* Font size, font color, triple emphasis, links, …
* Annotate existing user

Profile management

* Upload avatar
* Change displayed name
* Use email strictly for sign in and invitations

## Other requirements

* Keep your project‘s structure similar to the reference implementation
* Write tests for
  * Reducers
  * Thunk actions
  * Utility functions
* Write code based on SOLID, YAGNI, DRY, KISS principles
* Follow best practices (these can usually be found in the documentation of respective packages)
* Provide your users with indication on asynchronous operation progress
  * a loading spinner of some sort
* Try to find a way to deliver new messages to your users even when they do not interact with your application
* You are provided with REST API, so new messages are delivered from the server only on your application‘s explicit request (→ no WebSocket involved) → messaging is not expected to be instant