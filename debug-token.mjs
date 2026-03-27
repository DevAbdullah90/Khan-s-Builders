const TOKEN = "EAAoYNTnSl2wBRD14VkAW46dZAKMZCMswFQRVrx6nXTeeboZAU0l6w4IkEniuYsCU7PttzuG7S3F5Xk5kO1tPcVdDHTqyYRcBZCB3ujP6bZBBWc1Q40izUwWZCEzBDZAgtD9ZAzZC6GbIhZAvWBfxfOt7hKcfbFXFLBzlQTkFLgzkK4tRAe1mEXTiuhCVGuZBsNEg21831dFaPeDpqvvfG3e8FDnOdyuoWbYHHJwXuRQD4cZD";

async function check() {
  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/debug_token?input_token=${TOKEN}&access_token=${TOKEN}`);
    // Wait, debug_token needs an App Access Token or Admin token.
    // Let's just try to call /me
    const resMe = await fetch(`https://graph.facebook.com/v21.0/me?fields=name,id&access_token=${TOKEN}`);
    const dataMe = await resMe.json();
    console.log("Token Identity:", dataMe);

    const resAcc = await fetch(`https://graph.facebook.com/v21.0/me/accounts?access_token=${TOKEN}`);
    const dataAcc = await resAcc.json();
    console.log("Accounts accessible:", dataAcc);

  } catch (e) {
    console.error(e);
  }
}
check();
