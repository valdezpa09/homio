## **👋 Welcome to Homio**

Homio is a clean, minimal, and fully YAML-based dashboard for Home Assistant that i build for a bit of fun. It's still work in progress but wanted to share it with you after receiving many requests for it. It’s built with tablets in mind — perfect for a wall-mounted screen — but it also works well on mobile thanks to its responsive layout.

Everything is done in YAML to give you full control and make it easier to share, reuse, and tweak. No UI editors here — just clean files and templates that you can version, back up, and build on.



## **✅ What You’ll Need**

Please make sure to make a full backup of your current home assistant state, its just best practice. Before jumping in, make sure you’ve got the basics covered:

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

slider v2 by AnthonMS - https://github.com/AnthonMS/my-cards/tree/main


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

Layout Configuration
Homio uses a consistent layout across all dashboards powered by custom:layout-card (modified version required – see Setup Requirements). The layout file handles page sizing, grid setup, and responsive breakpoints.

Location
The layout file lives here:

```
/config/dashboards/templates/includes/layouts/homio_screen_layout.yaml
```

## **homio_screen_layout**
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

Usage Example
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

## **homio_entity_layout**

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

## **homio_navigation**

This file builds the Homio Navigation Bar, automatically adapting to desktop and mobile devices. It includes the logo, navigation links, and current time display — all styled to match the Homio theme. You don’t need to touch this file

File Structure Overview

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

Related Files Required
Make sure the following exists

/config/dashboards/templates/includes/homio_logo.yaml	- **Renders the Homio logo as a button card**
/config/dashboards/templates/includes/homio_time.yaml -	**Displays the current time**
/config/dashboards/templates/includes/homio_navigation_list.yaml - **Holds navigation items (icons/links)**
input_boolean.homio_mobile_navigation (Helper) -	**Toggles mobile drawer visibility**

## **homio_navigation_list**

This file contains the individual navigation buttons used in the top and side navigation bars. Each button links to a different Homio room/dashboard screen.

⚠Recommendation: Keep it to 8 or fewer links for the best layout on larger screens. You only need to change the label and path to what ever your dashboard for that room is called

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

## **Base cards**

A few base cards that you wont need to touch but just so you know what they are doing

## **homio_default**

This is the foundational button card template used across most components. It sets consistent styles like font, layout and background effects

```
homio_default:
  styles:
    card:
      - "--mdc-ripple-color": transparent
      - "-webkit-tap-highlight-color": transparent
      - position: relative
      - border: none
      - border-radius: 0
      - padding: 0
      - margin: 0
      - animation: fadeIn 0.3s ease-in forwards
  extra_styles: |
    @keyframes fadeIn {
      from {
        opacity: 0
      }
      to {
        opacity: 1
      }
    }

```

## **homio_entity**

This template extends homio_default and is used for entity status cards such as lights, climate status, water, motion, doors, windows, etc. It’s clean, responsive, and visually consistent across different types of entities.

```
homio_entity:
  template:
    - homio_default
  show_entity_picture: true
  entity_picture: |
    [[[
      return `/local/images/Homio/icons/${variables.icon}.svg`;
    ]]]
  styles:
    card:
      - height: 85px
      - scroll-snap-align: start
    img_cell:
      - justify-self: end
      - align-self: center
    icon:
      - width: 22px
      - height: 22px
```

## **Main Cards**

These are currently the cards I have setup, there are more to come.

## **homio_room**

The homio_room card acts as the top visual banner for each room or area on your dashboard. It typically includes a large background image, room name, temperature/humidity readouts, and optional motion detection feedback.

This card is intended to be used once per room dashboard, placed at the top for an immersive overview.

Make sure to use the template named homio_room for the custom button card as per the example below

### `Variables`

| Variable         | Default        | Description                                                                 |
|------------------|----------------|-----------------------------------------------------------------------------|
| `image`          | —              | Name of the background image (omit `.jpg`). Looks inside `/www/images/Homio/rooms/`. |
| `image_position` | `center center`| Optional background alignment of the image.                                |
| `show_motion`    | `false`        | Set to `true` to enable the motion detection banner.                        |
| `motion_sensor`  | `""`           | Entity ID of the motion binary sensor. Required if `show_motion` is `true`.|
| `show_temp`      | `false`        | Set to `true` to display the temperature summary field.                     |
| `temp_sensor`    | `""`           | Entity ID of the temperature sensor. Required if `show_temp` is `true`.     |
| `show_humid`     | `false`        | Set to `true` to display the humidity summary field.                        |
| `humid_sensor`   | `""`           | Entity ID of the humidity sensor. Required if `show_humid` is `true`.       |


Example Usage

```
- type: custom:button-card
  template: homio_room
  name: Living Room
  variables:
    image: living_room
    image_position: center center
    show_motion: true
    motion_sensor: binary_sensor.living_room_motion
    show_temp: true
    temp_sensor: sensor.living_room_temperature
    show_humid: true
    humid_sensor: sensor.living_room_humidity
```

This will display a room card titled Living Room with:

Background image: /local/images/Homio/rooms/living_room.jpg

Motion banner when motion is detected.

Temperature and humidity status shown at the bottom.

## **homio_light**

The homio_light template extends homio_entity to provide dynamic control and status display for light entities. It includes a built-in brightness percentage readout and an animated slider (using my-slider-v2) for seamless brightness adjustment.

This card provides a clean, minimal UI with behavior tailored to typical light use cases.

Make sure to use the template named homio_light for the custom button card as per the example below

**Features**
Shows brightness percentage when light is on.

Tap toggles light on only (off handled via hold).

Hold toggles light off.

Animated brightness slider appears only when light is on.

Smooth transform transition for slider reveal.

Example
```
- type: custom:button-card
  template: homio_light
  entity: light.kitchen_ceiling
  name: Kitchen
  variables:
    icon: ceiling
```

This will show:

A light icon (optional custom via icon variable),

"Brightness - 78%" when light is on,

"Off" when light is off,

A horizontal slider (animated in) for brightness control when light is on.

my-slider-v2 must be installed via HACS or manually, and the resource must be included in your Lovelace configuration.

## **homio_thermostat**

The homio_thermostat template brings smart control to your heating setup. It combines HVAC mode switching, target temperature setting, and a clean display layout using only button-card and layout-card components.

Make sure to use the template named homio_thermostat for the custom button card as per the example below

Required Helpers & Setup

input_boolean.homio_heating_control: Controls visibility of the temp controls

input_number.homio_thermostat_target_temperature: Stores the temperature to be sent

Example

```
- type: custom:button-card
  template: homio_thermostat
  entity: climate.living_room_thermostat
  name: Heating
```

## **A full working example**

The dashboard is located here /config/dashboards/homio/homio.yaml

Make sure to add the below on the first line of any dashboard you create

button_card_templates: !include_dir_merge_named /config/dashboards/templates/button_cards


```
button_card_templates: !include_dir_merge_named /config/dashboards/templates/button_cards
views:
  - type: custom:grid-layout
    title: lounge
    path: lounge
    layout: !include /config/dashboards/templates/includes/homio_screen_layout.yaml
    cards:
      - type: custom:button-card
        variables:
          image: lounge
          image_position: center center
          show_humid: true
          humid_sensor: sensor.living_room_sensor_humidity
          show_temp: true
          temp_sensor: sensor.living_room_sensor_temperature
          show_motion: true
          motion_sensor: binary_sensor.hue_motion_sensor_living_room
        template:
          - homio_room
        name: Lounge Room
      - type: custom:layout-card
        layout_type: custom:grid-layout
        layout: !include /config/dashboards/templates/includes/homio_entity_layout.yaml
        cards:
          - type: custom:button-card
            variables:
              icon: window
            template:
              - homio_entity
            entity: binary_sensor.living_room_windows
            name: Windows
          - type: custom:button-card
            variables:
              icon: lamp
            template:
              - homio_light
            entity: light.hue_living_room_lamp
            name: Lamp
          - type: custom:button-card
            variables:
              icon: pendent
            template:
              - homio_light
            entity: light.hue_living_room_front
            name: Front Light
          - type: custom:button-card
            variables:
              icon: pendent
            template:
              - homio_light
            entity: light.hue_living_room_back
            name: Back Light
          - type: custom:button-card
            variables:
              icon: tv
            template:
              - homio_entity
            entity: media_player.living_room_samsung_tv
            name: Samsung TV
          - type: custom:button-card
            variables:
              icon: apple_tv
            template:
              - homio_entity
            entity: media_player.apple_tv
            name: Apple TV
```
