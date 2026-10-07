# Baywood Pony Club website

One-page recruiting site for Baywood Pony Club (Olympia, Washington), a club of the United States Pony Clubs.

Plain HTML and CSS, no build step. GitHub Pages publishes the `main` branch automatically, so any change committed to `main` is live within a minute or two.

## Editing

- **Text:** everything is in `index.html`. You can edit it right on github.com (pencil icon) and commit.
- **Colors and layout:** `assets/css/style.css`. Brand colors are at the top.
- **Photos:** club photos live in `assets/img/` (web-sized, with location data stripped). To swap one, add the new file there and change the matching `<img src=…>` and `alt` text in `index.html`. Get parent permission before posting photos of members, and don't picture Whitney or Betsy.
- **Social links:** Facebook and Instagram links appear in the Contact section and the footer of `index.html`.

## Interest form

The form sends submissions by email through [FormSubmit](https://formsubmit.co) (free, no account). The address is in the form's `action` in `index.html`.

The **first** submission sends a confirmation email to that address. Click the link in it once, and every submission after that is delivered as an email. After activating, FormSubmit offers a random alias you can use in place of the email address in `action` so the address isn't in the page's form code.

## Custom domain

The site is served at https://baywoodponyclub.org (DNS on Cloudflare, set in Settings → Pages → Custom domain). Email to info@baywoodponyclub.org is forwarded by Cloudflare Email Routing.

## Credits

Pony Club logos are from the USPC brand kit and remain © The United States Pony Clubs, Inc.
