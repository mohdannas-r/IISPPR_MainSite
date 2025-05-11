
## Project Structure

```
prakriti-website/
│
├── public/                   # Static assets served as-is
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── assets/               # Non-component assets
│   │   ├── images/           # Image files
│   │   │   ├── hero/         # Hero section images
│   │   │   ├── projects/     # Project images
│   │   │   ├── gallery/      # Gallery images
│   │   │   ├── testimonials/ # Testimonial profile pictures
│   │   │   ├── icons/        # Icon assets
│   │   │   └── logos/        # Logo files
│   │   │
│   │   └── fonts/           # Custom fonts if any
│   │
│   ├── components/          # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx   # Wrapper component
│   │   │
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   └── Slider.jsx
│   │   │
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── Impact.jsx
│   │   │   ├── ProjectsHighlight.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── StatsSection.jsx
│   │   │   └── TestimonialsSection.jsx
│   │   │
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   └── ProjectsList.jsx
│   │   │
│   │   ├── about/
│   │   │   ├── Mission.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WorkProcess.jsx
│   │   │
│   │   ├── gallery/
│   │   │   ├── GalleryGrid.jsx
│   │   │   └── GalleryCard.jsx
│   │   │
│   │   ├── testimonials/
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── TestimonialGrid.jsx
│   │   │
│   │   └── contact/
│   │       ├── ContactForm.jsx
│   │       └── ContactInfo.jsx
│   │
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Homepage
│   │   ├── About.jsx       # About page
│   │   ├── Projects.jsx    # Projects page
│   │   ├── Gallery1.jsx    # Gallery layout 1
│   │   ├── Gallery2.jsx    # Gallery layout 2
│   │   ├── Testimonials.jsx # Testimonials page
│   │   ├── Contact.jsx     # Contact page
│   │   └── NotFound.jsx    # 404 page
│   │
│   ├── utils/              # Utility functions
│   │   ├── formValidation.js
│   │   └── animations.js
│   │
│   ├── styles/             # Global styles
│   │   └── index.css       # Main CSS file with Tailwind imports
│   │
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Entry point
│   └── routes.jsx          # Route definitions
│
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
├── package.json            # Project dependencies and scripts
├── .gitignore              # Git ignore file
├── .eslintrc.js            # ESLint configuration
└── README.md               # Project documentation (this file)
```
