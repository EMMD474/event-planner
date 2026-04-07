# HCI Justification — Campus Event Management System

Our Campus Event Management System (CampusHub) was designed with four core HCI principles embedded into every screen and interaction. Below, we explain how each principle is applied, with specific references to the prototype.

---

## 1. Consistency and Standards

The interface follows a uniform design language throughout. Every primary action button uses the same purple gradient style, ensuring that users always recognise clickable actions. Navigation is fixed at the top with a single "Events" link and a consistent logo that always returns the user to the events listing. Registration and feedback are accessed through modals triggered from event cards, keeping the interaction pattern uniform — every card has the same two actions ("Register" and "Give Feedback") in the same position. Event cards follow an identical layout: category badge at the top-left, title, metadata (date, time, venue), description, and action buttons at the bottom. This predictability reduces the learning curve. Category colours (amber for workshops, blue for seminars, green for sports, pink for clubs) are consistent across filter buttons and card badges, following the principle of internal consistency.

## 2. Visibility and Feedback

Users receive immediate, clear feedback for every action they take. When registering for an event, the form fields change border colour in real-time — green for valid input, red for errors — so users know exactly what needs correction before they submit. After successful registration, a modal confirmation appears with a checkmark icon and a message naming the specific event. On the feedback page, the star rating component responds visually on hover (stars enlarge and change colour to gold), and clicking a star immediately updates the label below it (e.g., "Very Good — 4/5"). After submitting feedback, a non-intrusive toast notification slides in from the bottom-right confirming the submission. The navigation bar also adds a subtle shadow when the user scrolls, providing a visual cue that the page has shifted.

## 3. Error Prevention

Rather than only catching errors after submission, the system prevents them from happening. The registration form's "Register Now" button is disabled until all fields pass validation, making it impossible to submit incomplete data. The Student ID field includes a format hint ("STU followed by 7 digits") so users know the expected pattern before typing. Email validation checks for a valid format in real-time. The feedback textarea enforces a 500-character maximum with a live counter, preventing overly long submissions. On the event listing, the "spots left" counter warns users before they register for nearly-full events (displayed in red when ≤ 5 spots remain).

## 4. Simplicity

The design prioritises essential information and minimises clutter. The registration form asks for only four fields — name, student ID, email, and event selection — avoiding unnecessary data collection. Event cards use a concise two-line description with overflow truncation, letting users scan quickly without being overwhelmed by text. The filtering system uses clearly labelled buttons (with emoji icons) rather than complex dropdown menus. The overall layout uses generous whitespace and a restrained colour palette (dark background with accent highlights) to keep the focus on content rather than decoration. Each screen serves one purpose: browse events, register, or give feedback — there is no feature bloat.

---

**Word count: ~420 words**
