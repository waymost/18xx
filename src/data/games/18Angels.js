const game = {
  // Generic Game Info
  info: {
    title: "18Angels",
    // subtitle: "Building the World's Larget Electric Railway System",
    designer: "Matthew Waymost",
    background: "water",
    width: 150,
    orientation: "horizontal",
    titleRotate: -90,
    titleX: 160,
    titleY: 1700,
    titleSize: 120,
    color_5: "cyan",
    color_10: "blue",
    currency: "USD"
  },

  tokens: ["Round"],

  ipo: true,

  bank: "$7,000",

  players: [
    {
      number: 2,
      certLimit: 25,
      capital: "$420"
    },
    {
      number: 3,
      certLimit: 19,
      capital: "$420"
    },
    {
      number: 4,
      certLimit: 14,
      capital: "$420"
    },
    {
      number: 5,
      certLimit: 12,
      capital: "$390"
    },
    {
      number: 6,
      certLimit: 11,
      capital: "$390"
    }
  ],

  pools: [
    {
      name: "Bank Pool",
      notes: [
        {
          color: "blue",
          note: "Shares in the market pay dividends to the corporation"
        },
        {
          color: "purple",
          icon: "exclamation",
          note:
          "No more than 50% of a corporation's shares may be in the market at any time"
        },
        {
          color: "red",
          icon: "times",
          note: "Shares cannot be sold during the first stock round"
        }
      ]
    }
  ],

  rounds: [
    {
      name: "OR3",
      color: "brown"
    },
    {
      name: "OR2",
      color: "green"
    },
    {
      name: "OR1",
      color: "yellow"
    },
    {
      name: "SR",
      color: "gray"
    }
  ],

  turns: [
    {
      name: "Stock Round",
      steps: ["Buy one certificate", "Sell any number of certificates"],
      ordered: false
    },
    {
      name: "Operating Round",
      steps: [
        "Lay or upgrade track",
        "Purchase a station",
        "Run trains",
        "Pay dividends or withhold revenue",
        "Purchase trains"
      ],
      ordered: true
    }
  ],

  stock: {
    type: "2D",
    par: {
      values: [100, 90, 80, 75, 70, 65]
    },
    movement: {
      up: ["Sold out"],
      down: ["Every share sold"],
      left: ["Withheld revenue"],
      right: ["Paid dividends"]
    },
    market: [
      [
        { label: "75", arrow: "down" },
        80,
        90,
        { label: "100", par: true },
        110,
        125,
        140,
        155,
        175,
        200,
        225,
        255,
        285,
        315,
        350
      ],
      [
        { label: "70", arrow: "down" },
        75,
        80,
        { label: "90", par: true },
        100,
        110,
        125,
        140,
        155,
        175,
        200,
        225,
        255,
        285,
        { label: "315", arrow: "up" }
      ],
      [
        { label: "65", arrow: "down" },
        70,
        75,
        { label: "80", par: true },
        90,
        100,
        110,
        125,
        140,
        155,
        175,
        { label: "200", arrow: "up" }
      ],
      [
        { label: "60", arrow: "down" },
        65,
        70,
        { label: "75", par: true },
        80,
        90,
        100,
        110,
        125,
        { label: "140", arrow: "up" }
      ],
      [
        { label: "55", arrow: "down" },
        60,
        65,
        { label: "70", par: true },
        75,
        80,
        90,
        { label: "100", arrow: "up" }
      ],
      [
        { label: "50", legend: 0, arrow: "down" },
        55,
        60,
        { label: "65", par: true },
        70,
        75,
        { label: "80", arrow: "up" }
      ],
      [
        { label: "45", legend: 0, arrow: "down" },
        { label: "50", legend: 0 },
        55,
        60,
        65,
        { label: "70", arrow: "up" }
      ],
      [
        { label: "40", legend: 0, arrow: "down" },
        { label: "45", legend: 0 },
        { label: "50", legend: 0 },
        55,
        { label: "60", arrow: "up" }
      ],
      [
        { label: "30", legend: 1, arrow: "down" },
        { label: "40", legend: 0 },
        { label: "45", legend: 0 },
        { label: "50", legend: 0, arrow: "up" }
      ],
      [
        { label: "20", legend: 1, arrow: "down" },
        { label: "30", legend: 1 },
        { label: "40", legend: 0 },
        { label: "45", legend: 0, arrow: "up" }
      ],
      [
        { label: "10", legend: 1 },
        { label: "20", legend: 1 },
        { label: "30", legend: 1 },
        { label: "40", legend: 0, arrow: "up" }
      ]
    ],
    legend: [
      {
        color: "cyan",
        description:
        "Shares of this corporation do not count toward the certificate limit",
        icon: "certificate"
      },
      {
        color: "blue",
        description: "Players may own more than 60% of this corporation",
        icon: "percentage"
      }
    ]
  },

  trains: [
    {
      name: "2",
      quantity: 6,
      price: "¥80",
      color: "yellow",
      info: [
        {
          color: "green",
          note: "Rusted by 4"
        }
      ]
    },
    {
      name: "3",
      quantity: 5,
      price: "¥180",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by 6"
        }
      ]
    },
    {
      name: "4",
      quantity: 4,
      price: "¥300",
      color: "green",
      info: [
        {
          color: "brown",
          note: "Rusted by D"
        }
      ]
    },
    {
      name: "5",
      quantity: 3,
      price: "¥450",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "6",
      quantity: 2,
      price: "¥630",
      color: "brown",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    },
    {
      name: "D",
      quantity: 9,
      price: "¥1100",
      color: "brown",
      description: "Cost ¥800 when trading in a 4T, 5T or 6T",
      info: [
        {
          color: "yellow",
          note: "Permanent"
        }
      ]
    }
  ],

  companies: [
    {
      name: "Awa Railroad",
      abbrev: "AR",
      color: "red",
      tokens: ["Free", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Iyo Railway",
      abbrev: "IR",
      color: "orange",
      tokens: ["Free", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Sanuki Railway",
      abbrev: "SR",
      color: "blue",
      tokens: ["Free", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Takamatsu & Kotohira Electric Railway",
      abbrev: "KO",
      color: "pink",
      tokens: ["Free", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Tosa Electric Railway",
      abbrev: "TR",
      color: "green",
      tokens: ["Free", "¥40", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Tosa Kuroshio Railway",
      abbrev: "KU",
      color: "purple",
      tokens: ["Free"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    },
    {
      name: "Uwajima Railway",
      abbrev: "UR",
      color: "brown",
      tokens: ["Free", "¥40", "¥40"],
      shares: [
        {
          quantity: 1,
          label: "President Share",
          percent: 20,
          shares: 2
        },
        {
          quantity: 8,
          percent: 10,
          shares: 1
        }
      ]
    }
  ],

  phases: [
    {
      name: "2",
      limit: "4",
      number: "6",
      tiles: "yellow"
    },
    {
      name: "3",
      limit: "4",
      number: "5",
      tiles: "green",
      notes: "Private companies can be bought"
    },
    {
      name: "4",
      rust: "2",
      limit: "3",
      number: "4",
      tiles: "green"
    },
    {
      name: "5",
      limit: "2",
      number: "3",
      tiles: "brown",
      notes: "Private companies close"
    },
    {
      name: "6",
      limit: "2",
      number: "2",
      rust: "3",
      tiles: "brown",
      notes: "D Trains available for purchase"
    },
    {
      name: "D",
      limit: "2",
      number: "∞",
      rust: "4",
      tiles: "brown"
    }
  ],

  privates: [
    {
      name: "Takamatsu E-Railroad",
      price: "¥20",
      revenue: "¥5",
      desription: "Blocks Takamatsu (K4)."
    },
    {
      name: "Mitsubishi Ferry",
      price: "¥30",
      revenue: "¥5",
      description:
      "Player owner may place the port tile on a coastal town (B11, G10, I12, or J9) without a tile on it already, outside of the operating rounds of a company controller by another player. The player need not control a company or have connectivity to the placed tile from one of their companies. This does not close the company."
    },
    {
      name: "Ehime Railroad",
      price: "¥40",
      revenue: "¥10",
      description:
      "When this company is sold to a corporation, the selling player may immediately place a green tile on Ohzu (C4), in addition to any tile which it may lay during the same operating round. This does not close the company."
    },
    {
      name: "Sumitomo Mines Railway",
      price: "¥50",
      revenue: "¥15",
      description:
      "Owning corporation may ignore building cost for mountain hexes which do not also contain rivers. This does not close the company."
    },
    {
      name: "Dougo Railway",
      price: "¥60",
      revenue: "¥15",
      description:
      "Owning player may exchange this private company for a 10% share of Iyo Railway from the initial offering."
    },
    {
      name: "South Iyo Railway",
      price: "¥80",
      revenue: "¥20",
      players: "Players: 3+"
    },
    {
      name: "Uno-Takamatsu Ferry",
      price: "¥150",
      revenue: "¥30 / ¥50",
      players: "Players: 4+",
      description:
      "Does not close while owned by a player. If owned by a player when the first 5-train is purchased it may no longer be sold to a public company and the revenue is increased to 50."
    }
  ],

  tiles: {
    "3": 2,
    "5": 2,
    "6": 2,
    "7": 2,
    "8": 5,
    "9": 5,
    "57": 2,
    "58": 3,
    "437": 1,
    "438": 1,
    // Green
    "12": 1,
    "13": 1,
    "14": 1,
    "15": 3,
    "16": 1,
    "19": 1,
    "20": 1,
    "23": 2,
    "24": 2,
    "25": 1,
    "26": 1,
    "27": 1,
    "28": 1,
    "29": 1,
    "205": 1,
    "206": 1,
    "439": 1,
    "440": 1,
    // Brown
    "39": 1,
    "40": 1,
    "41": 1,
    "42": 1,
    "45": 1,
    "46": 1,
    "47": 1,
    "448": 4,
    "465": 1,
    "466": 1,
    "492": 1,
    "611": 2
  },

  map: {
    print: "portrait",
    hexes: [
      {
        color: "plain",
        hexes: ["D2", "D12", "D14", 
          "E3", "E5", "E7", "E9", 
          "F8", "F10", "F12", "F20", 
          "G17", 
          "H6", "H16", "H18", 
          "I11", "I13", "I15", "I17", 
          "J4", "J8", "J10", "J22", 
          "K5", "K7", "K17", "K19", "K21", 
          "L4", "L14", "L18", "L20", "L22", "L24", 
          "M9", "M11", "M19", "M21", "M23", 
          "N10", "N12", "N14", "N16"]
      },
      {
        color: "water",
        hexes: ["B12", "B14", 
          "C15", "C17", "C19", "C21", 
          "D22", "E23", "F24", 
          "H22", "I23", "J24"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 1,
            color: "black"
          },
          {
            side: 2,
            color: "black"
          }
        ],
        terrain: [{type: "river", cost: ""}],
        hexes: ["H12", "I13", "J14"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 3,
            color: "black"
          },
          {
            side: 4,
            color: "black"
          },
          {
            side: 5,
            color: "black"
          }
        ],
        hexes: ["K15"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 4,
            color: "black"
          },
          {
            side: 5,
            color: "black"
          }
        ],
        hexes: ["L16"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 4,
            color: "black"
          }
        ],
        hexes: ["M17"]
      },
      {
        color: "plain",
        terrain: [{cost: "$90"}],
        hexes: ["B6", "B8", 
          "C7", 
          "D6", "D20", 
          "E11", "E19", "E21", 
          "F6", "F22", 
          "G3", "G15", 
          "H2", "H4", 
          "I9",
          "J2", 
          "K3", 
          "L2", "L10", "L12", 
          "M13", 
          "N2", "N4"]
      },
      {
        color: "plain",
        borders: [
          {
            side: 1,
            color: "mountain"
          },
          {
            side: 2,
            color: "mountain"
          }
        ],
        hexes: ["I19"]
      },
      {
        color: "plain",
        terrain: [{type: "river", cost: ""}],
        hexes: ["E5", "I11", "I15", "H16", "H18",
          "L8", "K9", "J12", "J16", "J18"]
      },
      {
        color: "plain",
        terrain: [{type: "river", cost: ""}],
        borders: [
          // {
          //   side: 1,
          //   color: "black"
          // },
          {
            side: 2,
            color: "black"
          },
          {
            side: 3,
            color: "black"
          },
          {
            side: 4,
            color: "black"
          },
          // {
          //   side: 5,
          //   color: "black"
          // }
        ],
        hexes: ["H10"]
      },
      {
        color: "plain",
        terrain: [{type: "river", percent: 0.38},
                  {cost: "$90", angle: 180, percent: 0.1}],
        hexes: ["C5", "G7", "M3", "K11"]
      },
      {
        color: "plain",
        terrain: [{type: "river", cost: ""}],
        borders: [
          {
            side: 1,
            color: "mountain"
          },
          {
            side: 2,
            color: "mountain"
          }
        ],
        hexes: ["J20"]
      },
      {
        color: "gray",
        labels: [
          {
            label: "LA",
            angle: 210,
            percent: 0.8
          },
          {
            label: "Los",
            angle: 330,
            percent: 0.52,
            size: 10,
            // rotate: 30,
          },
          {
            label: "Angeles",
            angle: 325,
            percent: 0.72,
            size: 10,
            // rotate: 330,
          }
        ],
        cities: [
          {
            companies: [
              {
                label: "",
                color: "black"
              }
            ],
            name: {
              name: ""
            }
          }
        ],
        track: [{ side: 1 }, { side: 2 }, { side: 3 }, { side: 4 }, { side: 5 }],
        hexes: ["G9"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "P",
            angle: 180,
            percent: 0.6
          }
        ],
        cities: [
          {
            size: 2,
            companies: [
              {
                label: "1",
                color: "blue"
              },
              {
                label: "2",
                color: "blue"
              }
            ],
            name: {
              name: "Pasadena",
              reverse: true
            }
          }
        ],
        // labels: [{label: "Pasadena"}],
        hexes: ["I5"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "San Fernando"},
          revenues: [
            {color: "yellow", cost: "10"},
            {color: "green", cost: "20"},
            {color: "brown", cost: "30"}
          ]
        },
        offBoardTrack: [{side: 1}],
        hexes: ["C1"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Burbank"},
          revenues: [
            {color: "yellow", cost: "10"},
            {color: "green", cost: "20"},
            {color: "brown", cost: "30"}
          ]
        },
        offBoardTrack: [{side: 6}],
        hexes: ["F4"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          reverse: true,
          name: {name: "San Bernardino"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "green", cost: "40"},
            {color: "brown", cost: "50"}
          ]
        },
        offBoardTrack: [{side: 3}],
        hexes: ["N8"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          reverse: true,
          name: {name: "Newport Beach"},
          revenues: [
            {color: "yellow", cost: "30"},
            {color: "green", cost: "40"},
            {color: "brown", cost: "50"}
          ]
        },
        offBoardTrack: [{side: 3}],
        hexes: ["M25"]
      },
      {
        color: "offboard",
        offBoardRevenue: {
          name: {name: "Mt. Lowe"},
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "green", cost: "30"},
            {color: "brown", cost: "40"}
          ]
        },
        offBoardTrack: [{side: 1}],
        companies: [
          {
            label: "MTL",
            angle: 315,
            percent: 0.667
          }
        ],
        hexes: ["I1"]
      },
      {
        color: "water",
        track: [{type: "sharp", side: 6, gauge: "line"}],
        hexes: ["A9"]
      },
      {
        color: "water",
        // divides: [{side: 4}],
        track: [{type:"offboard",side:4}],
        offBoardRevenue: {
          reverse: true,
          name: {name: "Long Wharf"},
          revenues: [
            {color: "yellow", cost: "40"},
            {color: "green", cost: "20"},
            {color: "brown", cost: "0"}
          ]
        },
        icons: [{ type: "port", percent: 0.667 }],
        // icons: [{ type: "port", angle: 120, percent: 0.5 }, { type: "port", angle: 300, percent: 0.5 }],
        // values: [{ value: 20, angle: 0, percent: 0.58 }],
        companies: [
          {
            label: "SM",
            angle: 155,
            rotate: 270,
            percent: 0.8,
            left: 10,
            right: 50
          }
        ],
        // values: [{ value: 20, angle: 0, percent: 0.58 }],
        hexes: ["A11"]
      },
      // {
      //   color: "water",
      //   track: [{type:"offboard",side:5}],
      //   icons: [{ type: "port", angle: 150, percent: 0.25 }, { type: "port", angle: 330, percent: 0.25 }],
      //   values: [{ value: 20, angle: 60, percent: 0.58 }],
      //   hexes: ["B12"]
      // },
      {
        color: "water",
        offBoardRevenue: {
          reverse: true,
          // name: {name: "Port of Los Angeles"},
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "green", cost: "30"},
            {color: "brown", cost: "50"}
          ]
        },
        track: [{type:"offboard",side:5}],
        icons: [{ type: "port", percent: 0.667 }],
        companies: [
          {
            label: "RB",
            angle: 135,
            percent: 0.667
          }
        ],// values: [{ value: 20, angle: 0, percent: 0.58 }],
        hexes: ["D18"]
      },
      {
        color: "water",
        offBoardRevenue: {
          reverse: true,
          name: {name: "Port of Los Angeles"},
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "green", cost: "40"},
            {color: "brown", cost: "70"}
          ]
        },
        track: [{type:"offboard",side:4}],
        icons: [{ type: "port", percent: 0.667 }],
        // values: [{ value: 20, angle: 0, percent: 0.58 }],
        companies: [
          {
            label: "SP",
            angle: 135,
            percent: 0.667
          }
        ],// values: [{ value: 20, angle: 0, percent: 0.58 }],
        hexes: ["G23"]
      },
      {
        color: "water",
        offBoardRevenue: {
          reverse: true,
          // name: {name: "Port of Los Angeles"},
          revenues: [
            {color: "yellow", cost: "20"},
            {color: "green", cost: "0"},
            {color: "brown", cost: "30"}
          ]
        },
        track: [{type:"offboard",side:4}],
        icons: [{ type: "port", percent: 0.667 }],
        // values: [{ value: 20, angle: 0, percent: 0.58 }],
        companies: [
          {
            label: "HB",
            angle: 135,
            percent: 0.667
          }
        ],// values: [{ value: 20, angle: 0, percent: 0.58 }],
        hexes: ["K25"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: "Covina Jct."
            }
          }
        ],
        terrain: [{type: "river", percent: 0.625}],
        hexes: ["H8"]
      },
      {
        copy: "H8",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["I21"]
      },
      {
        color: "plain",
        cities: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["C3"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "4",
                color: "blue"
              }
            ],
            name: {
              name: "Santa Monica"
            }
          }
        ],
        hexes: ["B10"]
      },
      {
        color: "plain",
        labels: [
          {
            label: "V",
            angle: 240,
            percent: 0.6
          }
        ],
        cities: [
          {
            angle: 125,
            percent: 0.6,
            companies: [
              {
                label: "5",
                color: "blue"
              }
            ],
            name: {
              name: "Ocean Park",
              reverse: true
            },
          },
          {
            angle: 355,
            percent: 0.6,
            companies: [
              {
                label: "6",
                color: "blue"
              }
            ],
            name: {
              name: "Venice"
            },
          }
        ],
        hexes: ["C11"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: ""
            }
          }
        ],
        terrain: [{type: "river", percent: 0.75}],
        hexes: ["D4"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Beverly Hills"
            }
          }
        ],
        hexes: ["D8"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Inglewood"
            }
          }
        ],
        hexes: ["E13"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "7",
                color: "blue"
              }
            ],
            name: {
              name: "Redondo Beach"
            }
          }
        ],
        hexes: ["E17"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Hollywood"
            }
          }
        ],
        hexes: ["F8"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "3",
                color: "blue"
              }
            ],
            name: {
              name: "Glendale"
            }
          }
        ],
        terrain: [{type: "river", percent: 0.75}],
        hexes: ["G5"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Watts"
            }
          }
        ],
        hexes: ["G13"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "8",
                color: "blue"
              }
            ],
            name: {
              name: "San Pedro"
            }
          }
        ],
        hexes: ["G21"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "9",
                color: "blue"
              }
            ],
            name: {
              name: "Long Beach"
            }
          }
        ],
        terrain: [{type: "river", percent: 0.75}],
        hexes: ["H20"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Whittier"
            }
          }
        ],
        hexes: ["K13"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Monrovia"
            }
          }
        ],
        terrain: [{type: "river", percent: 0.75}],
        hexes: ["L6"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "10",
                color: "blue"
              }
            ],
            name: {
              name: "Huntington Beach"
            }
          }
        ],
        hexes: ["K23"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: ""
            }
          }
        ],
        terrain: [{type: "river", percent: 0.75}],
        hexes: ["M5"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "11",
                color: "blue"
              }
            ],
            name: {
              name: ""
            }
          }
        ],
        hexes: ["M7"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["M15"]
      },
      {
        copy: "C3",
        cities: [
          {
            companies: [
              {
                label: "12",
                color: "blue"
              }
            ],
            name: {
              name: "Glendora"
            }
          }
        ],
        hexes: ["N6"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["N20"]
      },
      {
        copy: "C3",
        cities: [
          {
            name: {
              name: "Santa Ana"
            }
          }
        ],
        hexes: ["N22"]
      },
      {
        color: "plain",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["C9"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Del Rey"
            }
          }
        ],
        hexes: ["C13"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["D10"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Manhattan Beach"
            }
          }
        ],
        hexes: ["D16"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "El Segundo"
            }
          }
        ],
        borders: [
          {
            side: 2,
            color: "mountain"
          },
          {
            side: 3,
            color: "mountain"
          },
          {
            side: 4,
            color: "black"
          }
        ],
        hexes: ["E15"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Hawthorne"
            }
          }
        ],
        borders: [
          {
            side: 3,
            color: "mountain"
          },
          {
            side: 4,
            color: "mountain"
          }
        ],
        hexes: ["F14"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["F16"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["F18"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["G11"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["G19"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["H14"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Altadena"
            }
          }
        ],
        hexes: ["I3"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["I7"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Alhambra"
            }
          }
        ],
        hexes: ["J6"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: "Artesia"
            }
          }
        ],
        hexes: ["K17"]
      },
      {
        copy: "C9",
        centerTowns: [
          {
            name: {
              name: ""
            }
          }
        ],
        hexes: ["N18"]
      }
    ]
  }
};

export default game;
