import Schedule from "node-schedule";
import { PdfLinkDownloader } from "./PdfLinkDownloader";
import request from "request-promise-native";
import fs from "fs";
import pdf2img from "pdf2img";
import { DiscordSender } from "./DiscordSender";

export class Scheduling {
  public static enable(callback: Function) {
    Schedule.scheduleJob("0 7 * * 1", Scheduling.downloadAndSendImage);
    callback();
  }

  public static downloadAndSendImage() {
    PdfLinkDownloader.getNewest(async (link) => {
      let pdfBuffer = await request.get({ uri: link, encoding: null });
      fs.writeFileSync("essensplan.pdf", pdfBuffer);

      var input = "essensplan.pdf";

      pdf2img.setOptions({
        type: "png",
        size: 1024,
        density: 600,
        outputdir: ".",
        outputname: "essensplan",
        page: null,
        quality: 100,
      });

      pdf2img.convert(input, function (err) {
        if (err) console.log(err);
        else DiscordSender.sendImage();
      });
    });
  }
}
