/* Meteor package information for package Dockerode*/
Package.describe({
  summary: "Docker remote API. Wraps the dockerode package for Meteor.",
  name: "ongoworks:dockerode",
  version: "0.1.2",
  git: "https://github.com/ongoworks/meteor-dockerode"
});

Npm.depends({
  "dockerode": "2.0.2"
});

Package.on_use(function (api) {
  api.export('Docker');
  api.add_files('dockerode.js', 'server');
});
