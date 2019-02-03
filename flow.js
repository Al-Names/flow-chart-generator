var obj = {
  class: "go.GraphLinksModel",
  linkFromPortIdProperty: "fromPort",
  linkToPortIdProperty: "toPort",
  nodeDataArray: [],
  linkDataArray: []
};

var example2 = {
  class: "go.GraphLinksModel",
  linkFromPortIdProperty: "fromPort",
  linkToPortIdProperty: "toPort",
  nodeDataArray: [
    { category: "Start", text: "Start", key: -1, loc: "-37 -680" },
    { category: "End", text: "End", key: -4, loc: "1 -238" },
    { text: "Step", key: -2, loc: "-191 -505" },
    { text: "Step", key: -5, loc: "137 -411" }
  ],
  linkDataArray: [
    {
      from: -1,
      to: -2,
      fromPort: "B",
      toPort: "T",
      points: [
        -37,
        -655.1636593840843,
        -37,
        -645.1636593840843,
        -37,
        -608,
        -191,
        -608,
        -191,
        -531.121826171875,
        -191,
        -521.121826171875
      ]
    },
    {
      from: -1,
      to: -5,
      fromPort: "B",
      toPort: "T",
      points: [
        -37,
        -655.1636593840843,
        -37,
        -645.1636593840843,
        -37,
        -541.1427427779797,
        137,
        -541.1427427779797,
        137,
        -437.121826171875,
        137,
        -427.121826171875
      ]
    },
    {
      from: -1,
      to: -4,
      fromPort: "B",
      toPort: "T",
      points: [
        -37,
        -655.1636593840843,
        -37,
        -645.1636593840843,
        -37,
        -456.87618947583576,
        1,
        -456.87618947583576,
        1,
        -268.5887195675872,
        1,
        -258.5887195675872
      ]
    }
  ]
};
var edible = {
  class: "go.GraphLinksModel",
  linkFromPortIdProperty: "fromPort",
  linkToPortIdProperty: "toPort",
  nodeDataArray: [
    { category: "Comment", loc: "360 -10", text: "Weed Cakes", key: -13 },
    { key: -1, category: "Start", loc: "18.99999999999997 42", text: "Start" },
    { key: 0, loc: "-162 138", text: "Preheat oven to 375 F" },
    {
      key: 2,
      loc: "165.9999999999999 176.00000000000006",
      text: "Gradually beat in 1 cup sugar and 2 cups sifted flour"
    },
    {
      key: 3,
      loc: "-198.99999999999997 392.00000000000017",
      text: "Mix in 6 oz (1 cup) Nestle's Semi-Sweet Chocolate Morsels"
    },
    {
      key: 4,
      loc: "471.00000000000006 424.00000000000006",
      text: "Press evenly into ungreased 15x10x1 pan"
    },
    {
      key: 5,
      loc: "355 85",
      text: "Finely chop 1/2 cup of your choice of nuts"
    },
    {
      key: 6,
      loc: "38.00000000000006 651.0000000000005",
      text: "Sprinkle nuts on top"
    },
    {
      key: 7,
      loc: "474.99999999999994 564.0000000000001",
      text: "Bake for 25 minutes and let cool"
    },
    {
      key: 8,
      loc: "-38.99999999999994 586",
      text: "Cut into rectangular grid"
    },
    { key: -2, category: "End", loc: "156 441.00000000000045", text: "Enjoy!" }
  ],
  linkDataArray: [
    { from: 1, to: 2, fromPort: "B", toPort: "T" },
    {
      from: 2,
      to: 3,
      fromPort: "B",
      toPort: "T",
      points: [
        166,
        207.81317291259768,
        166,
        217.81317291259768,
        166,
        284,
        -199,
        284,
        -199,
        350.1868270874023,
        -199,
        360.1868270874023
      ]
    },
    {
      from: 3,
      to: 4,
      fromPort: "B",
      toPort: "T",
      points: [
        -199,
        423.8131729125976,
        -199,
        433.8131729125976,
        -199,
        436,
        -108,
        436,
        -108,
        380,
        433.17932891845703,
        380,
        433.17932891845703,
        382.1868270874023,
        433.17932891845703,
        392.1868270874023
      ]
    },
    {
      from: 4,
      to: 6,
      fromPort: "B",
      toPort: "T",
      points: [
        471,
        455.8131729125976,
        471,
        465.8131729125976,
        471,
        468,
        388,
        468,
        388,
        620,
        38,
        620,
        38,
        625.0622756958007,
        38,
        635.0622756958007
      ]
    },
    {
      from: 6,
      to: 7,
      fromPort: "B",
      toPort: "T",
      points: [
        38,
        666.9377243041992,
        38,
        676.9377243041992,
        38,
        676.9377243041992,
        124,
        676.9377243041992,
        124,
        532,
        475,
        532,
        475,
        530.1245513916016,
        475,
        540.1245513916016
      ]
    },
    {
      from: 7,
      to: 8,
      fromPort: "B",
      toPort: "T",
      points: [
        475,
        587.8754486083984,
        475,
        597.8754486083984,
        217.9892578125,
        597.8754486083984,
        217.9892578125,
        552.1245513916016,
        -39,
        552.1245513916016,
        -39,
        562.1245513916016
      ]
    },
    {
      from: 8,
      to: -2,
      fromPort: "B",
      toPort: "T",
      points: [
        -39,
        609.8754486083984,
        -39,
        619.8754486083984,
        81.04162757341251,
        619.8754486083984,
        81.04162757341251,
        398.44479689487196,
        156,
        398.44479689487196,
        156,
        408.44479689487196
      ]
    },
    {
      from: -1,
      to: 0,
      fromPort: "B",
      toPort: "T",
      points: [
        19.000000000000007,
        66.2733400921489,
        19.000000000000007,
        76.2733400921489,
        19.000000000000007,
        94.16780789397484,
        -162,
        94.16780789397484,
        -162,
        112.06227569580076,
        -162,
        122.06227569580076
      ]
    },
    { from: -1, to: 1, fromPort: "B", toPort: "T" },
    {
      from: -1,
      to: 5,
      fromPort: "B",
      toPort: "T",
      points: [
        19.000000000000007,
        66.2733400921489,
        19.000000000000007,
        76.2733400921489,
        156.64886181853538,
        76.2733400921489,
        156.64886181853538,
        51.124551391601564,
        355,
        51.124551391601564,
        355,
        61.124551391601564
      ]
    },
    {
      from: 5,
      to: 4,
      fromPort: "B",
      toPort: "T",
      points: [
        355,
        108.87544860839844,
        355,
        118.87544860839844,
        355,
        242.53113784790037,
        508.82067108154297,
        242.53113784790037,
        508.82067108154297,
        366.1868270874023,
        508.82067108154297,
        392.1868270874023
      ]
    },
    {
      from: 0,
      to: 4,
      fromPort: "B",
      toPort: "T",
      points: [
        -162,
        153.9377243041992,
        -162,
        163.9377243041992,
        -162,
        269.06227569580074,
        471,
        269.06227569580074,
        471,
        374.1868270874023,
        471,
        392.1868270874023
      ]
    }
  ]
};

var dataRndered = document.getElementById("mySavedModel").value;
document.getElementById("mySavedModel").value = JSON.stringify(
  obj,
  undefined,
  2
);
