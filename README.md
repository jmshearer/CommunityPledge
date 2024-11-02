# Community Pledge

![Community Pledge Logo](Resources/Community%20Pledge%20Logo%20Small.png)

This repository contains the code and resources for a kiosk-based website that encourages community service and commitment. Hosted at our local polling place, this project invites each voter to pledge one action from a list of three simple, impactful commitments they will undertake to make our community a better place.  Anyone is welcome to use this project for the intended [apolitical use](LICENSE.md).

## About the Project

Voting is one way we contribute to society, but it's often the everyday acts of kindness, service, and positive engagement that truly build a stronger community. This kiosk project, hosted by the [Annville Church of the Brethren](https://www.annvillecob.org), offers a unique opportunity for individuals to commit to small, yet powerful, acts of service that transcend political affiliations.

### Goals

- **Encourage Community Engagement**: Inspire voters to think beyond the ballot and consider tangible ways they can positively impact the community.
- **Foster Unity**: By focusing on simple, accessible actions, we can bring people together regardless of background or beliefs.
- **Promote Everyday Service**: Highlight the importance of daily acts of kindness and service, demonstrating how small contributions lead to meaningful change.

## Features

- **User-Friendly Interface**: The kiosk presents three simple actions for visitors to choose from, making it easy for everyone to participate.
- **Non-Political Focus**: Designed to be a place of unity, the project emphasizes acts of service rather than political or ideological differences.
- **Anonymous Participation**: Voters simply select their choice on-screen, ensuring privacy and focusing solely on positive community engagement.

## Getting Started

*Note*: This kiosk setup assumes use with a touch-screen device at a stationary location, such as a polling place.  Data is tabulated primarily using localStorage so data will be local to each device.

### Installation
To set up the website locally, follow these steps:

1. Clone this repository:  
   ```bash
   git clone https://github.com/jmshearer/community-commitment-kiosk.git

2. ```cd Kiosk```

3. Rename `config.example.js` to `config.js` and modify as desired.

4. Open the `index.html` file in your preferred browser, prefeably in full-screen mode.

### Viewing Results

1. Open `admin.html` to view or reset locally-tabulated results.

### Configuration Options

The 3 options are held in `config.js`, along with a reportingUrl which can report votes to a RESTful API

## Server Configuration (optional)
Realtime data can be sent to a RESTful API via JSONP.  Refer to [Server Documentation](/Server)



## Contributing

We welcome contributions that help improve the user experience or expand the project to other locations. If you'd like to contribute, please submit a pull request or contact us via Issues.

---

This simple, interactive tool aims to empower everyone who visits to take action toward a stronger, more caring community. Thank you for helping make a difference!
