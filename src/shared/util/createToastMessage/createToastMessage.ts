import { toastController } from "@ionic/core";
export async function createToastMessage(
  message: string,
  duration: number = 3000,
  position: "top" | "bottom" | "middle" = "bottom"
) {
  const toast = await toastController.create({
    message: message,
    duration: duration,
    position: position,
  });
  await toast.present();
}
