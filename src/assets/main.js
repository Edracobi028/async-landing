//Logica necesaria
//API Youtube canal GNDX
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'c6f1a4646bmsh2d014cdc3a06134p16f33bjsn516366760f25',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
	}
};

//Referencia a Html donde insertamos el template
const content = null || document.getElementById('content');

//funcion con async y await
async function fetchData(urlApi) {
	const response = await fetch(urlApi, options); // pasar url y opciones con await
	const data = await response.json(); //Transformar la info
	return data; //return de los datos

}

//Funcion anonima de tipo Arrow Function que se invoca a si misma para ejecutar la logica
//Hacer el llamado a la API. obtener los elementos y mostrarlos
(async () => {
	try {
		const videos = await fetchData(API); // crear constante para usar la funcion pasando la URL de youtube
		//Generamos un template para que itere con cada video en una variable
		let view = `
			${videos.items.map(video => `
				<div class="group relative">
					<div
						class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
						<img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
					</div>
					<div class="mt-4 flex justify-between">
						<h3 class="text-sm text-gray-700">
						<span aria-hidden="true" class="absolute inset-0"></span>
						${video.snippet.title}
						</h3>
					</div>
				</div>
			`).slice(0,4).join('')}
		`;
	} catch {

	}
})();