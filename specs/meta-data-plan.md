# NextJS Boilerplate - Headers and Metadata Test Plan

## Application Overview

The NextJS Boilerplate is a modern web application built with Next.js, TypeScript, and Tailwind CSS. The application implements comprehensive metadata management including:

- **Page Title**: "NextJS Boilerplate" with template-based title system
- **HTML Attributes**: Proper language declaration and semantic structure
- **Standard Metadata**: Character set, viewport configuration, and descriptions
- **Open Graph Tags**: Social media sharing metadata
- **Twitter Card Tags**: Twitter-specific preview metadata
- **Canonical URLs**: SEO-friendly URL configuration
- **Header Section**: Dynamic header with site name and theme toggle

## Test Scenarios

### 1. Page Title and Document Structure

**Seed:** `tests/seed.spec.ts`

#### 1.1 Verify Home Page Title

**Steps:**

1. Navigate to the home page (/)
2. Inspect the document title
3. Verify the page title is displayed in the browser tab

**Expected Results:**

- Document title is exactly "NextJS Boilerplate"
- Browser tab displays "NextJS Boilerplate"
- Title is set via Next.js metadata API

#### 1.2 Verify HTML Language Attribute

**Steps:**

1. Navigate to the home page (/)
2. Inspect the HTML element's lang attribute
3. Verify the language is properly set

**Expected Results:**

- HTML element has `lang="en"` attribute
- Language attribute indicates English locale
- Attribute is present in the DOM tree

#### 1.3 Verify Page Heading Hierarchy

**Steps:**

1. Navigate to the home page (/)
2. Locate the main heading in the header
3. Verify the heading level and content

**Expected Results:**

- Main heading exists as an H1 element
- H1 content displays "NextJS Boilerplate"
- Secondary heading "Features:" exists as H2
- Heading hierarchy is logically structured

---

### 2. Standard Metadata Tags

**Seed:** `tests/seed.spec.ts`

#### 2.1 Verify Charset Meta Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract all meta tags from the document
3. Locate the charset meta tag

**Expected Results:**

- Meta tag with `charset="utf-8"` exists
- Charset meta tag is one of the first meta tags
- Character encoding is UTF-8

#### 2.2 Verify Viewport Meta Tag

**Steps:**

1. Navigate to the home page (/)
2. Inspect the viewport meta tag
3. Verify responsive design settings

**Expected Results:**

- Meta tag with `name="viewport"` exists
- Content includes `width=device-width`
- Content includes `initial-scale=1`
- Tag enables responsive design support

#### 2.3 Verify Description Meta Tag

**Steps:**

1. Navigate to the home page (/)
2. Locate the description meta tag
3. Verify the content matches the application description

**Expected Results:**

- Meta tag with `name="description"` exists
- Content is "A boilerplate for creating NextJS projects with TypeScript and Tailwind."
- Description is concise and informative
- Description appears in search engine results

#### 2.4 Verify Next.js Size Adjust Meta Tag

**Steps:**

1. Navigate to the home page (/)
2. Inspect for Next.js specific meta tags
3. Locate the next-size-adjust meta tag

**Expected Results:**

- Meta tag with `name="next-size-adjust"` exists
- Tag is automatically added by Next.js
- Tag is present in the DOM

---

### 3. Open Graph (OG) Tags for Social Sharing

**Seed:** `tests/seed.spec.ts`

#### 3.1 Verify OG Title Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with property="og:title"
3. Verify the title content

**Expected Results:**

- Meta tag with `property="og:title"` exists
- Content is "NextJS Boilerplate"
- Title is suitable for social media sharing
- Title matches the page title

#### 3.2 Verify OG Description Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with property="og:description"
3. Verify the description content

**Expected Results:**

- Meta tag with `property="og:description"` exists
- Content is "A boilerplate for creating NextJS projects with TypeScript and Tailwind."
- Description is informative and concise
- Description matches the meta description tag

#### 3.3 Verify OG Image Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with property="og:image"
3. Check if OG image is configured

**Expected Results:**

- If OG image is configured: Meta tag with `property="og:image"` exists and contains valid image URL
- If OG image is not configured: Tag may be empty or missing (document current behavior)
- Image URL (if present) is absolute and accessible

#### 3.4 Verify OG URL Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with property="og:url"
3. Verify the canonical URL is set

**Expected Results:**

- If OG URL is configured: Meta tag with `property="og:url"` exists
- URL matches the current page's canonical URL
- URL is absolute and properly formatted

---

### 4. Twitter Card Tags

**Seed:** `tests/seed.spec.ts`

#### 4.1 Verify Twitter Card Type

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with name="twitter:card"
3. Verify the card type

**Expected Results:**

- Meta tag with `name="twitter:card"` exists
- Content is "summary_large_image"
- Card type is appropriate for content sharing on Twitter
- Tag enables enhanced Twitter preview

#### 4.2 Verify Twitter Title Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with name="twitter:title"
3. Verify the title content

**Expected Results:**

- Meta tag with `name="twitter:title"` exists
- Content is "NextJS Boilerplate"
- Title matches the OG title
- Title is suitable for Twitter cards

#### 4.3 Verify Twitter Description Tag

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with name="twitter:description"
3. Verify the description content

**Expected Results:**

- Meta tag with `name="twitter:description"` exists
- Content is "A boilerplate for creating NextJS projects with TypeScript and Tailwind."
- Description matches the OG description
- Description is appropriate for Twitter display

#### 4.4 Verify Twitter Image Tag (if configured)

**Steps:**

1. Navigate to the home page (/)
2. Extract meta tags with name="twitter:image"
3. Check if Twitter image is configured

**Expected Results:**

- If configured: Meta tag with `name="twitter:image"` exists
- Image URL is absolute and accessible
- Image dimensions are suitable for Twitter cards (16:9, 4:3, or 1:1)

---

### 5. Canonical URL and SEO Tags

**Seed:** `tests/seed.spec.ts`

#### 5.1 Verify Canonical Link Tag

**Steps:**

1. Navigate to the home page (/)
2. Inspect the head section for link rel="canonical"
3. Verify the canonical URL

**Expected Results:**

- Link element with `rel="canonical"` exists
- href attribute points to the home page URL (/)
- URL is absolute and matches the environment
- Canonical tag prevents duplicate content issues

#### 5.2 Verify Alternate Links (if multilingual)

**Steps:**

1. Navigate to the home page (/)
2. Inspect for link elements with rel="alternate"
3. Check for hreflang attributes

**Expected Results:**

- If implemented: Link elements with `rel="alternate"` and `hreflang` attributes exist
- If not implemented: Absence of alternate links is acceptable for single-language site
- Any alternate links properly reference other language versions

---

### 6. Header Component Integration

**Seed:** `tests/seed.spec.ts`

#### 6.1 Verify Header Contains Site Name

**Steps:**

1. Navigate to the home page (/)
2. Locate the header element (banner role)
3. Verify the site name is displayed

**Expected Results:**

- Header element exists in the DOM
- H1 heading displays "NextJS Boilerplate"
- Site name comes from NEXT_PUBLIC_SITE_NAME environment variable
- Header is visually prominent and properly styled

#### 6.2 Verify Header Theme Toggle

**Steps:**

1. Navigate to the home page (/)
2. Locate the theme toggle button in the header
3. Verify the button is accessible

**Expected Results:**

- Theme toggle button exists in the header
- Button is interactive and has proper focus states
- Button allows switching between light and dark modes
- Header layout remains consistent after theme change

#### 6.3 Verify Header Structure and Semantics

**Steps:**

1. Navigate to the home page (/)
2. Inspect the header element
3. Verify semantic HTML structure

**Expected Results:**

- Header uses semantic `<header>` element
- Header is marked with banner role (implicitly via header tag)
- Header contains proper heading hierarchy
- Header is the first major landmark on the page

---

### 7. Metadata Base Configuration

**Seed:** `tests/seed.spec.ts`

#### 7.1 Verify Metadata Base URL

**Steps:**

1. Inspect the application configuration
2. Verify the metadataBase is set in next.config.ts or layout.tsx
3. Check the NEXT_PUBLIC_SITE_URL environment variable

**Expected Results:**

- metadataBase is configured with NEXT_PUBLIC_SITE_URL
- URL is absolute and properly formatted
- URL points to the correct domain
- Metadata uses this base for relative URL resolution

#### 7.2 Verify Metadata Template Configuration

**Steps:**

1. Inspect the layout metadata export
2. Verify title template is configured
3. Check the template format

**Expected Results:**

- Title template is "%s | NextJS Boilerplate"
- Template is applied to sub-pages
- Default title is "NextJS Boilerplate"
- Home page shows only "NextJS Boilerplate" (no template prefix)

---

### 8. Edge Cases and Validation

**Seed:** `tests/seed.spec.ts`

#### 8.1 Verify No Missing Critical Meta Tags

**Steps:**

1. Navigate to the home page (/)
2. Collect all meta tags
3. Verify required tags are present

**Expected Results:**

- Charset meta tag is present
- Viewport meta tag is present
- Description meta tag is present
- No duplicate meta tags with same name/property
- All meta tags have appropriate content

#### 8.2 Verify Meta Tag Content Is Not Empty

**Steps:**

1. Navigate to the home page (/)
2. Extract all meta tags with content attribute
3. Verify each content value

**Expected Results:**

- No meta tags have empty content attributes
- All descriptions and titles are meaningful
- Content does not contain placeholder text
- Content is properly encoded

#### 8.3 Verify No XSS Vulnerabilities in Metadata

**Steps:**

1. Navigate to the home page (/)
2. Extract all meta tag content
3. Verify no malicious scripts are present

**Expected Results:**

- No script tags found in meta tag content
- No dangerous HTML entities in content
- No event handlers in meta attributes
- Content is properly sanitized

#### 8.4 Verify Metadata Consistency Across Page Renders

**Steps:**

1. Navigate to the home page (/)
2. Extract metadata
3. Refresh the page
4. Extract metadata again
5. Compare the two sets

**Expected Results:**

- Metadata remains identical after page refresh
- No random or dynamic values in static metadata
- Metadata is consistent across multiple renders
- No console errors related to metadata

---

### 9. Mobile and Responsive Considerations

**Seed:** `tests/seed.spec.ts`

#### 9.1 Verify Mobile Viewport Configuration

**Steps:**

1. Set viewport to mobile size (375x667)
2. Navigate to the home page (/)
3. Verify viewport meta tag is applied

**Expected Results:**

- Page responds to mobile viewport
- Content scales appropriately
- Viewport meta tag enables responsive behavior
- Text and images render properly at mobile size

#### 9.2 Verify Responsive Design Headers

**Steps:**

1. Test at mobile viewport (375x667)
2. Test at tablet viewport (768x1024)
3. Test at desktop viewport (1920x1080)
4. Verify header is visible and functional at all sizes

**Expected Results:**

- Header layout is responsive
- Site name is readable at all viewport sizes
- Theme toggle remains accessible
- No horizontal scroll required

---

### 10. Performance and Best Practices

**Seed:** `tests/seed.spec.ts`

#### 10.1 Verify Meta Tags Load Before Content

**Steps:**

1. Navigate to the home page (/)
2. Measure the timing of meta tags in head
3. Verify meta tags are parsed before main content

**Expected Results:**

- Meta tags are in the head section before body
- Metadata loads quickly with page
- No FOUC (Flash of Unstyled Content) related to metadata
- Social crawlers can access metadata immediately

#### 10.2 Verify No Duplicate Meta Tags

**Steps:**

1. Navigate to the home page (/)
2. Query all meta tags
3. Count tags with same name/property

**Expected Results:**

- No duplicate charset tags
- No duplicate description tags
- No duplicate viewport tags
- Each meta tag appears only once (unless intentionally multiple)

#### 10.3 Verify Metadata Follows Best Practices

**Steps:**

1. Inspect all metadata configuration
2. Check against SEO and accessibility standards
3. Verify Open Graph and Twitter Card completeness

**Expected Results:**

- All recommended meta tags are present
- Descriptions are 150-160 characters (optimal for search results)
- Titles are 50-60 characters (optimal for browser tabs)
- OG and Twitter tags provide complete social preview

---

## Test Execution Notes

- All tests should assume a fresh, clean browser state
- Tests can be executed in any order (independent)
- Tests should validate both presence and correctness of metadata
- Document any missing or unexpected metadata found
- Note any environment-specific configurations (development vs. production)
- Verify metadata behavior in both light and dark themes
- Test with various social media crawlers (Facebook Share Debugger, Twitter Card Validator)

## Success Criteria

- All critical metadata tags are present and correctly configured
- No console errors or warnings related to metadata
- Social sharing displays correct title, description, and image
- Page title updates appropriately for different routes (if applicable)
- Metadata is consistent and follows SEO best practices
- Accessibility features are properly implemented in header and metadata
- No security vulnerabilities in metadata content
