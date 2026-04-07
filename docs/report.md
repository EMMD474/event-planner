# CampusHub — Campus Event Management System
**HCI Lab Assignment — Written Report** | ZCAS University

---

## 1. User Analysis

**Target Users**

| User Group | Role | Key Tasks |
|---|---|---|
| Students (Primary) | End users of the system | Browse events, filter by category, register, submit feedback |
| Event Organisers / Staff (Secondary) | Consumers of feedback | Monitor registrations, read student ratings |

**Three Main User Goals**

1. **Find relevant events quickly** — students need to scan and filter a list of upcoming events without being overwhelmed.
2. **Register for an event without errors** — the registration form must guide the user and prevent incorrect submissions.
3. **Leave feedback easily** — a fast star rating plus a short comment should feel low-effort and produce instant confirmation.

---

## 2. System Design

CampusHub is a single-page web application built with HTML5, SCSS, and vanilla JavaScript. All three interactions — event browsing, registration, and feedback — share one page. Registration and feedback are accessed through modal overlays triggered from each event card, so users never navigate away from the event listing.

**Screens**

| Screen | How Accessed | Key Elements |
|---|---|---|
| Event Listing (Home) | Default on page load | Hero stats, search bar, category filter bar, event card grid |
| Registration Modal | "Register" button on any card | Name, Student ID (with format hint), email, event selector, real-time validation, disabled submit until valid |
| Feedback Modal | "Give Feedback" button on any card | Event selector, 5-star rating with hover feedback, text area (10–500 chars), live character counter |

Ten events across four categories (Workshop, Seminar, Sports, Club) are rendered from a JavaScript data array. Filtering and search operate in real-time without a page reload.

*(See wireframes.html for annotated screen layouts.)*

---

## 3. Prototype and Usability Evaluation

**Testing Method:** Think-aloud protocol with 3 peers. Each participant completed three tasks: (1) find a sports event and register, (2) search for "Python", (3) give a 4-star rating on any event.

| # | Issue Found | Severity | Fix Applied |
|---|---|---|---|
| 1 | **Student ID format unclear** — 2 of 3 participants typed the number without the "STU" prefix and were confused by the error message | High | Added a persistent format hint below the field: *"Format: STU followed by 7 digits"*. The validation error message also shows an example (`STU2024001`). ✅ Fixed |
| 2 | **Star rating appeared decorative** — 1 participant hovered over the stars but did not realise they were clickable until prompted | Medium | Added a *"Click a star to rate"* prompt beneath the stars and applied a pointer cursor on hover. Stars enlarge and turn gold on hover for clear affordance. ✅ Fixed |
| 3 | **No route back to events after registering** — participants were left on the registration page and had to click "Events" in the nav manually | Low | Resolved architecturally: registration was moved into a modal overlay on the events page. Closing the modal or clicking "Got it" on the success confirmation returns the user to the listing immediately. ✅ Fixed |

---

## 4. HCI Justification

**Consistency and Standards**
Every primary action uses the same purple gradient button. Event cards share an identical structure across all categories: badge → title → date/time/venue metadata → description → action buttons. Category colours (amber = Workshop, blue = Seminar, green = Sports, pink = Club) are identical on the filter bar and the card badges. The navbar logo always navigates home, matching standard web conventions.

**Visibility and Feedback**
Form fields update their border colour in real-time — green for valid, red for invalid — so users see what needs fixing before they submit. Successful registration triggers a modal naming the specific event registered for. Feedback submission shows a slide-in toast notification from the bottom-right. The star component updates a text label on every click (e.g., *"Very Good — 4/5"*) and the navbar gains a shadow on scroll to show page position.

**Error Prevention**
Both form submit buttons are disabled until every field passes validation, making incomplete submission technically impossible. The Student ID hint is shown before the user types, not only after an error. Email format is validated in real-time. The feedback text area enforces a 500-character maximum with a live counter, preventing oversized submissions. Event cards display a red *"X spots left"* warning when availability drops to 5 or fewer.

**Simplicity**
The registration form collects exactly four fields — no unnecessary data. Event cards show a two-line truncated description so the listing is scannable rather than overwhelming. Category filters are clearly labelled icon buttons, avoiding complex dropdown menus. Each modal serves a single purpose. The overall layout uses a restrained colour palette and generous whitespace to keep focus on content.
