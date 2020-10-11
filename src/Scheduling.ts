import Schedule from "node-schedule";
import Axios from "axios";
import { PdfLinkDownloader } from "./PdfLinkDownloader";

export class Scheduling {
  public static enable(callback: Function) {
    Schedule.scheduleJob("0 7 * * 1-5", function () {
      PdfLinkDownloader.getNewest((link) => {
        Axios.post(
          "Guten Morgen! Der Essensplan für heute: https://discordapp.com/api/webhooks/764516615806124083/ggkimYNiNX5KueRTdXNWPTZdkIAxT9sG7xdhOMzim-26ZO4rwZiltXN954OzZGH73H0p",
          {
            content: link,
          }
        ).then((res) => {
          return 0;
        });
      });
    });
    callback();
  }
}
