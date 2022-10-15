require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "MTAxMzU2NjYyNTIxNzI0OTM0MA.G6jzf8.tuF5Y4-gty1gN01HvsxgITs-7SLNdHkGmMfhAA",  // your bot token
    logs: process.env.LOGS || "1013569163110916217", // channel id for lavalink server status logs
   
    nodes: [
        {
            host: process.env.NODE_HOST || "https://lavalink-node1.herokuapp.com/",
            identifier: process.env.NODE_ID || "private",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "hawwonode01",
            secure: parseBoolean(process.env.NODE_SECURE || "true"),

        }
    ],

}

function parseBoolean(value) {
    if (typeof (value) === 'string') {
        value = value.trim().toLowerCase();
    }
    switch (value) {
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}