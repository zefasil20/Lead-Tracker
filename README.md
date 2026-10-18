# Lead Tracker

A lightweight Chrome extension for saving and managing important links or leads.

## Description

Lead Tracker is a simple browser extension that lets you:
- save a custom URL or text input
- save the current active tab with one click
- view your saved leads in a popup window
- delete all saved leads
- keep entries saved locally in the browser using `localStorage`

This project is built with plain HTML, CSS, and JavaScript, making it easy to understand and modify.

## Features

- Save a lead manually from the input field
- Save the current tab URL instantly
- Display saved leads as clickable links
- Delete all saved entries with a double-click action
- Persistent storage in the browser

## Project Structure

```text
Lead Tracker/
├── index.html      # Popup layout
├── index.js        # Extension logic
├── style.css       # Styling for the popup
├── manifest.json   # Chrome extension configuration
├── icon.png        # Extension icon
└── README.md       # Project documentation
```

## How to Use

1. Open Google Chrome or a Chromium-based browser.
2. Go to `chrome://extensions`.
3. Enable Developer mode.
4. Click "Load unpacked".
5. Select this project folder.
6. Click the extension icon in the toolbar to open the popup.

### Saving a lead
- Type a URL or value in the input box.
- Click `SAVE INPUT`.

### Saving the current tab
- Open the page you want to save.
- Click `SAVE TAB` in the extension popup.

### Deleting all leads
- Double-click `DELLETE ALL`.

## Tech Stack

- HTML
- CSS
- JavaScript
- Chrome Extension Manifest v3

## Notes

This extension uses the `tabs` permission so it can access the current browser tab URL. Saved leads are stored in the browser's local storage, so they remain available until manually cleared.

## License

This project is open for personal learning and modification.
