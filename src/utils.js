export async function handleFetch(url) {
    try {
        const response = await fetch(url);
        const fetchData = await response.json();

        return fetchData;
    } catch (error) {
        return [];
    }
}