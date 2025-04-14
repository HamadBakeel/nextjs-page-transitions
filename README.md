# Page Transitions Demo

A modern Next.js application showcasing beautiful page transitions with three different animation styles: Curve, Inner, and Stairs. This project demonstrates how to implement smooth, engaging page transitions in a Next.js application.

## Features

- 🎨 Three unique page transition animations:
  - **Curve**: A smooth curve-based transition
  - **Inner**: An inward collapsing transition
  - **Stairs**: A step-by-step transition effect
- 🎯 Interactive transition selector modal
- 🌟 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎭 Beautiful UI with Headless UI components
- 🔔 Toast notifications for user feedback
- 🎯 Persistent transition selection using localStorage

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/HamadBakeel/nextjs-page-transitions.git
cd nextjs-page-transitions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   ├── Curve.jsx
│   │   ├── Inner.jsx
│   │   ├── Stairs.jsx
│   │   ├── PageTransition.jsx
│   │   └── PageTransitionModal.jsx
│   └── Pages/
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── Benefits/
│       ├── Pricing/
│       ├── Testimonials/
│       └── FAQ/
├── pages/
│   ├── _app.js
│   ├── _document.js
│   ├── index.js
│   ├── pricing/
│   ├── testimonials/
│   └── faq/
└── styles/
    ├── globals.css
    └── styles.scss
```

## Key Components

### Page Transitions

The project implements three different page transition styles:

1. **Curve Transition**: A smooth, curved animation that transitions between pages
2. **Inner Transition**: An inward collapsing effect that creates depth
3. **Stairs Transition**: A step-by-step animation that adds dimension

### Transition Selector

A modal component that allows users to:
- Switch between different transition styles
- See visual feedback of the current selection
- Persist their preference across sessions

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Headless UI](https://headlessui.dev/) - Unstyled UI components
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

## Customization

### Adding New Transitions

To add a new transition style:

1. Create a new component in `src/components/Layout/`
2. Implement the transition using Framer Motion
3. Add the new transition to the `PageTransition` component
4. Update the `PageTransitionModal` to include the new option

### Modifying Existing Transitions

Edit the corresponding transition component in `src/components/Layout/` to adjust:
- Animation timing
- Transition effects
- Colors and styles

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern web design trends
- Built with the amazing Next.js framework
- Uses Framer Motion for smooth animations
