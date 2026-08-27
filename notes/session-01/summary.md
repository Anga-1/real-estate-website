# Session 01 — Project & HTML Foundations

**Date:** 27 August 2026

## 1. Session Objective

Set up the development environment for the Real Estate Website and begin learning HTML by building the initial website structure.

---

## 2. Development Environment

### GitHub

Created a GitHub repository named:

`real-estate-website`

The repository contains a `README.md` and began with an initial commit.

### Git

Confirmed that Git is installed and configured locally.

Git version:

`2.53.0.windows.1`

Configured Git username and email.

### Local Repository

Cloned the GitHub repository onto the computer at:

`C:\Users\angam\OneDrive\Desktop\Github\real-estate-website`

The local repository is connected to the GitHub repository.

### VS Code

Opened the `real-estate-website` repository in VS Code and used it as the primary development environment.

---

## 3. Project Structure

Created the following initial structure:

```text
real-estate-website/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── notes/
│   └── session-01/
│       └── summary.md
│
├── index.html
├── properties.html
└── README.md
```

### Purpose of the main directories

* `css/` — CSS files responsible for the appearance and styling of the website.
* `js/` — JavaScript files responsible for behaviour and interactivity.
* `notes/` — personal learning notes and summaries from development sessions.

---

## 4. Git Concepts Learned

### Repository

A repository is the project together with its Git version history.

### Commit

A commit is a snapshot/checkpoint of the project at a particular point in time.

### `main`

The primary branch of the project.

### `origin`

The name Git gives to the remote GitHub repository.

### Working tree

The current state of the files on the local computer.

### Basic Git workflow

```text
Make changes
     ↓
git status
     ↓
git add .
     ↓
git commit -m "message"
     ↓
git push
     ↓
GitHub updated
```

### First project commit

Created the first development commit:

`Build initial website structure`

The changes were successfully pushed to GitHub.

---

# 5. HTML Concepts Learned

## HTML

HTML (HyperText Markup Language) provides the structure and meaning of a webpage.

A useful conceptual model:

```text
HTML       → Structure
CSS        → Appearance
JavaScript → Behaviour
```

---

## Basic HTML Document Structure

Created an initial HTML document containing:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Real Estate Website</title>
</head>

<body>

</body>
</html>
```

### `<!DOCTYPE html>`

Declares that the document uses modern HTML.

### `<html>`

The root element containing the entire webpage.

### `<head>`

Contains information about the webpage rather than its main visible content.

### `<body>`

Contains the actual visible content of the webpage.

### `<title>`

Defines the title associated with the browser tab.

### `charset="UTF-8"`

Specifies the character encoding used by the document.

### Viewport meta tag

Helps the webpage behave correctly across different screen sizes, particularly mobile devices.

---

# 6. HTML Elements and Tags

Learned that HTML elements commonly consist of an opening tag, content, and a closing tag.

Example:

```html
<h1>Welcome to my Real Estate Website</h1>
```

Conceptually:

```text
<h1>              → opening tag
Welcome...        → content
</h1>             → closing tag
```

---

# 7. Headings and Paragraphs

Used:

```html
<h1>Welcome to my Real Estate Website</h1>

<p>Find a place you'll be happy to call home.</p>

<h2>Featured Properties</h2>
```

HTML provides headings from:

```text
<h1> → <h6>
```

The important lesson is that headings should represent **hierarchy and meaning**, not simply different text sizes.

For example:

```text
<h1> Main page heading
   │
   ├── <h2> Major section
   │      └── <h3> Subsection
   │
   └── <h2> Another major section
```

CSS will eventually control the visual appearance.

---

# 8. Links and Navigation

Learned about the anchor element:

```html
<a href="properties.html">Properties</a>
```

The `href` attribute specifies where the link leads.

Created navigation links:

```html
<nav>
    <a href="index.html">Home</a>
    <a href="properties.html">Properties</a>
    <a href="about.html">About</a>
    <a href="contact.html">Contact</a>
</nav>
```

---

# 9. HTML Attributes

An attribute provides additional information about an HTML element.

Example:

```html
<a href="properties.html">
```

Here:

```text
href → attribute
properties.html → attribute value
```

Other attributes encountered include:

```html
<html lang="en">
<meta charset="UTF-8">
```

---

# 10. Relative Paths

Learned that:

```html
<a href="properties.html">Properties</a>
```

uses a relative path.

Because `properties.html` is in the same directory as `index.html`, the browser can find it directly.

For files inside folders, paths can look like:

```text
css/style.css
images/house.jpg
```

The basic idea is:

> A relative path tells the browser how to find a file starting from the current file's location.

---

# 11. Semantic HTML

Introduced semantic HTML elements:

```html
<header>
<nav>
<main>
<section>
<footer>
```

These elements describe **what the content means** rather than merely how it should look.

The current homepage structure is conceptually:

```text
<body>
│
├── <header>
│   └── <nav>
│
├── <main>
│   ├── <section>
│   │   ├── <h1>
│   │   └── <p>
│   │
│   └── <section>
│       └── <h2>
│
└── <footer>
    └── <p>
```

This hierarchical/tree structure is an important concept for understanding HTML.

---

# 12. Website Progress

At the end of the session, the website contains:

### Homepage

`index.html`

Contains:

* Navigation
* Main heading
* Introductory paragraph
* Featured Properties section
* Footer

### Properties page

`properties.html`

Contains:

* Properties heading
* Introductory paragraph
* Link back to the homepage

The two pages are connected through HTML links.

---

# 13. Key Lessons From Session 01

1. GitHub stores the remote version of the project.
2. Git manages the project's version history.
3. VS Code is being used as the development workspace.
4. HTML provides webpage structure and meaning.
5. CSS will control appearance.
6. JavaScript will eventually provide behaviour and interactivity.
7. HTML elements should be chosen according to their semantic meaning.
8. Attributes provide additional information about elements.
9. Relative paths allow files within a project to reference one another.
10. Semantic HTML creates a meaningful hierarchy for the webpage.
11. Git commits provide checkpoints in the project's development.
12. The development workflow will be:

```text
Build → Understand → Test → Commit → Push
```

---

# 14. Next Session

The next session will continue developing the website's HTML structure.

Planned topics include:

* Completing the navigation structure
* Creating the remaining pages
* Understanding more semantic HTML
* Organising page content
* Introducing images
* Understanding lists
* Beginning to think about the structure of property listings

CSS styling will be introduced after we have established a sufficiently solid HTML structure.
