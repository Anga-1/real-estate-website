# Real Estate Website

## Session 02 — Expanding the Homepage

### Session Objective

Continue building the HTML foundation of the Real Estate Website by expanding the homepage and introducing the basic structure of a real-estate property listing.

---

## 1. Review of the Existing Project

We continued working inside the GitHub repository:

```text
real-estate-website/
```

The project was opened locally in VS Code and connected to the GitHub repository through Git.

The project already contained the basic HTML homepage and supporting folders.

---

## 2. Homepage Structure

The homepage was expanded around a simple semantic structure:

```text
<body>
│
├── <header>
│   └── <nav>
│
├── <main>
│   │
│   ├── Hero section
│   │
│   └── Featured Properties section
│
└── <footer>
```

The purpose was to begin thinking about the webpage in terms of meaningful sections rather than simply placing text on the page.

---

## 3. Hero Section

The homepage hero section was changed to communicate the purpose of the website more clearly.

The main heading became:

```html
<h1>Find Your Next Home</h1>
```

with an introductory paragraph:

```html
<p>
    Discover properties that fit your lifestyle and your future.
</p>
```

### Design principle introduced

The homepage should communicate to the visitor:

> What is this website and what can I do here?

Rather than simply announcing the existence of the website, the heading should communicate the website's purpose from the user's perspective.

---

## 4. Search Form

A basic property-search interface was introduced:

```html
<form>
    <label for="location">Location</label>

    <input
        type="text"
        id="location"
        name="location"
        placeholder="Enter a location">

    <button type="submit">Search</button>
</form>
```

This was our first introduction to HTML forms.

### `<form>`

A `<form>` groups controls that allow a user to enter and submit information.

### `<label>`

The `<label>` describes the purpose of an input.

The following relationship was introduced:

```text
<label for="location">
          ↓
       matches
          ↓
<input id="location">
```

The `for` attribute of the label corresponds to the `id` of the input.

This relationship is important for usability and accessibility.

### `<input>`

The input provides a field where the visitor can enter information.

The `type` attribute specifies what kind of input is expected.

Example:

```html
<input type="text">
```

### `<button>`

The button provides an interactive control for submitting the form:

```html
<button type="submit">Search</button>
```

At this stage, the search functionality itself was **not implemented**. We created the interface first; functionality will be introduced later.

---

## 5. Lists

We introduced unordered lists using:

```html
<ul>
    <li>House</li>
    <li>Apartment</li>
    <li>Townhouse</li>
</ul>
```

### `<ul>`

`<ul>` represents an unordered list.

### `<li>`

`<li>` represents an individual list item.

The relationship is:

```text
<ul>
│
├── <li>
├── <li>
└── <li>
```

This became useful when representing the features of a property.

---

## 6. First Property Listing

A first property listing was introduced using the semantic `<article>` element:

```html
<article>

    <h3>Modern Family Home</h3>

    <p>Cape Town, Western Cape</p>

    <p>R2,450,000</p>

    <ul>
        <li>3 bedrooms</li>
        <li>2 bathrooms</li>
        <li>180 m²</li>
        <li>Double garage</li>
    </ul>

</article>
```

The property was placed inside the **Featured Properties** section.

---

## 7. Why `<article>`?

We introduced `<article>` because an individual property listing can be considered a self-contained piece of content.

The conceptual structure became:

```text
Featured Properties
│
├── Property
├── Property
└── Property
```

Each property can eventually have the same structural pattern while containing different information.

This is the beginning of thinking about **reusable components**.

---

## 8. Reusable Structure

A major concept introduced was the difference between **content** and **structure**.

For example, different properties may have different information:

```text
Modern Family Home
R2,450,000
3 bedrooms
```

and:

```text
City Centre Apartment
R1,850,000
2 bedrooms
```

but they can still follow the same structural pattern:

```text
Property
├── Title
├── Location
├── Price
└── Features
```

This consistency will become useful later when we introduce CSS and JavaScript.

---

## 9. Images

We introduced the `<img>` element conceptually:

```html
<img
    src="images/house.jpg"
    alt="Modern family home">
```

### `src`

The `src` attribute specifies the location of the image.

For example:

```text
images/house.jpg
```

is a relative path from the current HTML file.

### `alt`

The `alt` attribute provides alternative text describing the image.

This is important for accessibility and provides useful information if the image cannot be displayed.

---

## 10. Void Elements

We noticed that `<img>` does not require a closing tag:

```html
<img src="..." alt="...">
```

This introduced the concept of **void elements**.

Examples include:

```text
<img>
<input>
<meta>
<br>
<hr>
```

These elements do not contain content in the same way as elements such as:

```html
<h1>...</h1>
<p>...</p>
<section>...</section>
```

We do not need to memorize the complete list yet; we'll encounter these naturally throughout development.

---

## 11. Images Directory

An `images` directory was created inside the project:

```text
real-estate-website/
│
├── css/
├── images/
├── js/
├── notes/
├── index.html
├── properties.html
└── README.md
```

The directory is intended to contain the visual assets used by the website.

At the end of the session, it was empty, so Git does not track the directory itself until a file is placed inside it.

---

## 12. HTML Design Principles

Several broader principles were reinforced during the session:

### Structure before appearance

We deliberately did not begin styling the website yet.

The process is:

```text
HTML
↓
Structure and meaning
↓
CSS
↓
Visual appearance
↓
JavaScript
↓
Behaviour and interaction
```

### Meaning before appearance

HTML elements should describe what the content **is**, rather than simply how we want it to look.

For example:

```html
<h1>
```

represents a major heading.

We should not choose it simply because the browser makes it appear large.

Similarly:

```html
<article>
```

represents a self-contained piece of content.

---

## 13. Session 02 Git Checkpoint

The session's development work was committed to Git and pushed to GitHub.

The Git workflow used was:

```text
Make changes
     ↓
git status
     ↓
git add
     ↓
git commit
     ↓
git push
```

The purpose of the commit is to create a checkpoint in the project's development history.

---

## 14. What We Learned

By the end of Session 02, we had introduced:

* Semantic HTML structure
* Hero sections
* Forms
* Labels
* Inputs
* Buttons
* Unordered lists
* List items
* Property articles
* Images
* `src`
* `alt`
* Relative paths
* Void elements
* Basic component thinking
* Structure vs content
* Project asset organization
* Git checkpoints

---

## 15. Project Progress

At the end of Session 02, the homepage conceptually contained:

```text
Homepage
│
├── Header
│   └── Navigation
│
├── Main
│   │
│   ├── Hero
│   │   ├── Main heading
│   │   ├── Description
│   │   └── Search form
│   │
│   └── Featured Properties
│       └── Property article
│
└── Footer
```

The project had therefore progressed from a basic HTML page into the early structural foundation of a real-estate website.

---

## Next Session

Session 03 would build upon this foundation by:

1. Adding a property action/link.
2. Creating a second property listing.
3. Introducing `class`.
4. Introducing `id`.
5. Learning the difference between classes and IDs.
6. Organizing property information into logical groups.
7. Creating a consistent property-card structure.
8. Preparing the HTML for eventual CSS styling.
