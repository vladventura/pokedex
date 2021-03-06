# Pokedex

As simple as it sounds. Just a pokedex in the works.

Table of contents:

- [Tools Used](#tools-used)
- [Setup](#setup)
- [Frontend Setup](#frontend-setup)
- [Backend Setup](#backend-setup)
- [Roadmap](#roadmap)
- [Contributing](#contributing)

# Tools Used

- Python (Django) in the backend
- SQLite as a Database (I think that for the size of this project, this should work)
- GraphQL as our bridge between frontend and backend (while using Apollo on the frontend)
- JS/CSS (React) for the frontend
- Redux as our state management for React (As of right now, Redux is disabled. We're using Apollo mostly for our queries)
- Thunk as a middleware for fetching data from the backend (same with redux)

# Setup

First, let's start by using [git](https://git-scm.com/) to clone the repo and moving into it:

```bash
git clone https://github.com/vladventura/pokedex.git
cd pokedex
```

From here you have the **HIGHLY SUGGESTED** option of copying the pre-commit hook to your .git directory. Notice that you will need to finish the frontend setup and the backend setup as well before you commit, because the linters are used on it 🙂. Also, for the python linter (black) you also must either have it installed locally **OR IF YOU USE A VIRTUALENV FOR PYTHON YOU MUST COMMIT WITH IT ON**, although I haven't tested to lint with the venv's black so I would just say install black locally. 🙂🙂🙂🙂🙂🙂 

## Frontend Setup

To set up the frontend, we should move into the frontend directory and run an [npm](https://nodejs.org/en/) command

```bash
cd client
npm install
```

Which will install dependencies like [Materialize](https://materializecss.com/), [Redux](https://redux.js.org/), [Apollo](https://www.apollographql.com/docs/react/) and [Thunk](https://github.com/reduxjs/redux-thunk). After this you should then be able to run the [React](https://reactjs.org/) frontend of the app

`npm start`

Which by default starts on port 3000

## Backend Setup

Setting up the backend takes a bit more time but once it's set up, it should all be alright. While it's not a requirement, I highly recommend starting a [Python](https://www.python.org/) virtual environment to work on the backend before installing its packages. If you're not interested, skip the virtualenv setup.

From the root directory, we move into server

`cd server`

To start a virtual environment, we must install [virtualenv](https://virtualenv.pypa.io/en/latest/) first

`pip install virtualenv`

Now, to start a virtual environment here, all we have to do is

`virtualenv .` or `virtualenv venv` depending on your preference

I personally prefer the second option because it makes the directory less convoluted. Now, from here, we must activate the virtual environment

For Linux/Mac

`source ./venv/bin/activate`

Windows

`./venv/Scripts/activate`

And now we're finally inside our secluded virtual environment. From here, we should run this command on the server directory

`pip install -r requirements.txt`

Which will install both [Django](https://www.djangoproject.com/) and [GraphQL](https://graphql.org/) with their dependencies

From here, all that's left to do is run a few more lines to make sure the backend is ready to start and then run our server

```bash
python manage.py makemigrations pkdx_backend
python manage.py migrate
python manage.py runserver
```

And that should be all for setup! Make sure both backend and frontend are running!

# Roadmap

I think that I'm mostly doing this app just to learn, but that doesn't take away the fact that I can add some cool features to it. This roadmap will help me visualize where the app as of right now and I think that it'll motivate me to move forward with the app.

| Current State of the App                                                                                            | Goals for next push to master                                                            | Goals for next week                                                                           | Goals for next month                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| We have some customization as of right now and we can see all of the Pokemon in the Django backend on the frontend. | I think that for now, as a placeholder, we can say that improving the frontend is a goal | Have badges for each Pokemon game so we can display when were they introduced to the universe | Have some established view as to where the app should be. Albeit a single page app that shows either minimal/trivial information about each Pokemon or a multi paged app where we can show much more information. I think that if we do go for the second option, maybe then we'll have to properly introduce Redux to the app so we have more control over the flow of it. I think I have some ideas as to how these two should be used. |

# Contributing

Feel free to contribute as much as you want! If you want to contact me, the quickest way to get my attention is to open a PR with the tag "contact" and let me know in the PR comments what do you think. Thanks a lot for even considering contributing!
