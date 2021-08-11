# evanrodrigues.net

A revamped version of my personal website. This new site is a single page application that utilizes React and Netlify Lambda functions.

The purpose of the website is to showcase my professional experience and my side projects. There are links to my LinkedIn and GitHub accounts, and I've included detailed pages for each project I've worked on. I also integrated a contact form for any one interested in getting in touch with me.

## Installation and Running

1. `npm install`
1. `npm run start`

## Serverless Functions

**sendEmail.js:** Uses Sendgrid's API to send the information of the contact form to my email. The endpoint for this function is:

`/.netlify/functions/sendEmail`

## Contact Form

There are 4 fields to be filled out in the form.

-   Name
-   Email
-   Subject
-   Message

#### Form Validation

1. Name, Email, Subject, and Message must have a length of at least one character filled out
1. Email: Must be in proper email format.

After the input is validated and the client receives a 200 response from the sendEmail.js function, the form will be replaced with a success message.

## Dependencies

-   [sendgrid/mail](https://www.npmjs.com/package/@sendgrid/mail)
-   [netlify-cli](https://github.com/netlify/cli) (developer dependency)
