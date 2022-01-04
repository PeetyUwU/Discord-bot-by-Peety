const http = require("http")
const fs = require("fs")
const url = require("url")
const express = require("express")
const app = express()
const favicon = require("serve-favicon")
const path = require("path")

module.exports = {
    name: "steamid",
    description: "anime pat gif",
    execute: async (client, message, args, Discord) => {
        let url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=0C1A0FA8F40480030B229764CDFC5438&steamid=" + args[0] + "&format=json"
        let response = fetch(url)
        let data = await response.json()


        let h = ""
        for (let steam of data) {
            h = steam.appid + "-" + steam.playtime_forever + h
        }
        message.channel.send(h)
    }
}