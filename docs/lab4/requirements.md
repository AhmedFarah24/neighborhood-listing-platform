# Lab 4 — User stories, acceptance criteria, and traceability

Every story below is a **proposed requirement based on a simulation or assumption**, not confirmed stakeholder feedback.

| ID | Priority | User story | Source | Proposed owner |
|---|---|---|---|---|
| US-01 | High | As a property professional, I want to create a draft property listing so that I can prepare details before publishing. | Simulated property note | Ahmed Farah (proposal) |
| US-02 | High | As a property professional, I want a listing review status so that I know whether it is ready to publish. | Simulated property note | Diana Moron-Mendez (proposal) |
| US-03 | High | As a visitor, I want to view a listing's price and location so that I can decide whether to open it. | Simulated property note | Tariq Alam (proposal) |
| US-04 | High | As a local sponsor, I want to draft a short business description so that I can explain what I offer. | Simulated sponsor note | Charles Braden (proposal) |
| US-05 | High | As a reviewer, I want to approve sponsor text before publication so that unsupported claims do not go live. | Proposed ethical safeguard | Diana Moron-Mendez (proposal) |
| US-06 | Medium | As a local sponsor, I want to revise a draft description so that outdated information can be corrected. | Simulated sponsor note | Charles Braden (proposal) |
| US-07 | Medium | As a phone user, I want layouts to adapt to small screens so that I can browse without sideways scrolling. | Simulated usability note | Tariq Alam (proposal) |
| US-08 | Medium | As a keyboard user, I want visible focus indicators so that I can use the site without a mouse. | Accessibility hypothesis | Ahmed Farah (proposal) |

**Owners are tentative suggestions, not evidence of teammates agreeing to work.**

## High-priority acceptance criteria (Given / When / Then)

**US-01 — Create draft listing**
- Given an authenticated demo editor with valid required fields, when the editor saves a listing, then it is stored as **Draft** and not shown on the public page.
- Given a missing listing title or invalid price, when the editor saves, then clear validation errors appear and no public listing is created.

**US-02 — Listing review state**
- Given a saved draft, when the editor submits it for review, then its status changes to **Pending Review**.
- Given a pending listing, when someone without reviewer permission attempts approval, then approval is denied and the listing remains unpublished.

**US-03 — Property cards**
- Given a published sample listing with price and location, when a visitor opens the listings page, then both fields appear in the card.
- Given a listing without mandatory location information, when the page renders, then it is omitted from public cards or displayed as unavailable, not represented as complete.

**US-04 — Sponsor description**
- Given a sponsor draft with a name and a short factual description, when the sponsor submits it, then the request is marked **Pending Review**.
- Given an empty name or text beyond the allowed length, when a sponsor submits, then a readable error explains what to fix.

**US-05 — Approve sponsor claims**
- Given sponsor content with evidence/verification noted by a reviewer, when the reviewer approves it, then the verified content can be displayed with a visible **Sponsored** label.
- Given an unsupported claim or no approval, when the public sponsor area loads, then that claim is not shown.

## Content approval workflow (proposed)

1. **Draft:** property professional or sponsor enters content using sample/test data.
2. **Validation:** check required fields, safe lengths, and basic formatting.
3. **Pending Review:** editing submitted version does not auto-publish.
4. **Reviewer checks:** confirm listing accuracy and separately verify sponsor claims; request changes for unsupported statements.
5. **Approved:** only approved version becomes eligible for public display; sponsor material visibly labeled **Sponsored**.
6. **Rejected / Needs Changes:** author receives a reason; edits return to Draft/Pending Review.
7. **Changed after approval:** edited version returns to review before appearing publicly.
8. **Remove / Archive:** reviewer can unpublish incorrect or outdated content.

This is a proposed workflow, not a deployed authentication or security implementation.

## Simple traceability matrix

| Source | Theme | Story IDs | Needed validation |
|---|---|---|---|
| Simulated property professional review note | Accuracy | US-01, US-02 | Verify review roles and workflow |
| Simulated property visitor note | Listing clarity | US-03 | Confirm priority fields |
| Simulated local sponsor description note | Sponsor visibility | US-04 | Confirm description needs |
| Ethical approval safeguard | Trust | US-05 | Confirm approval policy |
| Simulated sponsor update note | Maintenance | US-06 | Confirm edit cadence |
| Simulated mobile note | Usability | US-07 | Device testing, real feedback |
| Accessibility hypothesis | Access | US-08 | Keyboard test with prototype |
