---
sidebar_position: 0
---

# Hosting Quick Start

## Notice: Port Forwarding

There are two ways to make a domain accessible from the outside
Internet.

1.  You may register your domain with the Metaverse server by creating a
    Domain ID in the domain's web panel found at `http://localhost:40100/`. (Experimental)

2.  Alternatively, you can manually open the following ports on your
    router and firewall:

    `40100 : (tcp) administration web portal`

    `40102 : (udp) main connection for clients`

## Ubuntu 20.04 Linux (.deb)


1.  Open your terminal.

2.  Run the following command to download the server package:

    ```sh
    wget https://github.com/vircadia/vircadia-native-core/releases/download/2024.1.0/vircadia-server_2024.1.0-20240303-9761de1-0ubuntu1-1_amd64.deb
    ```
3.  Then run this command to update the package index and install the server:
    
    ```sh
    sudo apt-get update && sudo apt-get install ./vircadia-server_2024.1.0-20240303-9761de1-0ubuntu1-1_amd64.deb
    ```

4.  Go to *http://[IP address of your server]:40100/* in your web
    browser and complete the wizard to set up your domain.

5.  In your Vircadia web interface, open the *Explore* app and
    enter your server's IP address to get there.
