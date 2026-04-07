# CampusHub — Event Management System

A modern, responsive web application for managing campus events with a focus on user experience and accessibility.

## Features

- **Event Discovery**: Browse and search events with rich filtering.
- **Registration**: Streamlined registration modal with real-time validation.
- **Feedback System**: Rate and review events via a modal triggered from any event card.
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.
- **Dark Theme**: Built-in dark theme.
- **Accessibility**: ARIA labels, keyboard navigation, and focus management.

## Tech Stack

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (Design Tokens), Flexbox, Grid, Animations.
- **JavaScript (Vanilla)**: DOM manipulation, Event handling, Form validation.
- **Phosphor Icons**: Icon library.

## Design System

The application uses a comprehensive design system defined in `sass/styles.scss`:

- **Colors**: Custom properties for background, text, accents, and status states.
- **Typography**: Inter font family with a scale from `xs` (0.75rem) to `4xl` (2.75rem).
- **Spacing**: Modular spacing system from `xs` (0.25rem) to `3xl` (4rem).
- **Radius**: Rounded corners from `sm` (0.375rem) to `full` (50rem).
- **Shadows**: Layered shadows for depth and glassmorphism effects.
- **Transitions**: Smooth `cubic-bezier` transitions for all interactive elements.

## File Structure

```
event-planning/
├── index.html          # Single-page application shell (all views)
├── app.js              # Application logic, event data, rendering, validation
└── sass/
    └── styles.scss     # Main stylesheet with design system variables and styles
```

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- (Optional) A local development server (e.g., Live Server for VS Code) to avoid CORS issues if using external APIs later.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd event-planner
   ```

2. Open `index.html` in your web browser.

### Usage

- Browse the **Events Catalog** using the search bar and category filters.
- Click **Register** on an event card to open the registration modal.
- Fill in your name, student ID, email, and confirm the event, then submit.
- Click **Give Feedback** on any event card to open the feedback modal and leave a star rating and comment.

## Development

### Adding New Events

Events are hardcoded in `app.js`. To add a new event:

1. Open `app.js`.
2. Locate the `events` array at the top of the file.
3. Add a new object following the existing structure:
   ```javascript
   {
       id: 11,
       title: "New Event",
       category: "workshop", // workshop | seminar | sports | club
       date: "2026-05-10",
       time: "10:00 – 12:00",
       venue: "Room 101",
       spots: 50,
       spotsLeft: 50,
       description: "Description of the new event."
   }
   ```
4. The new event will automatically appear in the UI and be available in the registration and feedback dropdowns.

### Customizing Styles

Modify the variables in `sass/styles.scss` to change the look and feel:

```scss
:root {
    --bg-primary: #0a0e1a;
    --accent: #6366f1;
    /* ... */
}
```

## License

MIT
