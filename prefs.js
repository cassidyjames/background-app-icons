import Adw from 'gi://Adw';
import Gtk from 'gi://Gtk';

import {ExtensionPreferences, gettext as _} from 'resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js';

const PANEL_POSITIONS = ['left', 'right'];

export default class BackgroundAppIconsPreferences extends ExtensionPreferences {
    fillPreferencesWindow(window) {
        const settings = this.getSettings();

        const page = new Adw.PreferencesPage();
        window.add(page);

        const group = new Adw.PreferencesGroup();
        page.add(group);

        const row = new Adw.ComboRow({
            title: _('Panel position'),
            subtitle: _('Where to show background app icons in the top bar'),
            model: new Gtk.StringList({strings: [_('Left'), _('Right')]}),
        });

        row.selected = PANEL_POSITIONS.indexOf(settings.get_string('panel-position'));
        row.connect('notify::selected', () =>
            settings.set_string('panel-position', PANEL_POSITIONS[row.selected]));

        group.add(row);
    }
}
