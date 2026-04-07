/* ========================================
   CampusHub — Application Logic
   ======================================== */

// ─── EVENT DATA ───
const events = [
    { id: 1, title: "Web Development Workshop", category: "workshop", date: "2026-04-15", time: "09:00 – 12:00", venue: "Computer Lab A, Block 3", spots: 30, spotsLeft: 8, description: "Learn modern HTML, CSS, and JavaScript fundamentals. Hands-on session building responsive websites from scratch." },
    { id: 2, title: "AI & Machine Learning Seminar", category: "seminar", date: "2026-04-18", time: "14:00 – 16:00", venue: "Lecture Hall 2", spots: 120, spotsLeft: 45, description: "Industry experts discuss the latest trends in artificial intelligence and how students can prepare for AI careers." },
    { id: 3, title: "Inter-Faculty Football Tournament", category: "sports", date: "2026-04-20", time: "08:00 – 17:00", venue: "University Sports Ground", spots: 200, spotsLeft: 3, description: "Annual football competition between all faculties. Register your team and compete for the Chancellor's Cup." },
    { id: 4, title: "Photography Club Exhibition", category: "club", date: "2026-04-22", time: "10:00 – 15:00", venue: "Student Centre Gallery", spots: 50, spotsLeft: 22, description: "Showcase your best photographs or come admire the work of talented campus photographers." },
    { id: 5, title: "Cybersecurity Bootcamp", category: "workshop", date: "2026-04-25", time: "09:00 – 16:00", venue: "Computer Lab B, Block 3", spots: 25, spotsLeft: 12, description: "Intensive one-day bootcamp covering ethical hacking, network security, and penetration testing basics." },
    { id: 6, title: "Research Methodology Seminar", category: "seminar", date: "2026-04-28", time: "10:00 – 12:00", venue: "Postgraduate Hall", spots: 80, spotsLeft: 35, description: "Essential seminar for final-year students on academic research methods, citation styles, and thesis writing." },
    { id: 7, title: "Basketball 3-on-3 Challenge", category: "sports", date: "2026-04-30", time: "14:00 – 18:00", venue: "Indoor Sports Complex", spots: 60, spotsLeft: 18, description: "Fast-paced 3-on-3 basketball tournament. Form a team of three and sign up for an action-packed afternoon." },
    { id: 8, title: "Drama Club: Open Mic Night", category: "club", date: "2026-05-02", time: "18:00 – 21:00", venue: "Amphitheatre", spots: 150, spotsLeft: 67, description: "Poetry, comedy, music, spoken word — take the stage or enjoy performances by fellow students." },
    { id: 9, title: "Data Science with Python", category: "workshop", date: "2026-05-05", time: "09:00 – 13:00", venue: "Computer Lab A, Block 3", spots: 30, spotsLeft: 15, description: "Hands-on workshop using Python, Pandas, and Matplotlib for data analysis and visualisation." },
    { id: 10, title: "Entrepreneurship Talk Series", category: "seminar", date: "2026-05-08", time: "15:00 – 17:00", venue: "Business School Auditorium", spots: 100, spotsLeft: 40, description: "Successful young entrepreneurs share their journey from campus idea to thriving business." }
];

// ─── DOM REFERENCES ───
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const navLinks = $$('.nav-link');
const pages = $$('.page');
const hero = $('#hero');
const eventsGrid = $('#events-grid');
const emptyState = $('#empty-state');
const searchInput = $('#search-input');
const filterBtns = $$('.filter-btn');
const mobileMenuBtn = $('#mobile-menu-btn');
const navLinksList = $('.nav-links');

// Registration form
const regForm = $('#registration-form');
const regFullname = $('#reg-fullname');
const regStudentId = $('#reg-studentid');
const regEmail = $('#reg-email');
const regEvent = $('#reg-event');
const regSubmit = $('#reg-submit');

// Feedback form
const fbForm = $('#feedback-form');
const fbEvent = $('#fb-event');
const fbComment = $('#fb-comment');
const fbSubmit = $('#fb-submit');
const starBtns = $$('.star');
const ratingText = $('#rating-text');
const charCount = $('#char-count');

// Modal & Toast
const modalOverlay = $('#modal-overlay');
const modalIcon = $('#modal-icon');
const modalTitle = $('#modal-title');
const modalMessage = $('#modal-message');
const modalCloseBtn = $('#modal-close-btn');
const toast = $('#toast');
const toastIcon = $('#toast-icon');
const toastMessage = $('#toast-message');

// ─── STATE ───
let currentFilter = 'all';
let currentSearch = '';
let selectedRating = 0;

// ─── UTILITY ───
function formatDate(dateStr) {
    const d = new Date(dateStr + 'T00:00:00');
    return d.toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' });
}

// ─── NAVIGATION (SPA ROUTING) ───
function navigateTo(page) {
    // Update nav links
    navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.page === page);
    });
    // Update pages
    pages.forEach(p => {
        p.classList.toggle('active', p.id === `page-${page}`);
    });
    // Show hero only on events page
    hero.style.display = page === 'events' ? '' : 'none';
    // Close mobile menu
    navLinksList.classList.remove('open');
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.page);
    });
});

$('#logo-link').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('events');
});

// Mobile menu
mobileMenuBtn.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
});

// ─── RENDER EVENT CARDS ───
function renderEvents() {
    let filtered = events;

    // Filter by category
    if (currentFilter !== 'all') {
        filtered = filtered.filter(ev => ev.category === currentFilter);
    }

    // Filter by search
    if (currentSearch) {
        const q = currentSearch.toLowerCase();
        filtered = filtered.filter(ev =>
            ev.title.toLowerCase().includes(q) ||
            ev.description.toLowerCase().includes(q) ||
            ev.venue.toLowerCase().includes(q)
        );
    }

    if (filtered.length === 0) {
        eventsGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    eventsGrid.innerHTML = filtered.map((ev, i) => `
        <div class="event-card" style="animation-delay: ${i * 0.06}s">
            <div class="card-top">
                <span class="card-category ${ev.category}">${getCategoryLabel(ev.category)}</span>
                <span class="card-spots ${ev.spotsLeft <= 5 ? 'low' : ''}">${ev.spotsLeft} spots left</span>
            </div>
            <h3 class="card-title">${ev.title}</h3>
            <div class="card-meta">
                <span><i class="ph ph-calendar-blank"></i> ${formatDate(ev.date)}</span>
                <span><i class="ph ph-clock"></i> ${ev.time}</span>
                <span><i class="ph ph-map-pin"></i> ${ev.venue}</span>
            </div>
            <p class="card-desc">${ev.description}</p>
            <div class="card-actions">
                <button class="btn btn-primary btn-sm" onclick="registerForEvent(${ev.id})" id="register-btn-${ev.id}">Register</button>
                <button class="btn btn-secondary btn-sm" onclick="feedbackForEvent(${ev.id})" id="feedback-btn-${ev.id}">Give Feedback</button>
            </div>
        </div>
    `).join('');
}

function getCategoryLabel(cat) {
    const labels = { workshop: '<i class="ph ph-wrench"></i> Workshop', seminar: '<i class="ph ph-microphone-stage"></i> Seminar', sports: '<i class="ph ph-soccer-ball"></i> Sports', club: '<i class="ph ph-mask-happy"></i> Club' };
    return labels[cat] || cat;
}

// ─── CATEGORY FILTERING ───
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.category;
        renderEvents();
    });
});

// ─── SEARCH ───
searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    renderEvents();
});

// ─── POPULATE EVENT DROPDOWNS ───
function populateEventDropdowns() {
    const options = events.map(ev => `<option value="${ev.id}">${ev.title} — ${formatDate(ev.date)}</option>`).join('');
    regEvent.innerHTML = `<option value="">— Choose an event —</option>${options}`;
    fbEvent.innerHTML = `<option value="">— Choose an event —</option>${options}`;
}

// ─── REGISTER FROM CARD ───
function registerForEvent(eventId) {
    navigateTo('register');
    regEvent.value = eventId;
    validateRegForm();
}

function feedbackForEvent(eventId) {
    navigateTo('feedback');
    fbEvent.value = eventId;
    validateFbForm();
}

// ─── REGISTRATION FORM VALIDATION ───
// HCI: Error Prevention — disable submit until all fields valid, show inline errors
function validateRegForm() {
    const errors = {};
    let valid = true;

    // Full name
    if (!regFullname.value.trim()) {
        errors.fullname = 'Please enter your full name';
        valid = false;
    } else if (regFullname.value.trim().length < 3) {
        errors.fullname = 'Name must be at least 3 characters';
        valid = false;
    }

    // Student ID
    const sidPattern = /^STU\d{7}$/i;
    if (!regStudentId.value.trim()) {
        errors.studentid = 'Please enter your student ID';
        valid = false;
    } else if (!sidPattern.test(regStudentId.value.trim())) {
        errors.studentid = 'Format: STU followed by 7 digits (e.g. STU2024001)';
        valid = false;
    }

    // Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regEmail.value.trim()) {
        errors.email = 'Please enter your email address';
        valid = false;
    } else if (!emailPattern.test(regEmail.value.trim())) {
        errors.email = 'Please enter a valid email address';
        valid = false;
    }

    // Event selection
    if (!regEvent.value) {
        errors.event = 'Please select an event';
        valid = false;
    }

    // Update UI
    updateFieldState(regFullname, '#error-fullname', errors.fullname);
    updateFieldState(regStudentId, '#error-studentid', errors.studentid);
    updateFieldState(regEmail, '#error-email', errors.email);
    updateFieldState(regEvent, '#error-event', errors.event);

    regSubmit.disabled = !valid;
    return valid;
}

function updateFieldState(input, errorSel, errorMsg) {
    const errorEl = $(errorSel);
    if (errorMsg) {
        input.classList.add('error');
        input.classList.remove('valid');
        errorEl.textContent = errorMsg;
    } else if (input.value) {
        input.classList.remove('error');
        input.classList.add('valid');
        errorEl.textContent = '';
    } else {
        input.classList.remove('error', 'valid');
        errorEl.textContent = '';
    }
}

// Live validation on input
[regFullname, regStudentId, regEmail, regEvent].forEach(el => {
    el.addEventListener('input', validateRegForm);
    el.addEventListener('change', validateRegForm);
});

// Submit registration
regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateRegForm()) return;

    const eventName = regEvent.options[regEvent.selectedIndex].text;
    showModal(
        '<i class="ph-fill ph-confetti"></i>',
        'Registration Successful!',
        `You have been registered for <strong>${eventName.split(' — ')[0]}</strong>. Check your email for confirmation details.`
    );
    regForm.reset();
    regSubmit.disabled = true;
    $$('#registration-form .form-input').forEach(el => el.classList.remove('valid', 'error'));
});

// ─── FEEDBACK FORM ───
// Star rating
const ratingLabels = ['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent'];

starBtns.forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value);
        updateStars();
        validateFbForm();
    });

    star.addEventListener('mouseenter', () => {
        const val = parseInt(star.dataset.value);
        starBtns.forEach(s => {
            s.classList.toggle('hovered', parseInt(s.dataset.value) <= val);
        });
    });

    star.addEventListener('mouseleave', () => {
        starBtns.forEach(s => s.classList.remove('hovered'));
    });
});

function updateStars() {
    starBtns.forEach(s => {
        s.classList.toggle('selected', parseInt(s.dataset.value) <= selectedRating);
    });
    ratingText.textContent = selectedRating > 0
        ? `${ratingLabels[selectedRating]} (${selectedRating}/5)`
        : 'Click a star to rate';
}

// Char count
fbComment.addEventListener('input', () => {
    const len = fbComment.value.length;
    charCount.textContent = len;
    if (len > 500) {
        fbComment.value = fbComment.value.substring(0, 500);
        charCount.textContent = 500;
    }
    validateFbForm();
});

function validateFbForm() {
    let valid = true;
    const errors = {};

    if (!fbEvent.value) { errors.fbEvent = 'Please select an event'; valid = false; }
    if (selectedRating === 0) { errors.rating = 'Please select a rating'; valid = false; }
    if (!fbComment.value.trim()) { errors.fbComment = 'Please enter your feedback'; valid = false; }
    else if (fbComment.value.trim().length < 10) { errors.fbComment = 'Feedback must be at least 10 characters'; valid = false; }

    updateFieldState(fbEvent, '#error-fb-event', errors.fbEvent);
    $('#error-rating').textContent = errors.rating || '';
    updateFieldState(fbComment, '#error-fb-comment', errors.fbComment);

    fbSubmit.disabled = !valid;
    return valid;
}

fbEvent.addEventListener('change', validateFbForm);

// Submit feedback
fbForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateFbForm()) return;

    showToast('<i class="ph-fill ph-check-circle"></i>', 'Thank you! Your feedback has been submitted.');

    fbForm.reset();
    selectedRating = 0;
    updateStars();
    fbSubmit.disabled = true;
    charCount.textContent = '0';
    $$('#feedback-form .form-input').forEach(el => el.classList.remove('valid', 'error'));
});

// ─── MODAL ───
function showModal(icon, title, message) {
    modalIcon.innerHTML = icon;
    modalTitle.textContent = title;
    modalMessage.innerHTML = message;
    modalOverlay.classList.remove('hidden');
}

modalCloseBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.classList.add('hidden');
});

// ─── TOAST ───
function showToast(icon, message) {
    toastIcon.innerHTML = icon;
    toastMessage.textContent = message;
    toast.classList.remove('hidden', 'toast-exit');

    setTimeout(() => {
        toast.classList.add('toast-exit');
        setTimeout(() => toast.classList.add('hidden'), 300);
    }, 3500);
}

// ─── NAVBAR SCROLL EFFECT ───
window.addEventListener('scroll', () => {
    $('#navbar').classList.toggle('scrolled', window.scrollY > 20);
});

// ─── INIT ───
document.addEventListener('DOMContentLoaded', () => {
    populateEventDropdowns();
    renderEvents();
});
