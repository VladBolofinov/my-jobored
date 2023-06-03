
const input = [
    {"type": "rotten apples", "material": "organic"},
    {"type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic"},
    {"type": "wine bottle", "material": "glass", "secondMaterial": "paper"},
    {"type": "amazon box", "material": "paper"},
    {"type": "beer bottle", "material": "glass", "secondMaterial": "paper"}
];
/*
output = [
    ["wine bottle", "amazon box", "beer bottle"],
    ["wine bottle", "beer bottle"],
    ["rotten apples", "out of date yogurt"],
    ["out of date yogurt"]
]*/

function recycle(array) {
    const paper = [],
          glass = [],
          organic = [],
          plastic = [],
          output = [paper, glass, organic, plastic];

    array.map(item => {
    })
}

recycle(input);
