const url = `https://newsapi.org/v2/top-headlines?country=lv&apiKey=a1bd549edc9d4a8f8eb4b9bbe6d12faa`;

export async function getLvNews() {
	let result = await fetch(url).then((response => response.json()));

	return result.articles;
}
