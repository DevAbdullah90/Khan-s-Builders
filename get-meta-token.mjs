import http from 'http';

const APP_ID = "2841366649542508";
const PORT = 4000;
const REDIRECT_URI = `http://localhost:${PORT}/`;

const authUrl = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=token&scope=pages_read_engagement,pages_manage_posts,instagram_basic,instagram_content_publish`;

console.log("\n🚀 STEP 1: Click this link to authorize your app:\n");
console.log(authUrl);
console.log("\nWaiting for you to authorize in your browser...");

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(`
    <html>
      <body style="font-family: sans-serif; text-align: center; padding: 50px;">
        <h1 style="color: #0866FF;">Authorization Successful!</h1>
        <p>Your browser has received the token.</p>
        <p>Please <b>copy the text in your browser's address bar</b> (the "URL") and paste it back to me in the chat.</p>
        <p style="color: #666; font-size: 0.8em;">You can close this window after copying.</p>
      </body>
    </html>
  `);
  
  if (req.url.includes("token")) {
    console.log("\n✅ [CATCHED] Request received at local server.");
  }
});

server.listen(PORT, () => {
  console.log(`\nLocal server is running on port ${PORT}...`);
});
