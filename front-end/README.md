# Front-End Project

A clean, minimal React project built with Vite, designed for UI layout and styling development.

## Tech Stack

- **Build Tool**: Vite
- **Framework**: React (JavaScript)
- **Styling**: Plain CSS
- **Font**: Inter (weights: 400, 500, 600)

## Project Structure

```
front-end/
├── src/
│   ├── components/
│   │   └── layout/
│   │       ├── Layout.jsx        # Page structure component
│   │       ├── Layout.css
│   │       ├── Container.jsx     # Content wrapper with 80px padding
│   │       ├── Container.css
│   │       └── index.js          # Layout exports
│   ├── styles/
│   │   └── global.css            # Global styles and Inter font import
│   ├── App.jsx                   # Demo application
│   ├── App.css
│   └── main.jsx                  # Application entry point
├── index.html
└── package.json
```

## Layout System

### Layout Component

The `Layout` component provides the overall page structure without imposing content constraints.

```jsx
import { Layout } from './components/layout';

function App() {
  return (
    <Layout>
      {/* Your content here */}
    </Layout>
  );
}
```

### Container Component

The `Container` component applies **80px horizontal padding** (left and right) to wrap regular page content.

```jsx
import { Layout, Container } from './components/layout';

function App() {
  return (
    <Layout>
      <Container>
        <h1>Regular Content</h1>
        <p>This content has 80px padding on both sides.</p>
      </Container>
    </Layout>
  );
}
```

### Full-Width Sections

Components can render outside of the `Container` to span the entire viewport width:

```jsx
import { Layout, Container } from './components/layout';

function App() {
  return (
    <Layout>
      {/* Regular content with padding */}
      <Container>
        <h1>Padded Content</h1>
      </Container>

      {/* Full-width section without padding */}
      <section style={{ backgroundColor: '#f0f0f0', padding: '60px 0' }}>
        <h2>Full-Width Section</h2>
      </section>

      {/* Back to padded content */}
      <Container>
        <p>More padded content...</p>
      </Container>
    </Layout>
  );
}
```

## Inter Font

The Inter font is imported via Google Fonts with three weights:
- **400** (Regular) - Default for body text
- **500** (Medium) - For emphasis and subtle headings
- **600** (SemiBold) - For headings and strong emphasis

The font is applied globally to the entire application.

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Opens the development server at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Development Guidelines

- **Styling**: Use plain CSS for all styling needs. Each component should have its own CSS file.
- **Layout Padding**: Use the `Container` component for standard content padding. Don't add padding directly to page components.
- **Full-Width Sections**: Place elements outside `Container` when they need to span the full viewport width.
- **Font Weights**: Use Inter font weights consistently:
  - 400 for body text
  - 500 for medium emphasis
  - 600 for headings
- **No Business Logic**: This project is focused on UI/layout. Keep it clean and minimal.

## Next Steps

This project provides a solid foundation for:
- Building responsive page layouts
- Creating reusable UI components
- Developing consistent design systems
- Implementing custom styling patterns

The structure is ready for further markup and UI development work.

