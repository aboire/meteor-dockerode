Package.describe({
  name: "dockerode",
  summary: "Wraps the dockerode package for Meteor"
});

Npm.depends({
  "dockerode": "1.3.0"
});

Package.on_use(function (api) {  
  api.export('Docker');
  api.add_files('dockerode.js', 'server');
});