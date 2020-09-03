module.exports = {
    plugins: [
        require("postcss-flexbugs-fixes"),
        require("postcss-nested"),
        require("postcss-preset-env")({
            autoprefixer: {
                flexbox: "no-2009"
            },
            features: {
                "nesting-rules": true
            }
        })
    ]
};