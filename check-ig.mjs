const TOKEN = "EAAoYNTnSl2wBRD14VkAW46dZAKMZCMswFQRVrx6nXTeeboZAU0l6w4IkEniuYsCU7PttzuG7S3F5Xk5kO1tPcVdDHTqyYRcBZCB3ujP6bZBBWc1Q40izUwWZCEzBDZAgtD9ZAzZC6GbIhZAvWBfxfOt7hKcfbFXFLBzlQTkFLgzkK4tRAe1mEXTiuhCVGuZBsNEg21831dFaPeDpqvvfG3e8FDnOdyuoWbYHHJwXuRQD4cZD";

async function check() {
  try {
    const res = await fetch(`https://graph.facebook.com/v21.0/me?fields=instagram_business_account&access_token=${TOKEN}`);
    const data = await res.json();
    console.log("Instagram Info:", data);
  } catch (e) {
    console.error(e);
  }
}
check();
