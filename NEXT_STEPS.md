# Mark Smith Yoga - Next Steps

## What is already uploaded to GitHub

These website files have already been pushed to:

https://github.com/MarkSmithYoga/mark-smith-yoga

- `index.html`
- `chapter.html`
- `styles.css`
- `script.js`
- `README.md`

## What still needs to be uploaded after image work

Upload the full `assets` folder after the avatar sheets are cropped into individual pose images.

Current generated source sheets are saved here:

```text
assets/avatar-source-sheets
```

Final individual avatar files should go here:

```text
assets/avatars
```

Example final avatar filenames:

```text
assets/avatars/down-dog-shoulder-bounce.png
assets/avatars/low-lunge-hip-bounce.png
assets/avatars/wall-plank-line.png
assets/avatars/chest-to-wall-hold.png
assets/avatars/air-baby-prep.png
```

The site already knows how to look for those image paths. If a file is missing, it shows initials as a placeholder.

## Recommended workflow

1. Crop each source sheet into individual PNG images.
2. Rename each image using lowercase words and hyphens.
3. Put individual images into `assets/avatars`.
4. Preview `index.html`.
5. Commit and push the new `assets` folder to GitHub.
6. GitHub Pages will update after the push.

## Git upload command later

Run these commands from:

```text
C:\Users\mrkas\Documents\New Mark Website
```

```text
git add assets
git commit -m "Add avatar images"
git push
```

## Important

Do not upload only the source sheets if you want the website pose cards to show individual images.
The source sheets are useful as artwork masters, but the website needs cropped individual PNG files in `assets/avatars`.
