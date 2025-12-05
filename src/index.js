const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

// ========== EXPRESS SERVER (KEEPS CONTAINER RUNNING) ==========
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Discord bot is running!");
});

app.listen(port, () => {
  console.log(`Web server running on port ${port}`);
});

// ========== DISCORD BOT ==========
const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

client.on("ready", () => {
    console.log(`Bot logged in as ${client.user.tag}`);
});

// Token comes from environment variable
client.login(process.env.TOKEN);
