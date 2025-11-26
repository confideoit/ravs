export interface Project {
  name: string;
  address: string;
  images: string[];
  description: string;
  type: "commercial" | "residential" | "industrial" | "hospitality";
}

export interface City {
  name: string;
  projects: Project[];
}

export interface District {
  name: string;
  cities: City[];
}

export interface State {
  name: string;
  districts: District[];
}

export const projectsData: State[] = [
  {
    name: "Andhra Pradesh",
    districts: [
      {
        name: "Kakinada District",
        cities: [
          {
            name: "Kakinada",
            projects: [
              {
                name: "CMR",
                address: "Beside 7 Star Hospital, Kakinada",
                images: ["/src/assets/projects/cmr-kakinada.jpg"],
                description: "Modern commercial complex with retail spaces",
                type: "commercial"
              },
              {
                name: "RAPPORT",
                address: "Kakinada Main Road",
                images: ["/src/assets/projects/rapport-kakinada.jpg"],
                description: "Commercial retail development",
                type: "commercial"
              },
              {
                name: "MAX",
                address: "Kakinada",
                images: [],
                description: "Retail showroom construction",
                type: "commercial"
              },
              {
                name: "UNLIMITED",
                address: "Kakinada",
                images: [],
                description: "Commercial retail space",
                type: "commercial"
              },
              {
                name: "EASYBUY",
                address: "Kakinada",
                images: ["/src/assets/projects/easybuy-kakinada.jpg"],
                description: "Retail showroom",
                type: "commercial"
              },
              {
                name: "VISHAL MEGA MART",
                address: "Kakinada",
                images: [],
                description: "Large format retail store",
                type: "commercial"
              },
              {
                name: "APARTMENT",
                address: "Kakinada",
                images: ["/src/assets/projects/apartment-kakinada.jpg"],
                description: "Multi-story residential apartment complex",
                type: "residential"
              },
              {
                name: "SRI CHAITANYA COLLEGE",
                address: "Kakinada",
                images: ["/src/assets/projects/college-kakinada.jpg"],
                description: "Educational institution building",
                type: "commercial"
              },
              {
                name: "CHANDAMAMA HOSPITAL",
                address: "Kakinada",
                images: [],
                description: "Healthcare facility construction",
                type: "commercial"
              },
              {
                name: "NEERAJA COMPLEX",
                address: "Kakinada",
                images: [],
                description: "Commercial complex",
                type: "commercial"
              },
              {
                name: "UPPADA",
                address: "Uppada, Kakinada",
                images: [],
                description: "Residential construction",
                type: "residential"
              },
              {
                name: "ANNAVARAM",
                address: "Annavaram, Kakinada",
                images: [],
                description: "Commercial development",
                type: "commercial"
              },
              {
                name: "RESIDENTIAL BUILDING (G+4)",
                address: "Kakinada",
                images: [],
                description: "Ground plus 4 floors residential building",
                type: "residential"
              }
            ]
          },
          {
            name: "Pithapuram",
            projects: [
              {
                name: "OLD SIVA DURGA THEATER",
                address: "Pithapuram",
                images: [],
                description: "Theater renovation project",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Dr.B.R. Ambedkar Konaseema District",
        cities: [
          {
            name: "Ramachandrapuram",
            projects: [
              {
                name: "RELIANCE SMART",
                address: "Ramachandrapuram",
                images: [],
                description: "Reliance retail store construction",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "East Godavari District",
        cities: [
          {
            name: "Rajamundry",
            projects: [
              {
                name: "4BHK VILLA",
                address: "Rajamundry",
                images: [],
                description: "Luxury 4 bedroom villa construction",
                type: "residential"
              },
              {
                name: "SKETCHERS & ADDIDAS",
                address: "Rajamundry",
                images: [],
                description: "Branded retail showroom",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Bapatla District",
        cities: [
          {
            name: "Addanki",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "In RTC Complex, Addanki",
                images: [],
                description: "Commercial development in RTC complex",
                type: "commercial"
              }
            ]
          },
          {
            name: "Vetapalem",
            projects: [
              {
                name: "COMMERCIAL COMPLEX",
                address: "Main Road, Vetapalem",
                images: [],
                description: "Main road commercial development",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Anakapalli District",
        cities: [
          {
            name: "Payakaraopeta",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Beside Sri Lakshmi Theater, Payakaraopeta",
                images: [],
                description: "Commercial building near theater",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Srikakulam District",
        cities: [
          {
            name: "Ichapuram",
            projects: [
              {
                name: "SWETCHAVATI AMMAVARI TEMPLE ENTRANCE GATE",
                address: "Ichapuram",
                images: [],
                description: "Temple entrance gate construction",
                type: "commercial"
              }
            ]
          },
          {
            name: "Srikakulam",
            projects: [
              {
                name: "LIONS CLUB SCHOOL BUILDING",
                address: "Old Bus Stand Colony, Srikakulam",
                images: [],
                description: "Educational institution construction",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Manyam District",
        cities: [
          {
            name: "Parvatipuram",
            projects: [
              {
                name: "RELIANCE MART",
                address: "Parvatipuram",
                images: [],
                description: "Reliance retail store",
                type: "commercial"
              },
              {
                name: "FURNITURE SHOP",
                address: "Parvatipuram",
                images: [],
                description: "Commercial furniture showroom",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "West Godavari District",
        cities: [
          {
            name: "Palakollu",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Opp to RTC Complex, Palakollu",
                images: [],
                description: "Commercial development opposite RTC complex",
                type: "commercial"
              }
            ]
          },
          {
            name: "Ungutur",
            projects: [
              {
                name: "GODOWN",
                address: "Ungutur",
                images: [],
                description: "Storage facility construction",
                type: "industrial"
              },
              {
                name: "RICE MILL",
                address: "Ungutur",
                images: [],
                description: "Rice mill industrial facility",
                type: "industrial"
              }
            ]
          }
        ]
      },
      {
        name: "Eluru District",
        cities: [
          {
            name: "Kamavarapukota",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near Durga Mahal, Kamavarapukota",
                images: [],
                description: "Commercial building near Durga Mahal",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Krishna District",
        cities: [
          {
            name: "Machilipatnam",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Main Road, Machilipatnam",
                images: [],
                description: "Main road commercial development",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "NTR District",
        cities: [
          {
            name: "Vijayawada",
            projects: [
              {
                name: "COMMERCIAL COMPLEX",
                address: "Kanur Main Road, Vijayawada",
                images: [],
                description: "Commercial complex on main road",
                type: "commercial"
              },
              {
                name: "RESIDENTIAL PROJECT",
                address: "Tiruvur, Vijayawada",
                images: [],
                description: "Residential development",
                type: "residential"
              }
            ]
          }
        ]
      },
      {
        name: "Guntur District",
        cities: [
          {
            name: "Guntur",
            projects: [
              {
                name: "RELIANCE SMART POINT",
                address: "Guntur",
                images: [],
                description: "Reliance retail outlet",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Prakasam District",
        cities: [
          {
            name: "Podili",
            projects: [
              {
                name: "RELIANCE SMART",
                address: "Podili",
                images: [],
                description: "Reliance retail store",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Palnadu District",
        cities: [
          {
            name: "Chilakaluripeta",
            projects: [
              {
                name: "RELIANCE SMART POINT",
                address: "Chilakaluripeta",
                images: [],
                description: "Reliance retail outlet",
                type: "commercial"
              },
              {
                name: "HOSPITAL BUILDING",
                address: "Chilakaluripeta",
                images: [],
                description: "Healthcare facility construction",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Chittor District",
        cities: [
          {
            name: "Palamneru",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Main Road, Palamneru",
                images: [],
                description: "Main road commercial development",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Tirupati District",
        cities: [
          {
            name: "Srikalasti",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Opp to YSRCP Party Office, Srikalasti",
                images: [],
                description: "Commercial building",
                type: "commercial"
              }
            ]
          },
          {
            name: "Pakala",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near RTC Complex, Pakala",
                images: [],
                description: "Commercial development near RTC complex",
                type: "commercial"
              }
            ]
          },
          {
            name: "Tiruchanoor",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near Navjeevan Blind School, Tiruchanoor",
                images: [],
                description: "Commercial building construction",
                type: "commercial"
              }
            ]
          },
          {
            name: "Venkatagiri",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Beside More, Venkatagiri",
                images: [],
                description: "Commercial building near More store",
                type: "commercial"
              }
            ]
          },
          {
            name: "Satyavedu",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near RTC Complex, Satyavedu",
                images: [],
                description: "Commercial development",
                type: "commercial"
              }
            ]
          },
          {
            name: "Sullurupeta",
            projects: [
              {
                name: "NV PRASAD THEATER",
                address: "Sullurupeta",
                images: [],
                description: "Theater construction project",
                type: "commercial"
              }
            ]
          },
          {
            name: "Rajampeta",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Opposite to LIC Office, Rajampeta",
                images: [],
                description: "Commercial building opposite LIC",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Annamayya District",
        cities: [
          {
            name: "Madanappli",
            projects: [
              {
                name: "RELIANCE SMART",
                address: "Madanappli",
                images: [],
                description: "Reliance retail store",
                type: "commercial"
              }
            ]
          },
          {
            name: "Rayachoti",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Beside Vishal Mega Mart, Rayachoti",
                images: [],
                description: "Commercial building",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "YSR Kadapa District",
        cities: [
          {
            name: "Kadapa",
            projects: [
              {
                name: "MURALI THEATER",
                address: "Kadapa",
                images: [],
                description: "Theater construction",
                type: "commercial"
              },
              {
                name: "HOSPITAL BUILDING",
                address: "Kadapa",
                images: [],
                description: "Healthcare facility",
                type: "commercial"
              },
              {
                name: "RESIDENTIAL BUILDING",
                address: "Kadapa",
                images: [],
                description: "Multi-story residential building",
                type: "residential"
              },
              {
                name: "RELIANCE + HOSPITALITY",
                address: "Kadapa",
                images: [],
                description: "Mixed-use development with retail and hospitality",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Anantapur District",
        cities: [
          {
            name: "Kalayanadurgam",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near LIC Office, Kalayanadurgam",
                images: [],
                description: "Commercial building near LIC",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Sri Satya Sai District",
        cities: [
          {
            name: "Hindupur",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Beside RMS Function Hall, Hindupur",
                images: [],
                description: "Commercial building construction",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Kurnool District",
        cities: [
          {
            name: "Adoni",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "SKD Colony, Adoni",
                images: [],
                description: "Commercial development in SKD Colony",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Nandikotkur District",
        cities: [
          {
            name: "Nandikotkur",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Main Road, Nandikotkur",
                images: [],
                description: "Main road commercial building",
                type: "commercial"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "Telangana",
    districts: [
      {
        name: "Khammam District",
        cities: [
          {
            name: "Madhira",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Near Sai Children Hospital, Madhira",
                images: [],
                description: "Commercial building near hospital",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Nizamabad District",
        cities: [
          {
            name: "Nizamabad",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Market Road, Nizamabad",
                images: [],
                description: "Commercial building on market road",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Bhadradri Kothagudem District",
        cities: [
          {
            name: "Kothagudem",
            projects: [
              {
                name: "DURGA MAHAL THEATER",
                address: "Kothagudem",
                images: [],
                description: "Theater construction project",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Sangareddi District",
        cities: [
          {
            name: "Naraynkhed",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Main Road, Naraynkhed",
                images: [],
                description: "Main road commercial development",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Hyderabad District",
        cities: [
          {
            name: "Narapalli",
            projects: [
              {
                name: "COMMERCIAL BUILDING",
                address: "Main Road, Narapalli",
                images: [],
                description: "Commercial building on main road",
                type: "commercial"
              }
            ]
          },
          {
            name: "Nacharam Secunderabad",
            projects: [
              {
                name: "MARUTI WORK SHOP",
                address: "Nacharam, Secunderabad",
                images: [],
                description: "25,000 Sq.ft workshop facility",
                type: "industrial"
              }
            ]
          },
          {
            name: "Hyderabad",
            projects: [
              {
                name: "NEXA SHOWROOM",
                address: "Hyderabad",
                images: [],
                description: "12,000 Sq.ft showroom",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Medchal-Malkajagiri District",
        cities: [
          {
            name: "Kompally",
            projects: [
              {
                name: "WARE HOUSE",
                address: "Kompally",
                images: [],
                description: "2 Lakh Sq.ft warehouse facility",
                type: "industrial"
              }
            ]
          },
          {
            name: "Medipally",
            projects: [
              {
                name: "HOSPITAL BUILDING",
                address: "Medipally",
                images: [],
                description: "30,000 Sq.ft hospital facility",
                type: "commercial"
              }
            ]
          }
        ]
      },
      {
        name: "Rangareddy District",
        cities: [
          {
            name: "Thukkuguda",
            projects: [
              {
                name: "INDUSTRIAL COMPLEX",
                address: "Thukkuguda",
                images: [],
                description: "50,000 Sq.ft constructed area",
                type: "industrial"
              }
            ]
          }
        ]
      }
    ]
  }
];
