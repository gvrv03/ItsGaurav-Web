import baseUrl from "../baseUrl";
const EXTERNAL_DATA_URL = baseUrl;

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>https://itsgaurav.vercel.app/</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/Login</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/Register</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/About</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/ContactUs</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/SavedBlog</loc>
  </url>
  <url>
      <loc>https://itsgaurav.vercel.app/Blogs</loc>
  </url>
${posts
  .map((item) => {
    return `
       <url>
           <loc>${`${EXTERNAL_DATA_URL}/Post/${item._id}`}</loc>
       </url>
     `;
  })
  .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch(EXTERNAL_DATA_URL + "/api/blogs");
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader("Content-Type", "text/xml");

  // we send the XML to the browser
  res.write(sitemap);
  res.end();
  return {
    props: {},
  };
}

export default SiteMap;
