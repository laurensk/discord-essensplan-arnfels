import Axios from "axios";
import { JSDOM } from "jsdom";

export class PdfLinkDownloader {
  public static getNewest(callback: Function) {
    Axios.get("https://www.jugendhaeuser.steiermark.at/cms/beitrag/10875345/56660912/").then((res) => {
      const html = new JSDOM(res.data);
      const middleContent = html.window.document.getElementById("middle-content");
      const txtBlock = middleContent.getElementsByClassName("txtblock-content");
      const speiseA = txtBlock[1].children[0].children[0].innerHTML;
      const speiseList = new JSDOM(speiseA);
      const relativeLink = speiseList.window.document.getElementsByTagName("a")[0].getAttribute("href");
      const fullLink = "https://www.jugendhaeuser.steiermark.at" + relativeLink;
      callback(fullLink);
    });
  }
}
