# Lab 4 — MVP Product Backlog
**Student:** Ahmed Farah | **Team:** Aster
All items below are proposed features, not validated customer requests. Estimates are initial guesses.

| ID | User story | Priority | Size | Proposed owner |
|---|---|---|---|---|
| US-01 | As a listing coordinator, I want to add a listing so that visitors can view available properties. | High | M | Ahmed |
| US-02 | As a listing coordinator, I want to submit a draft for review so that only checked information goes live. | High | M | Unassigned |
| US-03 | As a reviewer, I want to approve or request changes so that content is checked first. | High | M | Unassigned |
| US-04 | As a sponsor, I want to add business details so that my message can be reviewed. | High | M | Unassigned |
| US-05 | As a sponsor, I want to preview my message so that I can correct mistakes. | Medium | S | Unassigned |
| US-06 | As a listing coordinator, I want to see each listing's status so that I know what happens next. | High | S | Ahmed |
| US-07 | As a visitor, I want keyboard-friendly property cards so that I can browse without a mouse. | High | M | Unassigned |
| US-08 | As a sponsor, I want to see whether my submission was approved so that I know its status. | Medium | S | Unassigned |

## Acceptance criteria (Gherkin)
### US-02: Submit listing
**Happy path**
- Given a listing has all required fields
- When the coordinator selects Submit for Review
- Then its status becomes Submitted and it is not publicly visible yet.

**Invalid data**
- Given a listing is missing the property address
- When the coordinator selects Submit for Review
- Then the form shows an error and keeps the listing as Draft.

### US-03: Review listing
**Happy path**
- Given a submitted listing is awaiting review
- When a reviewer selects Approve
- Then its status becomes Approved.

**Changes needed**
- Given a submitted listing has an incorrect detail
- When the reviewer selects Request Changes and enters a note
- Then its status becomes Changes Requested and the note is visible to the coordinator.

### US-04: Sponsor submission
**Happy path**
- Given a sponsor provides a business name and ad text
- When the sponsor submits the draft
- Then it moves to Submitted and does not appear publicly until approved.

**Missing information**
- Given sponsor ad text is empty
- When the sponsor submits
- Then the app asks for ad text and does not submit the draft.

## Week 8 MVP proposal
Focus on listing entry, sponsor entry, basic approval states, a status view, and accessible cards. Later: analytics and notifications.

## Project board columns to create
Backlog → Ready → In Progress → Review → Done.

## Responsibility and evidence
The individual planning files and GitHub commit on this branch are attributable to Ahmed. A project board, real stakeholder interviews, Gemini critique, tests, and working app implementation are not claimed as completed here.
