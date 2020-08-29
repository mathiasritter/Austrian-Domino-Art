# Austrian Domino Art Homepage

This is the repository for the Austrian Domino Art website [www.domino.art](https://www.domino.art).
The website is built with [Next.js](https://nextjs.org) and deployed on [Vercel](https://vercel.com).

## How to run locally

1. Make sure that [docker](https://www.docker.com/) is installed.
2. Create a file `secrets.env` in the repository root directory and add variables `RECAPTCHA_SECRET_KEY`, `EMAIL_PASSWORD` and `CLOUDINARY_API_SECRET`.
3. Run `docker-compose up` and open `127.0.0.1` in a browser.
