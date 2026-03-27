import { NextResponse } from 'next/server';

// These will be populated from .env.local
const FB_PAGE_ID = process.env.FB_PAGE_ID;
const IG_USER_ID = process.env.IG_USER_ID;
const FB_ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Sanity sends the whole document, we extract what we need
    const { 
      title, 
      imageUrl, 
      postToFacebook, 
      postToInstagram 
    } = body;

    console.log(`[Social Sync] Processing project: "${title}"`);
    
    const results = [];

    // 1. Post to Facebook Page
    if (postToFacebook && FB_PAGE_ID && FB_ACCESS_TOKEN) {
      console.log(`[Social Sync] Posting to Facebook Page: ${FB_PAGE_ID}`);
      const fbUrl = `https://graph.facebook.com/v21.0/${FB_PAGE_ID}/photos`;
      
      const fbResponse = await fetch(fbUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: imageUrl,
          caption: title,
          access_token: FB_ACCESS_TOKEN,
        }),
      });
      
      const fbData = await fbResponse.json();
      results.push({ platform: 'Facebook', success: !fbData.error, data: fbData });
    }

    // 2. Post to Instagram (Business)
    if (postToInstagram && IG_USER_ID && FB_ACCESS_TOKEN) {
      console.log(`[Social Sync] Posting to Instagram User: ${IG_USER_ID}`);
      
      // Step A: Create Media Container
      const igMediaUrl = `https://graph.facebook.com/v21.0/${IG_USER_ID}/media`;
      const mediaResponse = await fetch(igMediaUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image_url: imageUrl,
          caption: title,
          access_token: FB_ACCESS_TOKEN,
        }),
      });
      
      const mediaData = await mediaResponse.json();
      
      if (mediaData.id) {
        // Step B: Publish the container
        const publishUrl = `https://graph.facebook.com/v21.0/${IG_USER_ID}/media_publish`;
        const publishResponse = await fetch(publishUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            creation_id: mediaData.id,
            access_token: FB_ACCESS_TOKEN,
          }),
        });
        
        const publishData = await publishResponse.json();
        results.push({ platform: 'Instagram', success: !publishData.error, data: publishData });
      } else {
        results.push({ platform: 'Instagram', success: false, error: mediaData.error });
      }
    }

    return NextResponse.json({ 
      message: 'Sync process completed', 
      results,
      received: { title, postToFacebook, postToInstagram }
    });

  } catch (error: any) {
    console.error('[Social Sync] Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
