fetch('https://swapi.dev/api/films/1')
.then(data => {
  if (!data.ok) throw data;
  return data.json();
})
.then(post => {

display.innerHTML = `<div class="fade"></div>
<section class="star-wars">
  <div class="crawl">
    <div class="title">
      <p>Episode IV</p>
      <h1>A New Hope</h1>
    </div>
    <p>${post.opening_crawl}</p>
   
  </div>
</section>
`;
});