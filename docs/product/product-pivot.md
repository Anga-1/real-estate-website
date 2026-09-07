# Product Direction Pivot

**Date:** September 2026
**Previous Product Direction:** Generic Real Estate Website
**Current Product Direction:** Realtor / Real Estate Agent Website
**Previous PRD:** PRD v1.0
**Current PRD:** PRD v2.0
**Status:** Implemented

---

# 1. Overview

The project initially began as a generic real estate website focused primarily on property discovery and presentation.

During development, it became apparent that this direction did not provide a sufficiently specific product identity. The resulting website risked becoming a simplified version of a large property marketplace rather than a purposeful product serving a specific real estate professional.

The product was therefore redefined around the needs of an individual realtor.

This change is formally represented by the transition from **PRD v1.0** to **PRD v2.0**.

---

# 2. Previous Product Direction

The original concept centred the website around property discovery.

The primary conceptual flow was:

```text
Search
   ↓
Browse Properties
   ↓
View Property
   ↓
Enquire
```

The property catalogue was consequently the primary feature and identity of the website.

This approach was useful for establishing the initial frontend architecture and allowed the project to explore:

* HTML page structure.
* CSS layout.
* Property cards.
* Property presentation.
* Property categorisation.
* Search and filtering concepts.
* JavaScript-driven property data.

However, it did not sufficiently represent the broader role of a realtor.

---

# 3. Reason for the Change

The generic real estate model created a fundamental product-positioning problem.

A generic property marketplace answers:

> "What properties are available?"

A realtor's website needs to answer a different question:

> "Why should I work with this realtor?"

The project therefore needed to shift its centre of gravity from **property discovery** to **the realtor and the client relationship**.

The properties remain important, but they become a supporting component of the realtor's business rather than the entire product.

---

# 4. New Product Direction

The website is now defined as the **digital office of a modern realtor**.

Its primary purposes are:

* Establishing the realtor's professional identity.
* Communicating the realtor's services.
* Showcasing current property listings.
* Generating qualified leads.
* Facilitating client communication.
* Receiving viewing requests.
* Supporting buying, selling, renting and letting inquiries.

The central product objective is:

> **Turn a website visitor into a qualified real-estate lead.**

---

# 5. Change in Product Philosophy

### Previous philosophy

```text
Properties
     ↓
Search
     ↓
Browse
     ↓
Enquire
```

### Revised philosophy

```text
Trust
  ↓
Clarity
  ↓
Relevant Properties / Services
  ↓
Easy Contact
  ↓
Qualified Inquiry
  ↓
Viewing / Realtor Follow-up
  ↓
Potential Transaction
```

The website is therefore no longer evaluated primarily by the quantity of properties it can display.

It is evaluated by how effectively it communicates the realtor's value and facilitates meaningful client interactions.

---

# 6. Target User Expansion

The original concept primarily considered people searching for properties.

The revised product recognises several distinct user groups:

* Buyers.
* Renters / tenants.
* Sellers.
* Landlords.
* General visitors.

This means that the website cannot assume that every visitor wants to search for a property.

A visitor may instead want to:

* Sell a property.
* Rent out a property.
* Request a valuation.
* Find a rental.
* Buy a property.
* Request a viewing.
* Contact the realtor directly.

---

# 7. Effect on Information Architecture

The revised website structure becomes:

```text
Home
│
├── Properties
│   ├── Buy
│   ├── Rent
│   └── Property Details
│
├── Services
│   ├── Buying
│   ├── Selling
│   ├── Renting
│   └── Property Management / Letting
│
├── About the Realtor
│
├── Contact
│
└── Book a Viewing
```

The exact navigation may evolve during implementation, but the important change is that **the realtor's services and identity now sit alongside property discovery as first-class parts of the product.**

---

# 8. Effect on the Homepage

The homepage is no longer primarily a property-search interface.

It must establish three things immediately:

1. Who the realtor is.
2. What the realtor can help the visitor with.
3. What the visitor should do next.

The homepage should therefore incorporate:

* Realtor-focused hero section.
* Clear calls to action.
* Simple property discovery.
* Featured properties.
* Realtor introduction.
* Services.
* Value proposition / "Why Work With Me?"
* Trust and credibility.
* Testimonials where available.
* Contact and conversion opportunities.

Property listings remain prominent but no longer define the entire homepage.

---

# 9. Effect on Property Features

Existing property functionality remains valuable.

Property cards, property data and property discovery are still required by PRD v2.0.

However, property features must now support conversion.

The intended journey becomes:

```text
Property Card
      ↓
Property Details
      ↓
Interest
      ↓
Enquire / Book Viewing
      ↓
Qualified Lead
      ↓
Realtor Follow-up
```

The property is therefore a gateway into the realtor-client relationship.

---

# 10. Introduction of Lead Qualification

One of the most significant additions to the product is qualified inquiry handling.

The website should not rely exclusively on generic contact forms.

Different user intentions should eventually have appropriate inquiry pathways:

```text
Buyer
   ↓
Buying Inquiry

Renter
   ↓
Rental Inquiry

Seller
   ↓
Selling Inquiry

Landlord
   ↓
Letting / Management Inquiry
```

This allows the realtor to understand the visitor's needs before following up.

---

# 11. Introduction of Viewing Requests

Viewing functionality becomes a core conversion feature.

The initial implementation should use a **viewing request** model rather than guaranteeing an appointment.

The intended process is:

```text
Visitor selects:
Property
Date
Preferred time
Contact details
Optional message

        ↓

Request submitted

        ↓

Realtor receives request

        ↓

Realtor confirms availability
```

A full real-time calendar system is intentionally deferred.

---

# 12. What Remains Unchanged

The pivot does not invalidate the frontend work already completed.

Existing work involving:

* HTML structure.
* CSS styling.
* Property cards.
* Property presentation.
* Responsive layouts.
* JavaScript foundations.
* Git/GitHub workflow.

can continue to form part of the product.

The change is primarily in **product direction, information architecture and functionality**, rather than a requirement to discard the existing implementation.

---

# 13. What Must Change

Development from this point forward must place greater emphasis on:

* Realtor identity.
* Services.
* Calls to action.
* Trust and credibility.
* About page.
* Selling inquiries.
* Rental inquiries.
* Buying inquiries.
* Letting inquiries.
* Viewing requests.
* Contact workflows.
* Lead qualification.

The property system should continue to develop, but it should support these objectives rather than become a standalone marketplace.

---

# 14. Scope Control

The revised product explicitly excludes large marketplace and operational features from the initial website.

The initial website will not attempt to implement:

* A nationwide property marketplace.
* Multiple competing agencies.
* Thousands of listings.
* Online property purchasing.
* Payment processing.
* Full tenant management.
* Rental inspection software.
* Maintenance management.
* Complex CRM functionality.

These belong to future phases or the separate real estate application.

---

# 15. Long-Term Product Direction

The realtor website is the first product in a larger ecosystem.

### Product 1 — Realtor Website

```text
Present
   ↓
Attract
   ↓
Qualify
   ↓
Communicate
   ↓
Convert
```

### Product 2 — Real Estate Application

```text
Manage
   ↓
Inspect
   ↓
Document
   ↓
Maintain
   ↓
Report
```

The website should eventually provide a source of client and property data that can feed into the operational application.

However, the application is intentionally outside the current implementation scope.

---

# 16. Development Principle After the Pivot

From this point forward, major development decisions should be evaluated against **PRD v2.0**.

Before implementing a feature, the following question should be asked:

> **Which requirement or user journey does this feature support?**

This prevents the project from drifting back toward a generic property marketplace.

The primary development priority is:

```text
Realtor Identity
       ↓
Services
       ↓
Property Showcase
       ↓
Lead Generation
       ↓
Qualified Inquiry
       ↓
Viewing
       ↓
Realtor Follow-up
```

---

# 17. Decision

The project formally adopts **PRD v2.0 — Realtor Website** as its current product definition.

PRD v1.0 is retained for historical purposes.

The product pivot is considered a deliberate product-design decision rather than a failure of the original implementation.

The existing implementation will be progressively adapted to the revised product direction.

---

# 18. Related Documents

* `PRD-v1.md` — Original generic real estate website concept.
* `PRD-v2.md` — Current realtor-focused product requirements.
* `roadmap.md` — Development plan derived from PRD v2.0.
* `notes/` — Development session history.
