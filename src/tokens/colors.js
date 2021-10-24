const reds = [
    "#FFEBE4",
    "#FBC4B3"
]


const scale = [
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
    "05",
]

const capitalize = string => string[0].toUpperCase() + string.slice(1);

// CONVERT TO ALLOW FOR HSA, HEX, AND RGB VALUES
const createColorTokens = (name, values) => {
    return values.reduce((tokens, color, index) => {
        const scaleLabel = scale[index]
        const nextTokens = {[`${name}-${scaleLabel}`]: {
                "name": `${capitalize(name)} ${scaleLabel}`,
                "value": values[index],
                "code": `var(--dtui-color-${name}-${scaleLabel}`
            }, ...tokens};
        return nextTokens;
    }, {})
}

module.exports = {
    "color": {
        ...createColorTokens("red", reds),
    }
}