# Technical Test

For this test, you are given the task of developing a feature for one of our products.

## Task: Appointment Form

#### Feature requirements:
- Allow the user to select a service.
- The user must select one service before the rest of the form is shown.
- Depending on the service selected, show a custom form to the user so they can enter their details.
- When the user submits the form, log the field values to the console (this should also include the selected service value).
- After the form has been submitted, reset the form so that the user can make a new appointment request.

Here is the *tricky part*. Depending on the service selected, different input and labels will need to be shown in the form.

#### Data Fetching

Services: `data/services.json` 
Form: `data/form.json`

`Services`: contains all the services a user can select.

`Form`: describes the form constructions that are possible. When a user selects a `service`, you will need to look for the right form description containing the `service` in it's property `services` and show the right title and inputs (with the right type and label) for the user to fill out.

The form containing `*` in its services is used if no other form description contains the service the user selected.

#### Bonus
Instead of using the local `json` files, fetch the data from:
- Services: https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/services.json
- Form: https://clinia-coding-challenge.s3.ca-central-1.amazonaws.com/form.json

Add field validation to prevent the user from submitting invalid information:
- Email: must be a valid email 
- Phone: must only contain numbers
- Text: must not be an empty string `""`

## Getting Started
We have setup a basic Next.js app for you to build on. To get started, run the following commands from your terminal:

```
npm install
npm run dev
```

The app will run on http://localhost:3000 and any changes in your code will be reflected there without restarting your server.

Styles: in styles.scss
Entry point: pages/index.js
Syntax: ES6
