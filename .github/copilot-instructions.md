GitHub Copilot Instructions for Next.js Boilerplate Website

Project Overview
• Project type: Next.js Boilerplate Website
• Framework: Next.js (App Router)
• Language: TypeScript with strict mode enabled
• Styling: Tailwind CSS
• Animations: Framer Motion
• Icons: Lucide or React Icons
• Testing: Playwright
• Content: Static content

⸻

File & Folder Structure
• App Router: Use app/ directory for all pages and layouts
• Components:
  • Default to server components unless client-side interactivity is required ('use client' directive)
  • Reusable UI components live in components/ui/
  • Page-specific sections can be organized in components/sections/
• Naming Conventions:
  • Files, folders, and components use kebab-case
  • React components are exported as default exports with the export at the bottom of the file and a displayName set for easier debugging

Layout & Metadata
• Use a root layout in app/layout.tsx
• Use page-level metadata exports for SEO
• Follow SEO best practices (meta tags, title, description, open graph, canonical URLs)

⸻

Styling & Responsiveness
• Use Tailwind CSS utility classes
• Implement mobile-first design using Tailwind responsive utilities
• Prefer semantic HTML elements over generic `<div>`s
• Ensure accessibility:
• All interactive elements must have accessible labels
• Follow a11y best practices
• Style new elements and components to support both light and dark modes. use the `.dark` class for dark mode styles.

Components & Interactivity
• Default to server components
• Add 'use client' only for components that require client-side interactivity
• Animations should use Framer Motion
• Icons should use Lucide or React Icons components
• Code organization:

```
app/
    layout.tsx
    page.tsx
components/
    ui/
        button.tsx
        card.tsx
    sections/
        hero-section.tsx
        feature-section.tsx
```

Data Fetching
• Use fetch inside server components for API calls
• Static content can be hardcoded or imported from JSON/MDX files
• Prefer async/await syntax

⸻

Testing
• Use Playwright for end-to-end tests
• Include tests for:
  • Page rendering
  • Form submissions or interactions
  • Responsive behavior
  • Accessibility checks

⸻

Documentation & Comments
• Use JSDoc-style comments for all functions, components, and utilities except for very simple ones and components in the ui/ folder
• Include description, parameter types, and return types
• Keep code well-documented for readability and maintainability

⸻

Additional Guidelines
• Maintain consistent import order as defined by the ESLint plugins "simple-import-sort" and "sort-keys-fix"
• Optimize images using next/image
• Keep performance, SEO, and accessibility in mind for every component

⸻

Features

• When implementing features in the `\_features.md` file, check off the features as they are completed.

⸻

Changelog
• Maintain a detailed changelog in CHANGELOG.md
• Follow semantic versioning for releases
• Document added, changed, fixed, and removed features in each version