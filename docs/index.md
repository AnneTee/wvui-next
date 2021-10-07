---
sidebarDepth: 3
---

# About

Codex is a toolkit for building user interfaces within the Wikimedia Design System. It includes
documentation, design tokens, and Vue 3 components.

**TODO: talk about what you can do with this toolkit**

**TODO: enumerate the features of this library that make it exceptional (unmatched i18n support, a11y baked in, etc)**

This library works in tandem with the [Wikimedia Design Style Guide](https://design.wikimedia.org/style-guide/components/links.html), which documents all of our design standards and decisions.

## Usage and contributions

Visit [Getting started](/introduction/getting-started) to learn how to use this library.

If you'd like to contribute, head over to the [Contributing section](/contributing/guidelines) to
learn about ways you can contribute, our processes, and how to develop this library.

## Maintainers

TODO: explanation (DST are maintainers but contributions come from WMF, WMDE, and volunteers)

TODO: links (Phab, mediawiki.org pages, etc)

## Guiding principles

### Who we're serving

#### Prioritize end-user developer experience

We want the library to make building user interfaces straightforward and fast. We aim to serve users of varying levels of experience and to stick to existing patterns as much as possible so the library to facilitate developer onboarding.

#### Accessibility and internationalization

Wikimedia intends to serve every human being, eventually. We will follow [Wikimedia's accessibility principles](https://design.wikimedia.org/style-guide/design-principles_accessibility.html) and aim to support many languages. TODO: talk more about i18n

#### Designed and built for the wider MediaWiki ecosystem

We intend to serve developers working both within MediaWiki (core, skins, and extensions) and in the larger ecosystem, including web-based tools, static web applications, Jamstack applications, and some of our mobile apps. Platform-agnosticism will enable us to use this library as we continue expanding this ecosystem.

To keep our code as flexible as possible, we will aim to avoid entirely MediaWiki-specific components. When they can't be avoided, we will clearly label them as such and abstract out as much of the MediaWiki-specific code as possible in order to sequester it and aim to make it optional or configurable.

Components should be thoughtfully designed and developed to work across device widths

### Collaboration principles

#### Transparency

We work in the open and aim to provide consumers as much information as possible about what we're working on and how we're prioritizing that work.

#### Enable rather than enforce

The library maintainers welcome contributions from others and wish to collaboratively build resources to enable others to easily contribute to the library.

#### Knowledge sharing rather than knowledge silos

Contributors should have support and access to resources that allow them to understand and influence the system's workflows, methodologies, standards, and infrastructure.

### Code design patterns

#### Composition over complexity

Smaller components are easier to understand and more reusable.
    
#### Clarity over brevity

It's better for code to be easily understandable than to be as short or as clever as possible.

#### Use existing patterns

Sticking to patterns established in the greater front-end community enables more people to contribute. Following consistent patterns within the library makes the code easier to write, review, and maintain.

#### Keep the template simple

The template within single file Vue components can be a tool to clearly illustrate what a component is and does. Consider moving everything but the most basic JavaScript code to the script tag.
