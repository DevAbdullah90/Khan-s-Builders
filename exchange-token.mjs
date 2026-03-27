const APP_ID = "2841366649542508";
const APP_SECRET = "b0e3fc0a7035b74aa9c54785366582f5";
const SHORT_TOKEN = "EAAoYNTnSl2wBRD14VkAW46dZAKMZCMswFQRVrx6nXTeeboZAU0l6w4IkEniuYsCU7PttzuG7S3F5Xk5kO1tPcVdDHTqyYRcBZCB3ujP6bZBBWc1Q40izUwWZCEzBDZAgtD9ZAzZC6GbIhZAvWBfxfOt7hKcfbFXFLBzlQTkFLgzkK4tRAe1mEXTiuhCVGuZBsNEg21831dFaPeDpqvvfG3e8FDnOdyuoWbYHHJwXuRQD4cZD";
const PAGE_ID = "61578460817150";

async function exchange() {
  try {
    // 1. Exchange for Long-lived User Token
    console.log("Exchanging token...");
    const exchangeUrl = `https://graph.facebook.com/v21.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${APP_ID}&client_secret=${APP_SECRET}&fb_exchange_token=${SHORT_TOKEN}`;
    const res1 = await fetch(exchangeUrl);
    const data1 = await res1.json();
    
    if (data1.error) throw data1.error;
    const longUserToken = data1.access_token;
    console.log("Got Long-lived User Token.");

    // 2. Get Page Access Token and Instagram ID
    const pageUrl = `https://graph.facebook.com/v21.0/me/accounts?access_token=${longUserToken}`;
    const res2 = await fetch(pageUrl);
    const data2 = await res2.json();
    
    const page = data2.data.find(p => p.id === PAGE_ID || p.name.includes("Khan"));
    if (!page) {
       console.log("Page not found in account. Found:", data2.data.map(p => p.name));
       return;
    }

    const pageAccessToken = page.access_token;
    console.log("✅ Permanent Page Token Found!");
    console.log("TOKEN:", pageAccessToken);

    // 3. Get Instagram ID
    const igUrl = `https://graph.facebook.com/v21.0/${page.id}?fields=instagram_business_account&access_token=${pageAccessToken}`;
    const res3 = await fetch(igUrl);
    const data3 = await res3.json();
    
    if (data3.instagram_business_account) {
      console.log("✅ Instagram ID Found:", data3.instagram_business_account.id);
    } else {
      console.log("⚠️ No Instagram account linked to this page.");
    }

  } catch (err) {
    console.error("Error:", err);
  }
}

exchange();
