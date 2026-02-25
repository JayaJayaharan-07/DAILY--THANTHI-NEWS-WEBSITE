const API_KEY = "pub_54627efec7594ecbb765cf01b8d52f04"; // Your API key
const url = `https://newsdata.io/api/1/latest?apikey=pub_54627efec7594ecbb765cf01b8d52f04`;

window.addEventListener("load", () => fetchNews("india"));

async function fetchNews(query) {
  try {
    const res = await fetch(`${url}&q=${query}`);
    const data = await res.json();
    console.log(data);

    // ✅ Use results instead of articles
    bindData(data.results);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}

function bindData(articles) {
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";

  articles.forEach(article => {
    if (!article.image_url) return; // Skip if no image

    const card = document.createElement("div");
    card.classList.add("news-card");

    card.innerHTML = `
      <img src="${article.image_url}" alt="News image" />
      <div class="news-content">
        <h3>${article.title ? article.title.slice(0, 60) : "No Title"}</h3>
        <p>${article.description ? article.description.slice(0, 100) : ""}...</p>
        <small>${new Date(article.pubDate).toLocaleString()}</small>
      </div>
    `;

    // Open full news in new tab when clicked
    card.addEventListener("click", () => {
      window.open(article.link, "_blank");
    });

    newsContainer.appendChild(card);
  });
}



const slider = document.getElementById('trending');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

var sidenav = document.querySelector(".side-navbar")

function showNavbar()
{
   sidenav.style.left="0"
}
 
function closeNavbar() 
{
   sidenav.style.left="-55%"
}