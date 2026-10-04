# Baywood Pony Club website

One-page recruiting site for Baywood Pony Club (Olympia, Washington), a club of the United States Pony Clubs.

Plain HTML and CSS, no build step. GitHub Pages publishes the `main` branch automatically, so any change committed to `main` is live within a minute or two.

## Editing

- **Text:** everything is in `index.html`. You can edit it right on github.com (pencil icon) and commit.
- **Colors and layout:** `assets/css/style.css`. Brand colors are at the top.
- **Photos:** the three dashed boxes in the "A year at Baywood" section are placeholders. Add a photo to `assets/img/` and replace a `<figure class="photo-slot">…</figure>` with
  `<img src="assets/img/your-photo.jpg" alt="Describe the photo">`. Get parent permission before posting photos of members.
- **Social links:** Facebook and Instagram links appear in the Contact section and the footer of `index.html`.

## Interest form

The form sends submissions by email through [FormSubmit](https://formsubmit.co) (free, no account). The address is in the form's `action` in `index.html`.

The **first** submission sends a confirmation email to that address. Click the link in it once, and every submission after that is delivered as an email. After activating, FormSubmit offers a random alias you can use in place of the email address in `action` so the address isn't in the page's form code.

## Custom domain

When the domain is ready: Settings → Pages → Custom domain, enter the domain, then add the DNS records GitHub shows. GitHub provides HTTPS for free.

## Credits

Pony Club logos and the riding photos are from the USPC brand kit and remain © The United States Pony Clubs, Inc.
