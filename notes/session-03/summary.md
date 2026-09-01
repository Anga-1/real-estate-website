# Real Estate Website

## Session 03 — Property Cards & HTML Organization

### Session Objective

Continue developing the homepage by creating a reusable structure for property listings and learning how HTML elements, classes, and attributes can be used to organize information.

---

## 1. Completing the Property Card

We added a **View Property** link to the property listing:

```html
<a href="properties.html">View Property</a>
```

### `<a>` vs `<button>`

An important distinction was introduced:

* `<a>` — generally used when the user is navigating somewhere.
* `<button>` — generally used when the user is asking the current page/application to perform an action.

For example:

```html
<a href="properties.html">View Property</a>
```

means:

> Take the user to another page.

Whereas a button might be used to:

* Submit a form
* Open a menu
* Perform an action
* Change something on the current page

---

## 2. Classes

We introduced the `class` attribute:

```html
<article class="property-card">
```

A class allows multiple elements to belong to the same group.

For example:

```html
<article class="property-card">
    ...
</article>

<article class="property-card">
    ...
</article>
```

Both articles can be targeted together by CSS:

```css
.property-card {
    ...
}
```

### Mental model

**Class → "These elements belong to the same group."**

---

## 3. IDs

We introduced the `id` attribute:

```html
<section id="featured-properties">
```

An ID identifies a particular element on the page and should generally be unique within that page.

CSS can target it using:

```css
#featured-properties {
    ...
}
```

### Mental model

**ID → "This is this particular element."**

---

## 4. Class vs ID

| Attribute | Main purpose                                                 |
| --------- | ------------------------------------------------------------ |
| `class`   | Group multiple elements with a shared role or characteristic |
| `id`      | Uniquely identify a particular element                       |

Example:

```html
<section id="featured-properties">
    
    <article class="property-card">
        ...
    </article>

    <article class="property-card">
        ...
    </article>

</section>
```

Here:

* `featured-properties` uniquely identifies the section.
* `property-card` identifies the shared type of the articles.

An element can also have both a class and an ID.

---

## 5. Organizing Property Information

We improved the structure of the property card.

Instead of having loosely organized paragraphs:

```html
<p>Cape Town, Western Cape</p>
<p>R2,450,000</p>
```

we grouped related information:

```html
<div class="property-details">

    <p class="property-location">Cape Town, Western Cape</p>

    <p class="property-price">R2,450,000</p>

</div>
```

This allows us to target the entire group or individual pieces of information later.

For example:

```css
.property-details {
    ...
}

.property-price {
    ...
}
```

---

## 6. Avoiding Unnecessary Containers

We initially considered putting the property feature list inside another `<div>`, but realized that the `<ul>` itself could have a class:

```html
<ul class="property-features">
    <li>3 bedrooms</li>
    <li>2 bathrooms</li>
    <li>180 m²</li>
    <li>Double garage</li>
</ul>
```

This introduced an important principle:

> Don't add containers when the element itself can be given the class or identifier needed.

---

## 7. Current Property Card Structure

The property cards now follow a consistent structure:

```html
<article class="property-card">

    <img src="..." alt="...">

    <h3>...</h3>

    <div class="property-details">
        <p class="property-location">...</p>
        <p class="property-price">...</p>
    </div>

    <ul class="property-features">
        <li>...</li>
        <li>...</li>
        <li>...</li>
        <li>...</li>
    </ul>

    <a href="properties.html">View Property</a>

</article>
```

This gives us a reusable pattern:

```text
Property Card
│
├── Image
├── Title
├── Details
│   ├── Location
│   └── Price
├── Features
└── View Property link
```

Multiple properties can therefore share the same structure while having different content.

---

## 8. Structure vs Content

One of the most important ideas from this session was the distinction between **structure** and **content**.

For example:

Property 1:

```text
Modern Family Home
R2,450,000
3 bedrooms
```

Property 2:

```text
City Centre Apartment
R1,850,000
2 bedrooms
```

The content is different, but the structure remains the same:

```text
Property
├── Image
├── Title
├── Location
├── Price
├── Features
└── Link
```

This consistency will become extremely important when we later introduce CSS and JavaScript.

---

## 9. Connection to Future JavaScript

Eventually, instead of manually writing every property card, we can store property information as data:

```text
title
price
location
bedrooms
bathrooms
size
```

JavaScript can then use that data to generate property cards automatically.

The HTML structure we're creating now is therefore laying the groundwork for a more sophisticated, data-driven website.

---

## 10. HTML Concepts Covered

This session introduced or reinforced:

* `<article>`
* `<a>`
* `<ul>`
* `<li>`
* `<div>`
* `class`
* `id`
* `src`
* `alt`
* Relative file paths
* Semantic HTML
* Grouping related content
* Reusable HTML structures
* Structure vs content
* `<a>` vs `<button>`

---

## 11. Current Project Structure

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
├── images/
│
├── index.html
├── properties.html
└── README.md
```

The `images/` directory currently exists but does not yet contain the property images.

---

## 12. Next Session

The next stage will be the transition from **HTML structure to visual design**.

Planned topics:

1. Review the completed HTML structure.
2. Understand how HTML connects to CSS.
3. Link `style.css` to the webpage.
4. Learn CSS selectors.
5. Learn basic properties such as:

   * `color`
   * `background`
   * `font-size`
   * `margin`
   * `padding`
6. Begin styling the navigation.
7. Begin transforming our plain property articles into actual property cards.

This will mark the beginning of the website's visual development.

---

### Session 03 Checkpoint

**HTML structure:** 🟢
**Property card structure:** 🟢
**Classes and IDs:** 🟢
**Git workflow:** 🟢
**CSS:** Next session
