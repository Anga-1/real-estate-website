# Realtor Website — Development Roadmap

**Project:** Realtor / Real Estate Agent Website
**Current Product Version:** PRD v2.0
**Status:** In Development

---

# 1. Roadmap Purpose

This roadmap translates the requirements defined in **PRD v2.0** into a progressive development plan.

The project is intentionally developed in stages.

The immediate objective is to build a polished client-facing realtor website before introducing backend infrastructure or operational real-estate functionality.

The roadmap therefore follows:

```text
Realtor Digital Presence
        ↓
Property Showcase
        ↓
Lead Generation
        ↓
Viewing Requests
        ↓
Frontend Polish
        ↓
Backend & Persistent Data
        ↓
Realtor Dashboard
        ↓
Future Real Estate Application
```

---

# 2. Product Boundary

## Current Product

The current product is a:

> **Client-facing realtor website focused on professional presentation, property showcase, lead generation and client communication.**

## Future Product

A separate future application will address:

* Property management.
* Tenants.
* Rental inspections.
* Maintenance.
* Reporting.
* Operational workflows.

The future application is **not part of the initial website implementation**.

---

# 3. Development Principles

Every major feature should satisfy at least one requirement or user journey defined in PRD v2.0.

Development should prioritise:

1. Trust.
2. Clarity.
3. Relevant properties.
4. Easy contact.
5. Qualified inquiries.
6. Viewing requests.
7. Realtor follow-up.

The project should avoid unnecessary marketplace functionality.

---

# 4. Phase 1 — Realtor Digital Presence

### Objective

Make the website clearly represent an individual realtor rather than a generic property marketplace.

### Work

* [ ] Establish realtor identity.
* [ ] Refine homepage hero.
* [ ] Add professional realtor introduction.
* [ ] Add realtor photograph.
* [ ] Add biography.
* [ ] Add areas served.
* [ ] Add professional information where appropriate.
* [ ] Establish primary CTA: Contact Me.
* [ ] Establish secondary CTAs.
* [ ] Create About page.
* [ ] Create Services section.
* [ ] Create "Why Work With Me?" section.
* [ ] Establish trust/credibility elements.
* [ ] Add testimonials when genuine information is available.

### PRD References

* §11 Homepage
* §14 Realtor Introduction
* §15 Services
* §16 Why Work With Me?
* §27 About Page
* §32 Trust & Credibility
* §33 Testimonials

---

# 5. Phase 2 — Property Showcase

### Objective

Provide a polished catalogue of the realtor's current listings.

### Work

* [x] Establish initial property card design.
* [ ] Refine property card information hierarchy.
* [ ] Add listing status.
* [ ] Add Buy/Rent distinction.
* [ ] Establish property data structure.
* [ ] Create property listing view.
* [ ] Implement property filtering.
* [ ] Implement property search.
* [ ] Implement property details page.
* [ ] Add property image gallery.
* [ ] Add property features and amenities.
* [ ] Add realtor information to property details.
* [ ] Add property-specific enquiry CTA.
* [ ] Add viewing CTA.

### Property Information

Each property should support:

* Title.
* Price.
* Listing type.
* Property type.
* Status.
* Location.
* Bedrooms.
* Bathrooms.
* Size.
* Description.
* Features.
* Amenities.
* Images.
* Realtor.

### PRD References

* §12 Property Search / Discovery
* §13 Featured Properties
* §17 Property Listings
* §18 Property Card Requirements
* §19 Property Details Page
* §36 Property Data Model

---

# 6. Phase 3 — Lead Generation & Qualification

### Objective

Turn website visitors into meaningful, qualified leads.

This phase represents the central business purpose of the website.

### Work

* [ ] General contact form.
* [ ] Property enquiry form.
* [ ] Buying inquiry.
* [ ] Rental inquiry.
* [ ] Selling inquiry.
* [ ] Letting / property-management inquiry.
* [ ] Basic client-side validation.
* [ ] Form success states.
* [ ] Form error states.
* [ ] Appropriate CTA placement.
* [ ] Capture inquiry type.
* [ ] Capture relevant property information.
* [ ] Capture contact information.

### Buying Inquiry

* Name.
* Email.
* Phone.
* Preferred location.
* Property type.
* Approximate budget.
* Bedrooms.
* Intended timeframe.
* Message.

### Rental Inquiry

* Name.
* Email.
* Phone.
* Preferred location.
* Property type.
* Budget.
* Bedrooms.
* Desired move-in date.
* Number of occupants.
* Message.

### Selling Inquiry

* Name.
* Email.
* Phone.
* Property area/address.
* Property type.
* Approximate size.
* Bedrooms.
* Bathrooms.
* Selling timeframe.
* Message.

### PRD References

* §22 Qualified Inquiries
* §23 Buying Inquiry
* §24 Rental Inquiry
* §25 Selling Inquiry
* §26 General Contact
* §29 Calls to Action

---

# 7. Phase 4 — Viewing Requests

### Objective

Allow visitors to request a property viewing without introducing unnecessary calendar complexity.

### Initial model

The system records a **viewing request**, not a guaranteed appointment.

### Work

* [ ] Viewing request form.
* [ ] Property selection.
* [ ] Preferred date.
* [ ] Preferred time.
* [ ] Name.
* [ ] Contact information.
* [ ] Optional message.
* [ ] Basic validation.
* [ ] Submission confirmation.
* [ ] Clear distinction between requested and confirmed viewing.

### Workflow

```text
Visitor
   ↓
Select Property
   ↓
Select Preferred Date / Time
   ↓
Submit Request
   ↓
Confirmation
   ↓
Realtor Reviews Request
   ↓
Realtor Confirms Availability
```

### PRD References

* §20 Viewing Booking
* §21 Booking vs Requesting

---

# 8. Phase 5 — Frontend Polish

### Objective

Turn the functional frontend into a professional, accessible and responsive product.

### Work

* [ ] Mobile-first refinement.
* [ ] Desktop refinement.
* [ ] Responsive navigation.
* [ ] Mobile-friendly forms.
* [ ] Touch-friendly controls.
* [ ] Image optimisation.
* [ ] Loading states.
* [ ] Empty states.
* [ ] Error states.
* [ ] Accessibility review.
* [ ] Semantic HTML review.
* [ ] Keyboard navigation.
* [ ] Appropriate alt text.
* [ ] Consistent design system.
* [ ] Consistent CTA hierarchy.

### PRD References

* §30 Mobile Experience
* §31 Search Engine Optimization
* §32 Trust & Credibility
* §46 Definition of Done

---

# 9. Phase 6 — SEO & Discoverability

### Objective

Make the website discoverable for users searching for the realtor and relevant properties.

### Work

* [ ] Page titles.
* [ ] Meta descriptions.
* [ ] Semantic headings.
* [ ] Descriptive URLs.
* [ ] Image alt text.
* [ ] Property-specific metadata.
* [ ] Local SEO considerations.
* [ ] Structured data where appropriate.
* [ ] Social sharing metadata where appropriate.

### Potential Search Intent

```text
Realtor in [location]
Real estate agent in [location]
Properties for sale in [location]
Houses for rent in [location]
```

### PRD References

* §31 Search Engine Optimization

---

# 10. Phase 7 — Backend & Persistent Data

### Objective

Transform the frontend prototype into a data-driven application.

This phase begins **after the core frontend experience is stable**.

### Backend

* [ ] Node.js.
* [ ] Express.
* [ ] REST API.
* [ ] API architecture.
* [ ] Error handling.
* [ ] Environment configuration.

### Database

* [ ] SQL database.
* [ ] Relational data modelling.
* [ ] Properties.
* [ ] Leads.
* [ ] Viewings.
* [ ] Realtors.
* [ ] Services.
* [ ] Images.

### Initial Data Relationships

```text
Realtor
   │
   ├── Properties
   │       │
   │       └── Leads
   │
   └── Viewings
```

### PRD References

* §34 Lead Management
* §36 Property Data Model
* §37 Future Full-Stack Architecture
* §43 Initial Technical Scope
* §44 Later Technical Scope

---

# 11. Phase 8 — Realtor Dashboard

### Objective

Provide the realtor with authenticated access to their business information.

### Listings

* [ ] Create listing.
* [ ] Edit listing.
* [ ] Delete listing.
* [ ] Update listing status.
* [ ] Upload images.

### Leads

* [ ] View inquiries.
* [ ] View lead details.
* [ ] Change lead status.
* [ ] Associate leads with properties.

### Viewings

* [ ] View viewing requests.
* [ ] Confirm viewing.
* [ ] Reschedule viewing.
* [ ] Cancel viewing.
* [ ] Track upcoming appointments.

### Authentication

* [ ] Realtor login.
* [ ] Protected dashboard.
* [ ] Authentication.
* [ ] Authorisation where necessary.

### PRD References

* §35 Realtor Dashboard
* §44 Later Technical Scope

---

# 12. Phase 9 — Future Real Estate Application

This phase represents a separate major product extension.

It should not interfere with the development of the initial realtor website.

### Operational Features

* [ ] Property management.
* [ ] Tenant management.
* [ ] Rental inspections.
* [ ] Inspection photographs.
* [ ] Condition assessments.
* [ ] Defect recording.
* [ ] Inspection notes.
* [ ] Inspection comparisons.
* [ ] Inspection reports.
* [ ] Maintenance workflows.

### Inspection Workflow

```text
Property
    ↓
Inspection
    ↓
Rooms / Areas
    ↓
Condition
    ↓
Photos
    ↓
Notes / Defects
    ↓
Report
```

### PRD References

* §38 Future Real Estate Application
* §39 Rental Inspections
* §40 Rental Inspection Workflow
* §41 Connection Between Website and Application

---

# 13. Explicitly Out of Scope

The following should not be implemented during the initial website phase:

* [ ] Complete property marketplace.
* [ ] Thousands of listings.
* [ ] Multiple agencies.
* [ ] Complex recommendations.
* [ ] Mortgage calculations.
* [ ] Online property purchasing.
* [ ] Payment processing.
* [ ] Full tenant management.
* [ ] Rental inspection software.
* [ ] Maintenance management.
* [ ] Complex CRM functionality.

These features belong to future products or later phases.

---

# 14. Git & Documentation Workflow

Each development session should be reflected in GitHub.

### Session workflow

```text
Development
    ↓
Test
    ↓
Document
    ↓
Review
    ↓
Commit
    ↓
Push
```

### Session documentation

Session notes should remain in:

```text
notes/
├── session-01/
├── session-02/
├── session-03/
└── ...
```

Each session should record:

* Objective.
* Work completed.
* Concepts learned.
* Problems encountered.
* Decisions made.
* Files changed.
* Next steps.

### Product documentation

Product-level documentation is maintained separately:

```text
docs/product/
├── PRD-v1.md
├── PRD-v2.md
└── product-pivot.md
```

This distinction separates **product decisions** from **development history**.

---

# 15. Definition of Done

The initial website is complete when:

* [ ] Professional homepage exists.
* [ ] Realtor identity is clearly presented.
* [ ] Services are clearly communicated.
* [ ] Property listings can be browsed.
* [ ] Property cards are responsive.
* [ ] Property details can be viewed.
* [ ] Buy/Rent distinction exists.
* [ ] Search/filtering works.
* [ ] Users can contact the realtor.
* [ ] Users can submit property inquiries.
* [ ] Users can request a viewing.
* [ ] Forms perform basic validation.
* [ ] Website works on mobile and desktop.
* [ ] Basic accessibility requirements are addressed.
* [ ] Basic SEO is implemented.
* [ ] GitHub repository contains project history.
* [ ] Development sessions are documented.
* [ ] Website is deployed.

---

# 16. Current Development Position

The project currently has an established frontend foundation and initial property presentation.

The immediate priority is to transition the existing interface from a generic real-estate presentation toward a clearly defined **realtor digital presence**.

### Immediate sequence

```text
Current Frontend
      ↓
Realtor Identity
      ↓
Services
      ↓
Property Showcase Refinement
      ↓
Property Details
      ↓
Lead Generation
      ↓
Viewing Requests
      ↓
Frontend Polish
      ↓
Backend
```

---

# 17. Guiding Question

Every significant design or development decision should ultimately support:

> **"If I am looking to buy, sell or rent, why should I contact this realtor?"**

If a feature does not contribute meaningfully to answering that question or supporting the resulting user journey, it should be questioned before implementation.

---

# 18. Product Evolution

```text
PRD v1.0
Generic Real Estate Website
        │
        ↓
Product Review
        │
        ↓
PRD v2.0
Realtor Website
        │
        ↓
Lead Generation Platform
        │
        ↓
Backend & Realtor Dashboard
        │
        ↓
Future Real Estate Operations
        │
        ↓
Inspection / Property Management Application
```

The project is therefore intentionally evolving from a frontend portfolio project into a progressively more complete real-estate technology ecosystem.
