elements.up_pusher = {
    color: "#9fafdf",
    properties: { range: 1, pushStrength: 1 },
    tick: pixel => { applyPusher(pixel, 0, -1); doDefaults(pixel); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.down_pusher = {
    color: "#9fafdf",
    properties: { range: 1, pushStrength: 1 },
    tick: pixel => { applyPusher(pixel, 0, 1); doDefaults(pixel); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.left_pusher = {
    color: "#9fafdf",
    properties: { range: 1, pushStrength: 1 },
    tick: pixel => { applyPusher(pixel, -1, 0); doDefaults(pixel); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.right_pusher = {
    color: "#9fafdf",
    properties: { range: 1, pushStrength: 1 },
    tick: pixel => { applyPusher(pixel, 1, 0); doDefaults(pixel); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};
elements.up_e_pusher = {
    color: "#9f9f6f",
    properties: { range: 1, pushStrength: 1, pushTime: 0, pushLength: 5 },
    tick: pixel => { electroPusherTick(pixel, 0, -1); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.down_e_pusher = {
    color: "#9f9f6f",
    properties: { range: 1, pushStrength: 1, pushTime: 0, pushLength: 5 },
    tick: pixel => { electroPusherTick(pixel, 0, 1); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.left_e_pusher = {
    color: "#9f9f6f",
    properties: { range: 1, pushStrength: 1, pushTime: 0, pushLength: 5 },
    tick: pixel => { electroPusherTick(pixel, -1, 0); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

elements.right_e_pusher = {
    color: "#9f9f6f",
    properties: { range: 1, pushStrength: 1, pushTime: 0, pushLength: 5 },
    tick: pixel => { electroPusherTick(pixel, 1, 0); },
    excludeRandom: true,
    category: "machines",
    tempHigh: 2400,
    density: 10000,
    hardness: 0.85,
    conduct: 1,
    state: "solid"
};

