const API =
  "https://spotify23.p.rapidapi.com/artist_albums/?id=1GImnM7WYVp95431ypofy9&offset=0&limit=100";

const content=null||document.getElementById("content");
  const options = {
  method: "GET",
  headers: {
    'X-RapidAPI-Key': '59a3bbb002msh15cc3bf18bbbbebp110addjsn7178cb1b9f72',
    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
}
};


async function fetchData(urlapi) {
  const response = await fetch(urlapi, options);
  const data = await response.json();
  return data;
}
(async () => {
  try {
    const artistalbums = await fetchData(API);
    console.log(artistalbums);
    let view = `
    ${artistalbums.data.artist.discography.albums.items.map(
      (album) => `
    <div class="group relative">
    <div
      class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
      <img src="${album.releases.items[0].coverArt.sources[0].url}" alt="" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
      <h3 class="text-sm text-gray-700">
        <span aria-hidden="true" class="absolute inset-0"></span>
        ${album.releases.items[0].name}
      </h3>
    </div>
  </div>
    `).join('')}`;
        console.log(view);
        content.innerHTML=view;
  } catch (error) {
    console.log(error);
  }
})();
