module.exports = {
    "source": ["src/tokens/index.js"],
    "platforms": {
        "css": {
            "transformGroup": "css",
            "buildPath": "src/styles/",
            "files": [
                {
                    "destination": "variables.scss",
                    "format": "css/variables",
                    "options": {
                        "outputReferences": true,
                    }
                }
            ]
        }
    }
}