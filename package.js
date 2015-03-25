/* Meteor package information for package Dockerode*/
Package.describe({
  name: "ongoworks:dockerode",
  summary: "Docker remote API. Wraps the dockerode package for Meteor.",
  version: "2.1.1",
  git: "https://github.com/ongoworks/meteor-dockerode"
});

Npm.depends({
  "dockerode": "2.1.1"
});

Package.on_use(function (api) {
  api.export('Docker');
  api.add_files('dockerode.js', 'server');
});
