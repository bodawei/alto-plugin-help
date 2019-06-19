alto-plugin-help
===============
[![Version](https://img.shields.io/npm/v/alto-plugin-help.svg)](https://npmjs.org/package/alto-plugin-help)
[![License](https://img.shields.io/npm/l/alto-plugin-help.svg)](https://github.com/bodawei/alto-plugin-help/blob/master/package.json)

### About
This is a fork of [@oclif/plugin-help](https://github.com/oclif/plugin-help).
The reason for this fork is to change this to allow space-separated subcommands rather than
the heroku-style with colon delimited subcommands.  This is a minimal change, which should allow
this to be used with the rest of the `@oclif/*` system.

### Notes/Next steps
* This hasn't been particularly heavily tested, at this moment.
* Would like to set up a "heroku" flag in the package hosting this one, and let that drive whether this does or does not accept colons.

### Name explanation
This is an alternate oclif, which is to say: "alt-oclif", which is to say "alto-clif".

### Thanks

Thanks to the [`@oclif` team and contributors](https://github.com/oclif/command/graphs/contributors).
There are are lot of great ideas in oclif! Without them, of course, this package wouldn't exist!

Original README info, below
===============

standard help for oclif
