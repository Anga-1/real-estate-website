# Real Estate Website

## Session 04 — Introduction to CSS and Flexbox

### Session Objective

Begin transitioning the Real Estate Website from a structurally complete HTML page into a visually designed website using CSS.

The session focused on understanding how CSS connects to HTML, how CSS selectors work, the CSS box model, and the basics of Flexbox.

---

## 1. Connecting HTML to CSS

The existing `style.css` file was connected to `index.html` using:

```html
<link rel="stylesheet" href="css/style.css">
```

This tells the browser to load the stylesheet located inside the `css` directory.

The project structure is:

```text
real-estate-website/
│
├── css/
│   └── style.css
│
├── images/
├── js/
├── notes/
├── index.html
├── properties.html
└── README.md
```

The path:

```text
css/style.css
```

is a relative path from `index.html`.

---

## 2. What CSS Does

HTML and CSS have different responsibilities.

### HTML

Defines the structure and meaning of the webpage.

> What exists?

### CSS

Controls the visual presentation of those elements.

> How should it look?

The general development relationship is:

```text
HTML
 ↓
Structure and meaning
 ↓
CSS
 ↓
Appearance and layout
 ↓
JavaScript
 ↓
Behaviour and interaction
```

---

## 3. CSS Syntax

The basic structure of a CSS rule is:

```css
selector {
    property: value;
}
```

For example:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
}
```

The three important parts are:

```text
body
 ↓
selector

font-family
 ↓
property

Arial, sans-serif
 ↓
value
```

---

## 4. Testing the CSS Connection

A temporary background colour was initially applied to the `body` to confirm that the stylesheet was successfully connected.

Once the browser's appearance changed, this confirmed:

> `index.html` is successfully loading `style.css`.

The temporary test was then replaced with actual styling.

---

## 5. Basic Typography

The page typography was initially styled using:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
}
```

Heading sizes were also introduced:

```css
h1 {
    font-size: 48px;
}

h2 {
    font-size: 32px;
}

h3 {
    font-size: 24px;
}
```

This demonstrated the relationship between HTML's semantic heading hierarchy and CSS's visual hierarchy.

HTML determines that an element is an `<h1>`, `<h2>`, or `<h3>`.

CSS determines how those headings appear visually.

---

## 6. Descendant Selectors

The navigation links were styled using:

```css
nav a {
    text-decoration: none;
    margin-right: 20px;
}
```

The selector:

```css
nav a
```

means:

> Select `<a>` elements that are descendants of `<nav>`.

This is more specific than simply using:

```css
a
```

which would target every anchor on the page.

---

## 7. Styling the Property Cards

The property cards were given the class:

```html
<article class="property-card">
```

This allowed CSS to target every property card simultaneously:

```css
.property-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    width: 300px;
}
```

The period before `property-card` indicates that CSS is selecting an element by its class.

---

# 8. The CSS Box Model

A major concept introduced was the **CSS Box Model**.

Every HTML element can be understood as a box consisting of:

```text
Margin
  ↓
Border
  ↓
Padding
  ↓
Content
```

Conceptually:

```text
┌──────────────────────────────┐
│            Margin            │
│  ┌────────────────────────┐  │
│  │         Border         │  │
│  │  ┌──────────────────┐  │  │
│  │  │     Padding      │  │  │
│  │  │  ┌────────────┐  │  │  │
│  │  │  │  Content   │  │  │  │
│  │  │  └────────────┘  │  │  │
│  │  └──────────────────┘  │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

### Content

The actual information inside the element.

### Padding

Space between the content and the element's border.

```css
padding: 20px;
```

### Border

The boundary surrounding the element.

```css
border: 1px solid #ccc;
```

### Margin

Space outside the element.

```css
margin: 20px;
```

This concept will become increasingly important as the website's layout becomes more sophisticated.

---

# 9. Introducing Flexbox

The property cards initially appeared vertically stacked.

To place them horizontally, a new container was introduced:

```html
<div class="property-list">

    <article class="property-card">
        ...
    </article>

    <article class="property-card">
        ...
    </article>

</div>
```

The container was then turned into a Flexbox container:

```css
.property-list {
    display: flex;
}
```

This changes the behaviour of its children.

The parent:

```text
property-list
```

becomes the **flex container**.

Its children:

```text
property-card
property-card
```

become **flex items**.

The important relationship is:

```text
Parent
 ↓
display: flex
 ↓
Children become flex items
```

---

# 10. The Purpose of the `.property-list` Container

The property-list container was introduced because we wanted to control the layout of the property cards without also affecting the section heading.

The structure became:

```text
section
│
├── h2
│
└── property-list
    │
    ├── property-card
    └── property-card
```

This demonstrates a useful principle:

> A `<div>` can be used as a generic structural or layout container when no more meaningful semantic element is appropriate.

---

# 11. `gap`

Spacing between the property cards was introduced using:

```css
gap: 20px;
```

The complete rule became:

```css
.property-list {
    display: flex;
    gap: 20px;
}
```

`gap` creates space between flex items without requiring individual margins on each card.

---

# 12. `justify-content`

We introduced:

```css
justify-content: space-between;
```

This controls how flex items are distributed along the main axis.

With our horizontal property list, the main axis runs approximately:

```text
←────────────────────────→
```

Using:

```css
justify-content: space-between;
```

causes the first and last items to move toward opposite ends of the available space.

With two property cards, this can look like:

```text
[ Property 1 ]                    [ Property 2 ]
```

This behaviour is correct and is a direct result of `space-between`.

Other values introduced conceptually included:

```text
flex-start
center
flex-end
space-between
space-around
space-evenly
```

---

# 13. `flex-wrap`

We also introduced:

```css
flex-wrap: wrap;
```

The complete property-list rule became:

```css
.property-list {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
}
```

`flex-wrap: wrap` allows flex items to move onto another line when there is insufficient horizontal space.

For example:

```text
[1] [2] [3]
[4] [5]
```

rather than forcing everything onto one overflowing line.

This is our first introduction to the concept of **responsive layout**.

---

# 14. Important Concepts Learned

This session introduced:

* Connecting HTML to CSS
* CSS stylesheets
* Relative CSS file paths
* CSS selectors
* CSS properties and values
* Descendant selectors
* Typography
* Classes as CSS selectors
* The CSS Box Model
* Content
* Padding
* Border
* Margin
* Flexbox
* Flex containers
* Flex items
* `display: flex`
* `gap`
* `justify-content`
* `flex-wrap`
* Basic responsive layout thinking

---

# 15. Current CSS

The stylesheet currently contains the basic styling introduced during this session:

```css
body {
    font-family: Arial, sans-serif;
    margin: 0;
}

h1 {
    font-size: 48px;
}

h2 {
    font-size: 32px;
}

h3 {
    font-size: 24px;
}

nav a {
    text-decoration: none;
    margin-right: 20px;
}

.property-list {
    display: flex;
    gap: 20px;
    justify-content: space-between;
    flex-wrap: wrap;
}

.property-card {
    border: 1px solid #ccc;
    padding: 20px;
    margin: 20px;
    width: 300px;
}
```

---

# 16. Project Progress

The website has now progressed from a raw HTML structure into the beginning of an actual visual interface.

```text
HTML
│
├── Semantic structure
├── Navigation
├── Hero section
├── Search form
└── Property listings
        ↓
CSS
│
├── Typography
├── Spacing
├── Borders
├── Box model
└── Flexbox layout
```

The property listings are now displayed horizontally when sufficient space is available and can wrap onto additional lines when necessary.

---

# 17. Git Checkpoint

The session's changes should be saved and committed to Git.

Commit message:

```bash
git commit -m "Begin styling homepage with CSS"
```

Then push to GitHub:

```bash
git push
```

Finally:

```bash
git status
```

The desired result is:

```text
nothing to commit, working tree clean
```

This confirms that the local repository and GitHub repository are synchronized.

---

# 18. Next Session

The next session will continue developing the visual design of the property cards.

Planned topics include:

1. Improving card spacing.
2. Styling property images.
3. Understanding CSS width and height.
4. Improving typography.
5. Styling the property price.
6. Styling the "View Property" link as a button-like interface.
7. Improving the navigation.
8. Beginning to establish a consistent visual identity for the website.
9. Further developing responsive behaviour.

The ultimate goal is to move from:

```text
Technically functional HTML + basic CSS
```

toward:

```text
A visually coherent real-estate website
```
