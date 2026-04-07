# Usability Testing Report — Campus Event Management System

## Testing Setup

**Prototype:** Working HTML/CSS/JS web application (CampusHub)  
**Participants:** 3 peers (university students)  
**Method:** Think-aloud protocol — participants were asked to complete three tasks while verbalising their thought process.

### Script Given to Participants
> "I'm testing my design, not you. There are no wrong answers. Please try to complete these three tasks and tell me what you're thinking as you go:
> 1. Find a sports event and register for it.
> 2. Go back to the events page and search for 'Python'.
> 3. Give feedback on any event with a 4-star rating."

---

## Three Usability Issues Found

| # | Issue | Severity | Cause (HCI Principle Violated) | Suggested Improvement |
|---|-------|----------|-------------------------------|----------------------|
| 1 | **Student ID format unclear** — 2 out of 3 participants typed their ID number without the "STU" prefix and were confused by the error message. | High | **Error Prevention** — the expected format was not immediately obvious despite the placeholder text. | Add a clearer format hint below the field (e.g., "Format: STU followed by 7 digits") and show an example in the label. ✅ *Fixed in current version.* |
| 2 | **Star rating not obviously clickable** — 1 participant hovered over the stars but did not realise they could click them until prompted. | Medium | **Visibility & Feedback** — the stars appeared decorative rather than interactive. | Add a "Click a star to rate" prompt below the stars and change the cursor to a pointer on hover. ✅ *Fixed in current version.* |
| 3 | **No way to return to events after registering** — After the success modal closed, participants were still on the registration page and had to manually click "Events" in the nav. | Low | **Simplicity** — the user expected the flow to complete by returning them to the listing. | Resolved by redesigning registration as a modal overlay on the events page — closing the modal or clicking "Got it" on the success confirmation returns users directly to the event listing without any navigation. ✅ *Resolved in current version by architecture change.* |

---

## How Tests Were Conducted

1. Each participant sat at a laptop with the prototype open in a browser.
2. They were given the script above and asked to think aloud.
3. The observer noted where they hesitated, clicked incorrectly, or asked questions.
4. After all tasks, participants were asked: "What was the most confusing part?"
5. Notes were compiled into the table above, with issues prioritised by severity.

---

## Summary

The prototype performed well overall. Participants found the category filters and event cards intuitive. All three issues have been resolved in the current version: the Student ID format hint was clarified, the star rating gained a visible "Click a star to rate" prompt, and the navigation issue after registration was eliminated by moving the registration flow into a modal overlay on the events page.
