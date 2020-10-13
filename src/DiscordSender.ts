import { Webhook } from "discord-webhook-node";
import { resolve } from "path";

import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, "../.env") });

export class DiscordSender {
  public static sendImage() {
    const hook = new Webhook(process.env.DISCORD_WEBHOOK);
    hook.sendFile("essensplan_1.png");
  }
}
