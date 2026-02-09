# Layman's Guide to the Kenyan Constitution

A lightweight, mobile-first single-page app that pairs the **original, unedited text** of the Constitution of Kenya (2010) with beginner-friendly plain-English explanations after every article. Built with HTML5, Tailwind CSS (CDN), and vanilla JavaScript for easy hosting on GitHub Pages.

## Features

- **Searchable Table of Contents** for Chapters 1-18 and the Schedules.
- **Article Search** by article number or keywords (e.g., "Land", "Arrest", "Devolution").
- **Clean Reading Mode** with serif typography for formal legal text and a modern callout box for explanations.
- **Glossary** for recurring legal terms (Gazette, Quorum, Ex-officio, etc.).
- **Mobile-first layout** with high-contrast, accessible UI and Kenyan national color accents.

## Content JSON Structure

All content lives in `content.json` and is loaded by `script.js`. The file currently contains the full Constitution text sourced from the Constitute Project, plus a plain-English explanation field after every article. Update the `plainText` fields to refine or expand the explanations.

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
          "plainTextSw": "Maelezo rahisi ya Kiswahili yanawekwa hapa.",
          "keywords": ["sovereignty", "citizens", "power"]
        }
      ]
    }
  ],
  "schedules": [
    {
      "id": "schedule-1",
      "number": 1,
      "title": "FIRST SCHEDULE. COUNTIES (Article 6 (1))",
      "entries": [
        {
          "number": "Schedule 1",
          "title": "Counties (Article 6 (1))",
          "formalText": "Full schedule text goes here.",
          "plainText": "Simple explanation goes here.",
          "keywords": ["counties", "schedule"]
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

This project is static. Because it loads `content.json`, serve the folder with any static server (e.g., `python3 -m http.server`) and open the provided URL in a browser.