# Lab 4 — Week 8 MVP backlog and planning

**Planning status:** Proposed. No actual GitHub Project board, team consensus, or implementation completion claimed.

## Board columns
**Backlog → Ready → In Progress → Review → Done**

The team should create a GitHub Project with these five statuses and move cards as work is actually completed.

| Story | Size | Owner (proposed) | Status | Week 8 MVP? |
|---|---|---|---|---|
| US-01 Draft listing form | Medium | Ahmed Farah | Backlog | Yes |
| US-02 Review status | Medium | Diana Moron-Mendez | Backlog | Yes |
| US-03 Public property cards | Small | Tariq Alam | Backlog | Yes |
| US-04 Sponsor description draft | Small | Charles Braden | Backlog | Yes |
| US-05 Reviewer approval of sponsor content | Medium | Diana Moron-Mendez | Backlog | Yes (manual demo) |
| US-06 Edit draft sponsor data | Small | Charles Braden | Backlog | Later |
| US-07 Mobile layout | Medium | Tariq Alam | Backlog | Yes (basic) |
| US-08 Keyboard focus and navigation | Small | Ahmed Farah | Backlog | Yes |

**Size definition:** Small = a simple UI/validation task; Medium = multi-step data or state flow; Large = external integration or major new feature. Sizes are estimates, not actual effort recorded by teammates.

## Week 8 MVP definition
A demo using synthetic data: show property cards with price/location; show a basic draft form; mark content Draft / Pending Review / Approved; render an approved sponsor description with the label **Sponsored**; prevent unapproved examples from being displayed; support mobile display and keyboard focus. Reviewer approval may be a manual simulation, explicitly marked as such, rather than actual authentication.

## Not in MVP
Real payment processing, live real-estate feeds, automatic sponsor publication, automated outreach, real customer profiles, production authorization, or unverifiable claims.

## Proposed role rotation
- Facilitator: Tariq Alam
- Developer: Ahmed Farah
- Test/accessibility lead: Diana Moron-Mendez
- Documentation/release lead: Charles Braden

**Do not present this as agreed role allocation.** Team must approve rotation and each member must produce their own attributable contribution or review.

## Team planning issue agenda
1. Review and approve/dispute simulated assumptions.
2. Decide whether instructor-approved interviews are possible.
3. Confirm owners, priority, scope and acceptance tests.
4. Create a GitHub Project with the five requested statuses.
5. Record tests and a weekly progress note.
6. Ask each member to commit or review their own work.

## Test plan (planned, not executed)
- Attempt saving a valid and invalid listing.
- Try viewing content before approval; it must not appear publicly.
- Approve a sponsor example and verify the **Sponsored** label.
- Keyboard Tab through page controls and inspect focus.
- Review mobile viewport for readable, non-overflowing content.

A working deployed demo URL is **not available as evidence from this discovery document alone**.
