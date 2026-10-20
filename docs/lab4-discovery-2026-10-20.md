# Lab 4 — Discovery, Responsible Outreach & Product Requirements
**Project:** Neighborhood Listing Platform | **Team:** Aster | **Date:** 2026-10-20
**Status:** Draft for team and instructor review. All interview responses below are **SIMULATED**, not real stakeholder evidence. Gemini and Google AI Studio checks have NOT been performed.

## 1. Stakeholders, facts, and assumptions
**Property professional:** a real-estate agent or property manager.
- Known project fact: the planned platform includes property listings.
- Assumptions to test: agents need straightforward listing updates, clear approval statuses, and accurate photos.
**Local sponsor:** a neighborhood business interested in advertising.
- Known project fact: the planned platform includes local sponsor content.
- Assumptions to test: sponsors want local visibility, easy ad submission, and transparent approval.

## 2. Discovery question generation and review
**ChatGPT draft:** Questions below were drafted as starting points.
**Gemini review status:** NOT DONE. Paste questions into Gemini and ask: "Flag leading, biased, privacy-invasive, or double-barreled questions; recommend neutral alternatives." Record its feedback here before claiming completion.
**Example self-review (not Gemini output):**
- Leading: "Wouldn't more advertising bring you more customers?" -> Neutral: "What outcomes would make sponsorship useful to you?"
- Privacy-invasive: "What is your monthly income?" -> Neutral: "How do you decide whether an advertising channel is worthwhile?"
- Leading: "Why is your current listing tool difficult?" -> Neutral: "How does your current listing process work?"

## 3. Eight selected neutral questions
1. Walk me through how you currently publish or promote properties or local services. (workflow)
2. Which parts of that process take the most effort? (workflow)
3. Who do you hope to reach, and what information does that audience need? (audience)
4. What information would you want displayed on a listing or sponsor card? (content)
5. Who should review content before it goes live, and what should they check? (approval)
6. What would tell you the platform is working well? (success)
7. What makes a website easy or hard for you or your audience to use? (accessibility)
8. What should happen when submitted information is missing or incorrect? (error handling)

## 4. Transparent interview invitation
"Hello! I'm a student working on a neighborhood listing platform for a class project. I'm learning how property professionals and local businesses manage listings and promotions. Would you be willing to answer eight questions in a voluntary 10–15-minute conversation? This is for coursework and product planning, not a sales pitch. I'll keep only minimal, de-identified notes for class/team analysis; I won't publish your name or contact details. You can skip any question or stop at any time. Thank you!"
**Outreach gate:** Instructors must approve real outreach first. No automated calls, scraped contacts, bulk emails, or AI impersonation. No outreach is claimed in this document.

## 5. Simulated interviews (fictional examples — NOT actual interviews)
**Property professional simulation**
- P1: "I update listings in more than one place."
- P2: "Changing the price and photos in multiple places takes time."
- P3: "Buyers need accurate prices, photos, and basic details."
- P4: "I would show location area, price, beds, baths, and photos."
- P5: "The person responsible for the listing should approve the details."
- P6: "I would look at inquiry quality and listing accuracy."
- P7: "Readable text and keyboard navigation would help."
- P8: "Incomplete listings should stay unpublished until corrected."

**Local sponsor simulation**
- S1: "I post on social media and sometimes local directories."
- S2: "I repeat details across sites."
- S3: "I want to reach people in the neighborhood."
- S4: "I would include hours, service description, and a website link."
- S5: "I want to approve any claims made about my business."
- S6: "I would look at visits or customer inquiries."
- S7: "Clear labels and mobile-friendly pages matter."
- S8: "If information is missing, tell me what to fix before submission."

**Privacy:** No real names, phone numbers, customer records, precise personal addresses, or sensitive data were collected.

## 6. Themes with source cross-check
**Google AI Studio status:** NOT RUN. The following themes are a ChatGPT-created **example**, not AI Studio output. Run the de-identified notes in AI Studio and replace or confirm these themes.
- T1: Reducing duplicate updates. Supported by P1, P2, S1, S2.
- T2: Display useful and accurate public information. Supported by P3, P4, S3, S4.
- T3: Review and fix content before publication. Supported by P5, P8, S5, S8.
- T4: Define measurable success. Supported by P6, S6.
- T5: Accessibility and usability. Supported by P7, S7.
**Line-by-line check:** P1→T1; P2→T1; P3→T2; P4→T2; P5→T3; P6→T4; P7→T5; P8→T3; S1→T1; S2→T1; S3→T2; S4→T2; S5→T3; S6→T4; S7→T5; S8→T3. No claim beyond these simulated notes is treated as validated evidence.

## 7. Working-hypothesis personas (NOT verified)
**Persona A — Property professional**
- Scenario: Maintains multiple active property listings.
- Goal: Update listing details easily.
- Pain point: Duplicating updates across places (simulated P1–P2).
- Product hypothesis: Simple edit forms and review statuses may help.
**Persona B — Local sponsor**
- Scenario: Promotes a local shop via social media/directories.
- Goal: Keep business information accurate and reach nearby people.
- Pain point: Repeating details across channels (simulated S1–S2).
- Product hypothesis: A short ad-submission form and approval process may help.
Do not treat ages, demographics, or invented traits as evidence.

## 8. Proposed user stories, priority, and size
| ID | User story | Priority | Estimate |
|---|---|---|---|
| US1 | As a property professional, I want to submit a property listing so that people can view it after review. | High | M |
| US2 | As a property professional, I want to edit my listing so that information stays accurate. | High | M |
| US3 | As a visitor, I want to search property listings by area so that I can find relevant options. | High | M |
| US4 | As a sponsor, I want to submit a business card so that I can reach a local audience. | High | M |
| US5 | As a reviewer, I want to approve or return submitted content so that unsupported claims are not published. | High | M |
| US6 | As a visitor, I want text alternatives for images and keyboard access so that the website is usable with assistive tools. | High | M |
| US7 | As a sponsor, I want to revise rejected information so that it can be resubmitted. | Medium | S |
| US8 | As a visitor, I want to see photos and basic property details so that I can evaluate listings. | Medium | S |

## 9. High-priority acceptance criteria (Given/When/Then)
- **US1:** Given a property professional has a submission form, when valid required fields are entered and submitted, then the listing is saved as **Pending**, not published. Given a required field is empty, when submitted, then an error identifies the missing field.
- **US2:** Given a professional is authorized to edit their own listing, when they change a price or photo, then the change is saved and requires review before public display. Given they do not own it, when they attempt an edit, then the change is denied.
- **US3:** Given published listings exist, when a visitor searches by area, then matching published listings appear. Given none match, when searching, then a clear empty-state message appears.
- **US4:** Given a sponsor completes required business fields, when they submit, then a Pending sponsor card is created. Given a required description is missing, when submitted, then the form explains how to fix it.
- **US5:** Given a reviewer opens a Pending submission, when the reviewer approves it after checking facts/permissions, then it becomes Published. Given claims lack support, when the reviewer returns it, then it remains unpublished with a reason.
- **US6:** Given a visitor navigates using only a keyboard, when tabbing through the page, then primary controls can be reached and activated. Given a meaningful image appears, when assistive technology reads it, then useful alternative text is available.

## 10. GitHub Project board plan
Create a GitHub Project with these exact statuses: **Backlog → Ready → In Progress → Review → Done**.
Suggested initial placement (planning only; not proof of implementation):
- Backlog: US7, US8
- Ready: US1, US3, US4, US5, US6
- In Progress: US2 only if a teammate is actually working on it; otherwise Ready
- Review: leave empty until work is ready for review
- Done: leave empty until verified complete

## 11. Week 8 MVP
**Proposed minimum deliverable:** Visitors can browse and search approved sample properties, see their details, access pages by keyboard, and view approved sponsor cards. Property/sponsor submissions are captured as Pending and reviewed before publication.
**Out of scope:** billing, messaging automation, advertising analytics, advanced filters.
**Sizing:** S = a small change; M = several components or data changes; L = cross-system feature with higher uncertainty. Estimates are tentative, not time guarantees.
**Team decision pending:** Assign owners, confirm feasibility, adjust Week 8 scope.

## 12. Content approval workflow
1. Property professional or sponsor submits content with permission to use included photos and claims.
2. Validate required fields; mark submission **Pending** (never automatically public).
3. Reviewer checks accuracy, attribution/image permission, potentially misleading claims, and accessibility.
4. Reviewer either **Approves → Published** or **Returns for edits → Changes Requested** with a specific reason.
5. On edits, move to **Pending** again; keep simple history of reviewer decisions.
6. On a discovered error after publication, unpublish/flag and correct before reposting.

## 13. Remaining evidence and ethics checklist
- [x] Stakeholder groups, facts, assumptions
- [x] Eight neutral questions and draft invitation
- [x] Explicitly labeled simulated interview notes
- [x] Theme draft cross-checked against each simulated note
- [x] Hypothesis personas, eight user stories, high-priority acceptance criteria
- [x] MVP, estimates, approval workflow, proposed board setup
- [ ] Run Gemini review and record actual feedback
- [ ] Run Google AI Studio and compare its actual output
- [ ] Obtain instructor approval **before any actual outreach**
- [ ] Obtain and record any real interview only if approved (optional if simulation accepted)
- [ ] Create GitHub Project board; link issues and confirm statuses
- [ ] Team review and prioritization; record team decisions

**Academic integrity:** This file is a preparatory artifact produced with ChatGPT. It is not proof of completed external interviews, Gemini validation, AI Studio use, instructor approval, a live Project board, or team agreement. Follow the course's AI-use rules and disclose assistance where required.
