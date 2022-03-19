export const mockRawData = () => {
    return [...Array(getRandomInt(10, 25)).keys()].map((value, index) => ({
        value: getRandomInt(0, 100),
        text: `Word #${index}`
    }))
};

export const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export const submitMessage = (message) => {
    // Simple POST request with a JSON body using fetch
    if (!message) {
        alert('Need message to post');
        return;
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
    };
    fetch('http://localhost:3001/api/search/submitPosts', requestOptions)
        .then(response => response.json())
        .then(data => {
            if (data?.message) {
                alert(`Post added with: ${data?.message}`);
            }
        }).catch((e) => {
            alert('Post failed with: ', e?.message);
        });
}