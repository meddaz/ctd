fetch('https://swapi.dev/api/people/5')
    .then(data => {

        if (!data.ok) throw data;
        return data.json();
    })
    .then(post => {
        bio.innerHTML = `<h1>${post.name}</h1> 
<br>
<br>
<p>Born:  ${post.birth_year}</p>
<br>
<p>Gender:  ${post.gender}</p>

<br>
<p>Hair Color: ${post.hair_color}</p>
<br>
<p>Eye Color: ${post.eye_color}</p>

<br>
<p>Homeworld: Alderaan</p>
<br>
<p>First appearance: 
<a href="/aNewHopeCrawl.html">A New Hope</a></p>
<br> 
`;
    });