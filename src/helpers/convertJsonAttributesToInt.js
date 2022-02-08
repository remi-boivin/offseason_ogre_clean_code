module.exports = convertJsonAttributesToInt =
    (hash) => {
        let hashInt = {}
        for (const [key, value] of Object.entries(hash)) {
            hashInt[key] = parseInt(value)
        }
        return hashInt
    }