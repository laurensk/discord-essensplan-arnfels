import { Scheduling } from "./Scheduling";

Scheduling.downloadAndSendImage();

Scheduling.enable(() => {
  console.log("Successfully started Essensplan-Arnfels...\n");
});
