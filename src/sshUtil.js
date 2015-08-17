const Gio = imports.gi.Gio;
const Util = imports.misc.util;

function connect(command, environment) {
    var file = Gio.File.new_for_path('/usr/bin/guake');
    if (!file.query_exists(null)) {
        Util.spawn(['gnome-terminal', '-e', command])
    } else {
        global.log(command);
        Util.spawn(['/usr/bin/guake', '-n','instance', '-e', command]);
        Util.spawn(['/usr/bin/guake', '--rename-current-tab', environment, '--show']);
    }
}