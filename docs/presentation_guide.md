# Presentation Guide — Campus Event Management System

## Slide Structure (7 slides, aim for 5–7 minutes)

### Slide 1: Title Slide
- **Title:** Campus Event Management System — CampusHub
- **Subtitle:** HCI Lab Presentation
- **Your name, student ID, date**

### Slide 2: User Analysis
- Two user groups: Students (primary), Event Organisers (secondary)
- Three main user goals:
  1. Quickly find relevant events
  2. Register without errors
  3. Leave feedback easily
- Brief mention of how goals map to HCI principles

### Slide 3: Wireframes / Design Process
- Show the three screens: Event Listing, Registration, Feedback
- Explain your design decisions:
  - Dark theme for reduced eye strain
  - Card-based layout for scannability
  - Consistent colour-coded categories

### Slide 4: Live Prototype Demo (or screenshots)
- **Demo Flow 1:** Browse events → filter by category → search
- **Demo Flow 2:** Click "Register" on a card → fill form → see validation → submit → success modal
- **Demo Flow 3:** Navigate to Feedback → select event → click stars → type comment → submit → toast notification

### Slide 5: Usability Testing Findings
- Tested with 3 peers using think-aloud protocol
- Three issues found:
  1. Student ID format unclear (fixed)
  2. Star rating not obviously clickable (fixed)
  3. No auto-redirect after registration (noted for improvement)

### Slide 6: HCI Justification
- **Consistency:** Uniform buttons, navigation, card layouts, colour coding
- **Visibility:** Real-time validation, success modals, toast notifications, star hover effects
- **Error Prevention:** Disabled submit button, format hints, character limits
- **Simplicity:** Minimal form fields, clean card design, single-purpose screens

### Slide 7: Conclusion
- Summary of what was built and tested
- Key takeaway: Applying HCI principles improved usability and user satisfaction
- Questions?

---

## Timing Guide

| Slide | Duration |
|-------|----------|
| 1. Title | 30 seconds |
| 2. User Analysis | 1 minute |
| 3. Design Process | 1 minute |
| 4. Live Demo | 1.5–2 minutes |
| 5. Usability Findings | 1 minute |
| 6. HCI Justification | 1 minute |
| 7. Conclusion + Q&A | 1 minute |

---

## Potential Lecturer Questions & How to Answer

**Q: Why did you choose to build a coded prototype instead of using Figma?**
> "I'm comfortable with HTML/CSS/JS, and a working prototype demonstrates real interactivity — form validation, dynamic filtering, and live feedback — which is harder to showcase in a static mockup."

**Q: How does your system handle error prevention?**
> "The submit button is disabled until all fields pass validation. Input fields show real-time visual feedback (green/red borders), and format hints are displayed before the user types. This prevents errors before they happen."

**Q: Why did you choose a dark theme?**
> "A dark theme reduces eye strain during extended use, which is important for students browsing events on laptops. It also creates strong contrast for accent colours, making CTAs and category badges more visible."

**Q: What would you improve if you had more time?**
> "I would add user authentication, a personal calendar view for registered events, and the ability for event organisers to create events through the system. I'd also implement the auto-redirect from registration to events that was flagged in usability testing."

**Q: How does your feedback mechanism encourage participation?**
> "The star rating is visual and fast — one click gives a rating. The text area is optional-feeling but required, with a low minimum of 10 characters. After submission, the toast confirmation gives immediate satisfaction. These reduce the friction of leaving feedback."
