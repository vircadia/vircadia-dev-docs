---
sidebar_position: 1
---

# Networking Details

A Vircadia domain reserves a range of four ports to operate on, usually starting at `40100`. (Note that the encrypted ports may not be implemented yet.) These ports are:

- 40100 (+0): (tcp) administrative http connection
- 40101 (+1): (tcp) administrative https (encrypted) connection
- 40102 (+2): (udp) main connection from clients
- 40103 (+3): (udp) main connection from clients (encrypted)

Generally speaking, only port `40102` must be publicly exposed to permit others to connect to a domain.

In addition there are six "assignment clients" that must run in order for the domain to be operational. These clients run alongside the domain server and must be able to connect with any outside user. These clients are:

- **asset-server**: stores object data to download to the user
- **audio-mixer**: controls what each user would hear
- **avatar-mixer**: allows users to see each other
- **entity-script-server**: runs actions inside the domain
- **entity-server**: describes the location of each object in the domain
- **messages-mixer**: passes messages between users in the domain

These assignment clients use UDP connections on a port number assigned by the operating system at launch. These ports will be within the [ephemeral port range](https://en.wikipedia.org/wiki/Ephemeral_port).