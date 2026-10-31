# Research reports

Say "make a report on <topic>", "research <topic>" or `/report <topic>`. VANTA then:
1. Plans 3-4 searches (strong model).
2. Searches DuckDuckGo (free, no key) and reads up to 8 pages, max 2 per site.
3. Pulls facts out of each page (fast model). A fact is kept ONLY if its quote appears word for word on the page.
4. Writes the report (strong model). Sections must cite facts; stat and chart numbers must appear in the cited quote.
5. Shows a progress card (orb in the corner), then a panel mosaic: summary, stats, charts, sections, source cards, and a "how this was checked" note. Buttons: Tidy, Clear view, Stop, Save as file (to your VANTA folder).

Anything that fails a check is dropped and counted, never invented.

Limits: needs internet. DuckDuckGo's page layout can change or block automated use, in which case VANTA says it found nothing. Some sites refuse to be read. Quality depends on the models in your setup. Tested here only with fake search and fake models.
