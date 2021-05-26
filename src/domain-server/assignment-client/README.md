# Assignment Client

An assignment client can be one of six types:

* **Asset Server** - Allows the upload and download of files from the server.
* **Audio Mixer** - Receives all audio streams and mixes them into single streams to send out to each node (user).
* **Avatar Mixer** - Receives all avatar and joint data and mixes them into single streams to send out to each node (user).
* **Entity Mixer** - Handles the state of all entities and their respective properties in a virtual world.
* **Entity Script Server** - Provides server side scripting functionality.
* **Messaging Mixer** - Handles all messaging activity between nodes on the domain (users).

The Domain server will spin up six assignment clients, and assign each one a role of each type listed above.

## [Command Line Parameters](./command-line-parameters.md)
