# Layman's Guide to the Kenyan Constitution

A lightweight, mobile-first single-page app that pairs the **original, unedited text** of the Constitution of Kenya (2010) with beginner-friendly plain-English explanations after every article. Built with HTML5, Tailwind CSS (CDN), and vanilla JavaScript for easy hosting on GitHub Pages.

## Features

- **Searchable Table of Contents** for Chapters 1-18 and the Schedules.
- **Article Search** by article number or keywords (e.g., "Land", "Arrest", "Devolution").
- **Clean Reading Mode** with serif typography for formal legal text and a modern callout box for explanations.
- **Glossary** for recurring legal terms (Gazette, Quorum, Ex-officio, etc.).
- **Mobile-first layout** with high-contrast, accessible UI and Kenyan national color accents.

## Content JSON Structure

All content lives in `script.js`. Replace the placeholder text with the official Constitution text and your plain-English explanations.

```json
{
  "meta": {
    "title": "Constitution of Kenya (2010)",
    "sources": {
      "officialPdf": "https://www.parliament.go.ke/sites/default/files/2017-05/The_Constitution_of_Kenya_2010.pdf",
      "constituteProject": "https://www.constituteproject.org/constitution/Kenya_2010"
    }
  },
  "chapters": [
    {
      "id": "chapter-1",
      "number": 1,
      "title": "Sovereignty of the People",
      "articles": [
        {
          "number": 1,
          "title": "Sovereignty of the people",
          "formalText": "Full official text goes here.",
          "plainText": "Beginner-friendly explanation goes here.",
          "keywords": ["sovereignty", "citizens", "power"]
        }
      ]
    }
  ],
  "schedules": [
    {
      "id": "schedules",
      "title": "Schedules",
      "entries": [
        {
          "number": "Schedule 1",
          "title": "Oaths and affirmations",
          "formalText": "Full schedule text goes here.",
          "plainText": "Simple explanation goes here.",
          "keywords": ["oath", "affirmation"]
        }
      ]
    }
  ],
  "glossary": [
    {
      "term": "Gazette",
      "definition": "The official government publication used for laws and notices."
    }
  ]
}
```

## Local Development

This project is static. Open `index.html` in a browser or serve the folder via any static server.