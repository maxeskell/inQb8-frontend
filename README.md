# Incubate: created by Max Eskell

<h1> Incubate walks </h1>
A REST app, built to allow companies to find and scale their best ideas.

<h2> This application is written in ruby and angularjs.  
The back api Ruby can be found here: <a href="https://github.com/maxeskell/inQb8-api">incubate api</a></h2>
The front end angularjs app can be found here: <a href="https://github.com/maxeskell/inQb8-frontend">incubate api</a></h2>

<h2> Getting started </h2>
Download or fork the code and save it to your preferred directory.  

<h3> Installing </h3>
Run Yarn to install all the developer and deployment dependencies </br>
```yarn```

Install Yarn if you do not have it </br>
```brew install yarn``` <a href="https://yarnpkg.com/lang/en/docs/install/"> find help here</a>

You can then use Gulp to automate the workflow </br>
```gulp```

Install gulp if you do not have it (preferably globally)
```npm install --global gulp-cli``` <a href="https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md"> find help here </a>

If you want to use AWS to store images, or make use of the Facebook or Github Oauth, you will need to update the environmental variables and set these up on their respective website.

Helpful links:
<ul>
<li><a href="https://aws.amazon.com/console/"> AWS console </a></li>
<li><a href="https://github.com/">Github</a></li>
<li><a href="https://developers.facebook.com/">Facebook for developers </a></li>
</ul>

<h2> Deployment </h2>
The app is built to de deployed on Heroku.  
<ul>
<ol>Environmental variables need to be uploaded to HEROKU (including APP_SECRET, API_URL, API ID and CLIENT SECRETS) </ol>
<ol>Ensure that Facebook and Github settings (online) direct the user to the correct url.</ol>
</ul>


<h2> Built with </h2>
This is app is built with Rails, Angular, Postgres, and Bootstrap

<h2> Versioning </h2>
Current version is 1.0.  I plan to release v1.1 in the near future with the following enhancements:
<ul>
<li> Improved love and join button layout on the show page </li>
<li> Automated emails to those people who join and idea, and to leaders when people join their idea </li>
</ul>

<h2> Licence </h2>
This project is licensed under GNU AGPLv3.  You need to receive written authorisation in order to use the ideas or code contained in this application.

<h2> Acknowledgements </h2>
This project would not have been possible without:
Mike Hayden,  Emily Isacke & Mark Davis
