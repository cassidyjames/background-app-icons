# Background App Icons

**Show Background Apps on the top bar with an icon and menu for quick access to actions**

![Screenshot](screenshot.png)

GNOME Shell supports background apps through the xdg-desktop-portal. People complain about not having status icons for their apps. This extension just shows those same background apps directly on the top bar, in case that's your thing.

Hovering an app icon shows a tooltip with its name. Selecting the icon shows its status, actions (like opening a specific part of the app), and menu items to open a window or quit the app. Everything you can already do from the Background Apps menu, dash, or app grid, but all right from the top bar.

## TODO

See the [open issues](https://github.com/cassidyjames/background-app-icons/issues) for everything, but in general, I'd like to focus on:

1. Exposing more useful actions in the menu, i.e. dynamic actions if it's not too hard.
2. Handling the too-many-icons case, e.g. by making the area collapsible and/or having a concept of hidden/pinned icons.
3. Exploring other "system tray" like interactions, but using all the modern APIs we already have.

### Known quirks

- Every time you search from the GNOME Shell Activities overview, several apps briefly show up as running in the background. This is the upstream behavior, it's just more noticable with the icons on the top bar instead of in the Background Apps menu. Maybe there's a way to filter these apps out; if so, it should be done upstream in GNOME Shell.

- Some apps look really bad with their full-color icon turned grayscale. Complain to those apps (or their Flatpak packaging) to include a symbolic icon.

## Requirements

GNOME Shell 50. Might work on other versions, but I haven't tested!

## Installation

Copy or symlink the extension directory to `~/.local/share/gnome-shell/extensions/background-app-icons@cassidyjames.com`, then enable it:

```sh
gnome-extensions enable background-app-icons@cassidyjames.com
```
