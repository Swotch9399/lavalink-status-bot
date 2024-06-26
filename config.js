require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    logs: process.env.LOGS || "", // channel id for lavalink server status logs
   
    nodes: [
        {
            host: process.env.NODE_HOST || "localhost",
            identifier: process.env.NODE_ID || "public",
            port: parseInt(process.env.NODE_PORT || "80"),
            password: process.env.NODE_PASSWORD || "youshallnotpass",
            secure: parseBoolean(process.env.NODE_SECURE || "false"),
            version: process.env.NODE_VERSION || "v4",
            usePathVersion: parseBoolean(process.env.NODE_USEPATHVERSION || "false")
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
