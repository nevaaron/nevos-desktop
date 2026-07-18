/* NevOS Module System — loaded before all app scripts and desktop.js */
var NevOS = {
  _registry: {},
  _windows: {},
  _dockItems: [],
  registerApp: function (type, def) { NevOS._registry[type] = def; },
  registerWindow: function (id, config) { NevOS._windows[id] = config; },
  addDockItem: function (item) { NevOS._dockItems.push(item); }
};
