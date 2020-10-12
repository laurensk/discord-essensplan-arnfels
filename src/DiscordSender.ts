import { Webhook } from "discord-webhook-node";

export class DiscordSender {
  public static sendImage() {
    const hook = new Webhook(
      "https://discordapp.com/api/webhooks/764516615806124083/ggkimYNiNX5KueRTdXNWPTZdkIAxT9sG7xdhOMzim-26ZO4rwZiltXN954OzZGH73H0p"
    );
    hook.sendFile("essensplan_1.png");
  }
}
