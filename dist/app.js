"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const jsdom_1 = require("jsdom");
axios_1.default.get("https://www.jugendhaeuser.steiermark.at/cms/beitrag/10875345/56660912/").then((res) => {
    const html = new jsdom_1.JSDOM(res.data);
    const middleContent = html.window.document.getElementById("middle-content");
    const txtBlock = middleContent.getElementsByClassName("txtblock-content");
    const speiseA = txtBlock[1].children[0].children[0].innerHTML;
    const speiseList = new jsdom_1.JSDOM(speiseA);
    const relativeLink = speiseList.window.document.getElementsByTagName("a")[0].getAttribute("href");
    const fullLink = "https://www.jugendhaeuser.steiermark.at" + relativeLink;
    console.log(fullLink);
    axios_1.default.post("https://discordapp.com/api/webhooks/764516615806124083/ggkimYNiNX5KueRTdXNWPTZdkIAxT9sG7xdhOMzim-26ZO4rwZiltXN954OzZGH73H0p", {
        content: "https://www.jugendhaeuser.steiermark.at/cms/dokumente/10875345_56660912/08ff706f/Speiseplan%2012.10.-16.10.2020.pdf",
    }).then((res) => {
        return 0;
    });
});
//# sourceMappingURL=app.js.map