# simple

## Overview
simple allows you to create responsive landing pages quickly and easily, utilizing HTML, CSS, and minimal JavaScript. The design adapts to light and dark modes based on the user's operating system settings.  Zero Dependencies.

## Directory Structure
Code is in the src directory
Everything is laid out directly
* `/src` is the main codebase.
* `/src/css` is css
* `/src/images` is images
* `/src/js` is the tiny bit of javascript


[Preview Here](https://treehousetim.github.io/simple/src/)

## Features
- **Responsive Grid System**: Predefined grid classes for flexible layout management.
- **CTA Button**: Easily customizable
- **Light/Dark Mode**: Automatically adapts to the user's OS theme preferences.
- **Sticky Navigation**: Header remains at the top of the page during scrolling.
- **Expandable Navigation**: Hamburger menu for mobile view, showing a dropdown navigation menu.
- **Customizable Brand Colors**: Easily adjustable brand color scheme.

## Page Layout

### Body,header, and top navigation menu

```
body
    header
        nav
            div class="logo"
            div class="extra-elements"
            ul  class="nav-links (lines)
            div class="menu-icon"
```

Note, in the header, the div and nav links can appear in any order you want.  They render left to right.

- **Logo**: The img tag here is controlled by the css variables for sizing
- **Extra Elements**: Place anything you want here. The example is a contact us button for a CTA
- **Menu Icon** defaults to a css generated hamburger menu. You can use anything in this container.


### The site container
This comes in 3 sizes specified via class name.  This is part of the name, not an additional class.

- **sm**: Small - max width of 75 rem
- **md**: Medium - max width of 95 rem
- **lg**: Large - no max width

```
body
    div class="site-container-(size)"
```

Inside the site-container div is placed a series of sections.

```
body
    div class="site-container-(size)"
    section
    section
    section
```

Sections can be defined using `<section>` tags or any other block element with a class `<div class="section">`.  In the documentation we will show only the class name, but our recommendation is to use the `<section>` tag.

### Section padding sizing.

- **Small-Space Section Style**
  - `.space-sm`:
    - Applies a padding of `.75rem .75rem` (which translates to `12px` for all sides).

- **Medium-Space Section Style** *default*
  - `.space-md or omit`
    - Applies a padding of `2rem 1rem` (which translates to `32px` top and bottom, and `16px` left and right).

- **Large-Space Section Style**
  - `.space-lg`:
    - Applies a padding of `3.75rem 1.25rem` (which translates to `60px` top and bottom, and `20px` left and right).

### Section Layout for centering.

- **Centered Text Section Styles**
  - `.center`:
    - Applies center alignment to the text within the section.

### Top and Bottom Padding for Section Children
  - `.tp` - Adds a padding-top of `.625rem` (which translates to `10px`).
  - `.bp` - Adds a padding-bottom of `.625rem` (which translates to `10px`).



## Grid System
Use `.row` and `.row-[number]` classes to create responsive grid layouts. These can be nested to create whatever you need - the demo page shows this nesting.

```html
<h2>3 columns (the default) on large / 1 column on small (three divs are stacked on small)</h2>
<div class="row">
    <div>
        <p>Some Text</p>
    </div>
    <div>
        <p>Second Text</p>
    </div>
    <div>
        <p>Third Text</p>
    </div>
</div>
```

- `.row`: Default to three equal-width columns.
- `.row-1` to `.row-12`: Define columns ranging from one to twelve.

## Light/Dark Mode
The framework uses CSS variables to define light and dark color schemes:

- **Light Mode**:
  - Background: #f0f0f0
  - Text: #333
- **Dark Mode**:
  - Background: #333
  - Text: #eee

The brand color remains the same across both modes.

## Navigation
- The header contains a logo, navigation links, and a call-to-action button.
- On smaller screens, the navigation links are hidden and replaced with a hamburger menu. Clicking the menu icon toggles the dropdown menu.

## Customization
You can easily adjust the framework to fit your brand's color scheme by modifying the CSS variables defined in the `:root`.

## Usage
1. **Include the CSS**: Add the framework's CSS file to your project.
2. **Include the scripts.js** Add the tiny bit of JS to your project or page for dropdown nav.
2. **Set Up HTML Structure**: Use the predefined classes for grid and navigation.
3. **Customize Colors**: Adjust the CSS variables in the `:root` to fit your brand.
