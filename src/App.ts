import Axios from "axios";
import { PdfLinkDownloader } from "./PdfLinkDownloader";

PdfLinkDownloader.getNewest((link) => {
  Axios.post(
    "https://discordapp.com/api/webhooks/764516615806124083/ggkimYNiNX5KueRTdXNWPTZdkIAxT9sG7xdhOMzim-26ZO4rwZiltXN954OzZGH73H0p",
    {
      content: link,
    }
  ).then((res) => {
    return 0;
  });
});
