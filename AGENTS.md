# CV and Website Maintenance Instructions

This repository is the source for the public website at `miltsakaki.com`.

## Goal
Help maintain the academic CV, research record, and professional information on the site in response to explicit user requests. Prepare reviewable changes; do not publish them autonomously.

## Repository layout
- `index.html`: The static, single-page website. The visible Resume, Publications, Research, and Teaching sections are directly embedded as HTML.
- `public/files/cv.pdf`: A separate downloadable CV PDF. This is a binary file; **no editable CV source (e.g., LaTeX, Markdown, Word, or bibliography source) is currently checked into this repository**.
- `public/`: Website assets. Avoid modifying unrelated assets.

## Editing rules
1. Update only the information the user explicitly authorizes. Treat chat notes as possible context, **not** blanket permission to publish personal or professional details.
2. Read the latest repository files before editing. Find the corresponding entry/section and check for duplicates or conflicting dates.
3. Preserve the site's existing HTML structure, styles, links, classes, section ordering, and indentation. Make targeted edits; do not reformat all of the large `index.html`.
4. For publications, preserve exact author order, venue, year, title, and available DOI/URL. If a required detail is missing or ambiguous, flag it instead of inventing it.
5. For appointments, grants, awards, and talks, preserve official titles and relevant dates. Do not infer start/end dates, award status, or funding amounts.
6. Keep updates in a **new branch and pull request** for user review. Never push changes directly to `master`, merge a PR, or deploy without an explicit request.
7. Clearly list which website sections and files changed. If relevant, mention any downstream information (for example, other sections displaying the same item) that was intentionally left unchanged.

## PDF handling
The PDF at `public/files/cv.pdf` is a separate artifact, not generated from the checked-in HTML. Updating `index.html` **does not update the downloadable PDF**. Never claim they are synchronized. For PDF changes, ask for or locate an approved editable source and an agreed generation process; treat PDF updates as a separate reviewed change.

## Review checklist
- Confirm only requested facts were added or changed, with no duplicates.
- Check that HTML tags, internal anchors, and relevant links remain valid.
- Verify that the proposed diff contains no unrelated formatting changes.
- Explain clearly whether the downloadable PDF is unchanged.
- Present a concise PR summary and any unresolved questions for approval.

## Example request
“Add this NSF award to the Grants section of my website. Prepare a pull request, and do not change the downloadable PDF.”

These instructions guide repository-aware coding agents (including Codex). They do not by themselves create an always-running background agent or grant permission to process every future ChatGPT conversation automatically.
