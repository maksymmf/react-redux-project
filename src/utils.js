// export function handleFetch (url, action) {
//     return function (dispatch) {
//         fetch (url)
//             .then(response => response.json())
//             .then(result => dispatch(action(result)))
//             .catch(() => [])
//     }
// };

// let fetchData = [];

export async function handleFetch(url) {
    try {
        const response = await fetch(url);
        const fetchData = await response.json();

        return fetchData;
    } catch (error) {
        return [];
    }
}