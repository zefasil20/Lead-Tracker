# Lead Tracker

<p align="center">
  <img src="./icon.png" alt="Lead Tracker app icon" width="160" />
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-green" />
  <img alt="Platform" src="https://img.shields.io/badge/Platform-Chrome%20Extension-blue" />
  <img alt="Stack" src="https://img.shields.io/badge/Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-orange" />
</p>

A lightweight and practical Chrome extension for saving valuable web pages, potential leads, and important links in a single, easy-to-access popup.

## Overview

Lead Tracker is built for people who frequently browse the web and want a simple way to keep track of pages they may need later. Whether it is a promising client lead, a useful article, or an important resource, the extension makes it easy to save a link instantly and revisit it later without cluttering your browser tabs.

The project is intentionally simple and beginner-friendly, using only core web technologies to deliver a fast, reliable workflow.

## Features

- Save custom URLs or notes manually
- Save the current active tab in one click
- View saved entries as clickable links
- Clear all saved leads instantly
- Keep data persistent with browser `localStorage`
- Minimal setup with no external dependencies

## Screenshots

### Extension icon

<p align="center">
  <img src="./icon.png" alt="Lead Tracker extension icon" width="140" />
</p>

> This project currently focuses on a clean, minimal popup interface. It is intentionally easy to extend with additional features such as editing, categories, and search.

## Project Structure

```text
Lead Tracker/
├── index.html        # Popup UI
├── index.js          # Extension logic and local storage handling
├── style.css         # Popup styling
├── manifest.json     # Chrome extension manifest (Manifest V3)
├── icon.png          # Extension icon
├── README.md         # Project documentation
└── LICENSE           # Optional license file
```

## Installation

1. Open Google Chrome or another Chromium-based browser.
2. Navigate to `chrome://extensions`.
3. Enable Developer mode.
4. Click `Load unpacked`.
5. Select the project folder.
6. Click the extension icon in the toolbar to begin using it.

## Usage

### Save a lead manually
- Enter a URL or custom value in the input field.
- Click `SAVE INPUT`.

### Save the current tab
- Open the page you want to keep.
- Click `SAVE TAB`.

### Delete saved entries
- Double-click `DELLETE ALL` to clear the list.

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Chrome Extension Manifest V3

## Notes

This extension requests the `tabs` permission so it can access the current page URL. Saved entries are stored in the browser's local storage and remain available until manually cleared.

## Future Enhancements

- Add editing and deleting for individual leads
- Add search and filtering for saved entries
- Support categories or tags
- Improve the popup interface with a more modern design
- Add export/import support for saved data

## License

This project is open for learning, experimentation, and personal use.

## Contributing

Contributions are welcome. If you want to improve the extension, feel free to open a pull request or suggest enhancements.

