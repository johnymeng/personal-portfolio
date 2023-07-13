export default {
    author: "Johnny Meng",
    hero: {
      subtitle: "University of Toronto, Comp. Eng 2T6.",
      description: "Currently working as a research assistant at YanLabs optimizing bio-based Triboelectric Nanogenerators.",
      cta: "Learn More",
    },
    products: {
      featured: [
        {
          name: "VEX VRC V5 Robotics",
          medium: "C++ · Embedded Systems · CAD",
          summary: "Team Leader and Driver for Team 1022A.",
          copy: [
           "3x World Championship Qualifier, 3x Excellence Award Winner \nPeak Rank: 140/25,000."
          ],
          links: {
            color: "#363636",
            primary: {
              name: "Learn More",
              url: "https://ningyanlab.com/"
            }
          },
          images: [
            "/doubletext/graphene_2.jpg",
            "/doubletext/teng.png",
            "/doubletext/aerogel.png",
            "/doubletext/teng_2.jpg",
          ]
        },
      ],
      //adjust padding for text within vex card
      vex: [
        {
            name: "Reversi AI",
            medium: "Language: C · APS105 Lib",
            summary: "Mini-Max Alpha-Beta Pruning AI CLI Program written in C for APS105 at UofT.",
            copy: [
              "Depth 8 per move within 1 second run time. Beats course AI, APS105_Smartest, 55-1. Placed 13th out of approx. 550 students.",
            ],
            links: {
              color: "#363636",
              primary: {
                name: "Learn more",
                url: "https://climblist.com/"
              }
            },
            images: [
              "/climblist/0.jpg",
              "/climblist/1.jpg",
            ]
          },
      ],
      // Only supports 0-3 at the moment
      minor: [
        {
          name: "My Projects",
          description: "Ongoing and completed projects.",
          link: {
            name: "My Projects",
            // add link to projects
            url: "https://github.com/zendesk/volunteer_portal"
          }
        },
        {
          name: "UofT",
          description: "My experience as a part of SKULE 2T6.",
          link: {
            name: "UofT",
            url: "https://www.engineering.utoronto.ca/"
          }
        },
        {
          name: "VEX Robotics",
          description: "3 Years in VRC, 3 World Championships.",
          link: {
            name: "VEX",
            url: "https://www.vexrobotics.com/competition?___store=vexroboticsca&___from_store=vexrobotics"
          }
        }
      ]
    },
    logoSection: {
      title: "A Part of",
      // Only supports 0-3 at the moment
      logos: [
        {
          src: "/logos/UOFT.png",
          url: "https://www.engineering.utoronto.ca/",
          alt: "UofT"
        },
        {
          src: "/logos/VEX.png",
          url: "https://www.vexrobotics.com/v5/competition",
          alt: "Vex Robotics"
        },
        {
          src: "/logos/claremont_2.svg",
          url: "https://claremont.saanichschools.ca/",
          alt: "Claremont Secondary"
        }
    ]
    },
    footer: {
      tagline: "Johnny Meng — Toronto, Canada",
      links: [
        {
          name: "Twitter",
          url: "https://twitter.com/samxstudio",
          fa: "fab fa-twitter" // Code from: https://fontawesome.com/v5/icons/twitter?s=brands
        },
        {
          name: "Medium",
          url: "https://medium.com/@samxie",
          fa: "fab fa-medium"
        },
        {
          name: "Github",
          url: "https://github.com/johnymeng",
          fa: "fab fa-github"
        },
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/johnny-meng-7a3597208?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B2OxRiPpnQQeLJIzKAiP%2F7Q%3D%3D",
          fa: "fab fa-linkedin"
        },
        {
          name: "Email",
          url: "john.meng@mail.utoronto.ca",
          fa: "fa fa-envelope"
        },
      ]
    }
  }