## **👋 Welcome to Homio**

Homio is a clean, minimal, and fully YAML-based dashboard for Home Assistant that i build for a bit of fun. It's still work in progress but wanted to share it with you after receiving many requests for it. It’s built with tablets in mind — perfect for a wall-mounted screen — but it also works well on mobile thanks to its responsive layout.

Everything is done in YAML to give you full control and make it easier to share, reuse, and tweak. No UI editors here — just clean files and templates that you can version, back up, and build on.



## **✅ What You’ll Need**

Before jumping in, make sure you’ve got the basics covered:

1. Home Assistant in storage Mode
Even though Homio is written entirely in YAML, you should leave the Lovelace mode set to storage in configuration.yaml. This allows you to keep using the UI editor for other dashboards, while loading Homio as a YAML dashboard.

```text
lovelace:
  mode: storage
  dashboards:
    dashboard-homioy:
      mode: yaml
      title: "homio"
      icon: mdi:star-plus-outline
      show_in_sidebar: true
      filename: dashboards/homio/homio.yaml
```

3. A Few Custom Cards
Homio uses a couple of custom cards.

button-card by Romraider — https://github.com/custom-cards/button-card 

This is the main building block of Homio.

layout-card by Thomas Loven — https://github.com/thomasloven/lovelace-layout-card

You’ll need to use the slightly modified version included in this repo to support extra CSS properties.

This card need to be installed here

/www/community/layout-card-modified/layout-card-modified.js


## 📁 Folder Structure

Everything lives under `/config` in your Home Assistant setup:

```text
/config
│
├── dashboards/
│   └── homio/
│       └── homio.yaml               # Main dashboard YAML file
│
├── dashboards/templates/
│   ├── includes/                    # Layout includes and card groups
│   │   ├── layouts/                 # Layout-specific YAML includes
│   │   └── rooms/                   # Optional: room-specific cards
│   └── templates/                   # All button-card templates
│       └── homio_templates.yaml
│
├── helpers/
│   └── homio_helpers.yaml          # All required helpers (input_booleans, numbers, etc.)
│
├── themes/
│   └── homio/
│       └── homio.yaml              # The Homio theme
│
├── sensors.yaml                    # Any custom sensors used by Homio
│
├── automations.yaml
├── scripts.yaml
├── scenes.yaml
└── configuration.yaml              # Where includes are added
```

## **💡 What Goes Where?**

**homio.yaml:** Your main dashboard file. This is where each screen and layout is defined.

**homio_templates.yaml:** All your button-card templates live here — nice and tidy.

**includes/:** Used for reusable layout snippets and grouped cards, so the main dashboard stays clean.

**homio_helpers.yaml:** All required helpers (like input_booleans or input_numbers) go here. No need to create them through the UI.

**homio.yaml (theme):** The visual style of Homio. Works best with a minimal, soft look.

## **🖼️ Assets Setup – Images & Icons**

To make Homio look the way it’s intended, you’ll need to add your own room images and icons to the www folder in Home Assistant. These are used for things like room backgrounds and custom icons inside button cards. I dont use the built in mdi icons as i dont like them, i do use the material icons though but download them from google at the 100 weight as i feel they fitted my design better. I will include these in the repo and i plan to keep adding to them as well.

https://fonts.google.com/icons?icon.query=light

📁 Folder Structure
Inside your /config/www directory, create the following folders:

```
www/
└── images/
    └── Homio/
        ├── rooms/       ← Background images for rooms
        └── icons/       ← SVG icons used in entity cards

```

🖼️ Room Backgrounds
Place your .jpg files in:

```
/config/www/images/Homio/rooms/
```

Make sure the file names match what you use in the image: variable (without the file extension). For example:

```
image: living_room  # Will load living_room.jpg
```

🧩 Icons
Put your .svg icon files here:

```
/config/www/images/Homio/icons/
```

These are used for visual cues like heating, doors, or lights. You can reference them with:

```
entity_picture: /local/images/Homio/icons/heating.svg
```

## **Layout Cards**

🧱 Layout Configuration
Homio uses a consistent layout across all dashboards powered by custom:layout-card (modified version required – see Setup Requirements). The layout file handles page sizing, grid setup, and responsive breakpoints.

📁 Location
The layout file lives here:

```
/config/dashboards/templates/includes/layouts/homio_screen_layout.yaml
```

**homio_screen_layout**
Here’s what’s inside the layout file:

```
layout:
  grid-template-columns: 1fr
  grid-column-gap: 0px
  margin: 0
  height: 100vh
  position: relative
```

This layout ensures a single-column responsive grid and full-height display.

📋 Usage Example
Use the layout in your dashboard YAML like this:

```
- type: custom:grid-layout
  title: lounge
  path: lounge
  layout: !include /config/dashboards/templates/includes/layouts/homio_screen_layout.yaml
  cards:
    - type: custom:button-card
      template:
        - homio_room
      name: Lounge
      variables:
        image: lounge
        temperature: sensor.lounge_temperature
        humidity: sensor.lounge_humidity
        show_temp: true
        show_humid: true
```

**homio_entity_layout**

The homio_entity_layout.yaml is a layout include file designed to make placing entity cards in a consistent, responsive layout easy. It handles spacing, responsive column counts, and layout switching for mobile views.

You don’t need to touch this file — just include it where you want a grid of homio_entity cards (or other custom buttons) to appear.

💡 Features
Horizontal scroll layout on large screens

Responsive grid (2 columns) on tablets

Stacked layout (1 column) on mobile

Scroll snap and animation-friendly

Fully reusable via !include

🛠️ Usage Example

```
- type: custom:layout-card
  layout_type: custom:grid-layout
  layout: !include /config/dashboards/templates/includes/homio_entity_layout.yaml
  cards:
    - type: custom:button-card
      template: homio_entity
      entity: binary_sensor.front_door
      name: Front Door
      variables:
        icon: door
    - type: custom:button-card
      template: homio_entity
      entity: binary_sensor.windows
      name: Windows
      variables:
        icon: window
    - type: custom:button-card
      template: homio_entity
      entity: binary_sensor.motion
      name: Motion
      variables:
        icon: motion
```

**homio_navigation.yaml**

This file builds the Homio Navigation Bar, automatically adapting to desktop and mobile devices. It includes the logo, navigation links, and current time display — all styled to match the Homio theme. You don’t need to touch this file

🧱 File Structure Overview

```
type: vertical-stack
cards:
  - type: conditional
    conditions: # Desktop navigation
      - condition: screen
        media_query: "(min-width: 1250px)"
    card:
      type: custom:layout-card
      layout_type: custom:grid-layout
      layout:
        grid-template-columns: max-content 1fr max-content
        margin: 0 8vw
        position: absolute
        inset: 60px 0 auto 0
      cards:
        - type: custom:button-card
          template: homio_logo
        - type: custom:layout-card
          layout_type: custom:grid-layout
          layout:
            grid-auto-flow: column
            place-content: center
            grid-column-gap: 50px
          cards: !include /config/dashboards/templates/includes/homio_navigation_list.yaml
        - type: custom:button-card
          template: homio_time

  - type: conditional
    conditions: # Mobile drawer
      - condition: screen
        media_query: "(max-width: 1249px)"
      - condition: state
        entity: input_boolean.homio_mobile_navigation
        state: "on"
    card:
      type: custom:layout-card
      layout_type: custom:grid-layout
      layout:
        grid-template-columns: 1fr
        height: 100vh
        width: 250px
        margin: 0
        padding: 0 0 0 60px
        inset: 0 auto auto 0
        background: rgba(255,255,255,0.1)
        backdrop-filter: blur(15px)
      cards:
        - type: custom:button-card
          template: homio_logo
        - type: custom:layout-card
          layout_type: custom:grid-layout
          layout:
            grid-auto-flow: row
            grid-row-gap: 30px
          cards: !include ../includes/homio_navigation_list.yaml
        - type: custom:button-card
          template: homio_time
```

🧩 Related Files Required
Make sure the following exists

/config/dashboards/templates/includes/homio_logo.yaml	- **Renders the Homio logo as a button card**
/config/dashboards/templates/includes/homio_time.yaml -	**Displays the current time**
/config/dashboards/templates/includes/homio_navigation_list.yaml - **Holds navigation items (icons/links)**
input_boolean.homio_mobile_navigation (Helper) -	**Toggles mobile drawer visibility**

**homio_navigation_list.yaml**

This file contains the individual navigation buttons used in the top and side navigation bars. Each button links to a different Homio room/dashboard screen.

⚠️ Recommendation: Keep it to 8 or fewer links for the best layout on larger screens. You only need to change the label and path to what ever your dashboard for that room is called

```
- type: custom:button-card
  template:
    - homio_nav_link
  label: room1
  variables:
    path: /dashboard-homio/room1

- type: custom:button-card
  template:
    - homio_nav_link
  label: room2
  variables:
    path: /dashboard-homio/room2

- type: custom:button-card
  template:
    - homio_nav_link
  label: room3
  variables:
    path: /dashboard-homio/room3

- type: custom:button-card
  template:
    - homio_nav_link
  label: room4
  variables:
    path: /dashboard-homio/room4

- type: custom:button-card
  template:
    - homio_nav_link
  label: room5
  variables:
    path: /dashboard-homio/room5

- type: custom:button-card
  template:
    - homio_nav_link
  label: room6
  variables:
    path: /dashboard-homio/room6

- type: custom:button-card
  template:
    - homio_nav_link
  label: room7
  variables:
    path: /dashboard-homio/room7

- type: custom:button-card
  template:
    - homio_nav_link
  label: room8
  variables:
    path: /dashboard-homio/room8

```











