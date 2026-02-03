The People Shall — v1.2
A bilingual educational app for the Constitution of Kenya. Includes chapter summaries and links to official sources.

## UI/UX roadmap

### Phase 0: Core citizen reader (MVP)
- Dual-pane article reader: original law text followed by simplified analysis.
- Instant language toggle (English and Kiswahili) with a language registry that can add Gikuyu, Dholuo, and Sheng later.
- Keyword search across topics like arrest, taxes, land, education, and health (not just article numbers).
- Chapter and article navigation with clear citations and source links.
- Offline-first baseline: core constitution content available after first install.
- Accessibility basics: adjustable font size, high-contrast mode, and clear tap targets.

### Phase 1: Deep understanding and accessibility
- Read Aloud button for the simplified analysis (per language).
- Real world scenario cards (police conduct, land disputes, school fees) linked to articles.
- Glossary links and inline definitions for legal terms.
- Content expansion to Acts of Parliament (National Police Service Act, Land Act, Criminal Procedure Code) with cross references to the Constitution.

### Phase 2: Community scale and personalization
- Sheng and vernacular toggles with community review workflow.
- User bookmarks, highlights, and learning paths (student, parent, elder).
- Downloadable offline bundles by topic or act.
- Content update pipeline with versioning, audit trail, and source diffs.

## Database schema (original law + simplified analysis mapping)

### Core tables
- languages
  - code (PK), name, script, parent_code (nullable for variants like Sheng)
- documents
  - id (PK), title, doc_type (constitution, act, regulation), jurisdiction, official_citation, source_url
- document_versions
  - id (PK), document_id (FK), version_label, effective_date, source_url, checksum
- sections
  - id (PK), document_id (FK), version_id (FK), parent_id (FK to sections.id)
  - section_type (chapter, part, article, clause, schedule), number_label, title, order_index, anchor_slug
- content_blocks
  - id (PK), section_id (FK), language_code (FK)
  - block_role (original, simplified, summary, example), body, reading_level, tone, source_citation, updated_at

### Search and discovery
- content_keywords
  - id (PK), term, language_code (FK), normalized
- content_keyword_map
  - content_block_id (FK), keyword_id (FK), weight
- topics
  - id (PK), name, description
- section_topics
  - section_id (FK), topic_id (FK), weight
- glossary_terms
  - id (PK), term, language_code (FK), definition, section_id (nullable FK)

### Audio and offline
- audio_assets
  - id (PK), content_block_id (FK), language_code (FK), voice, provider, audio_url, duration_seconds
- offline_packages
  - id (PK), locale_code (FK), package_version, download_url, checksum

### Cross references
- cross_references
  - id (PK), from_section_id (FK), to_section_id (FK), relation_type, note

### Mapping notes
- Dual-pane display comes from two content_blocks for the same section_id and language_code:
  - block_role = original (legal text)
  - block_role = simplified (conversational analysis + examples)
- Acts of Parliament are stored as documents with doc_type = act, linked to their own sections and content_blocks.