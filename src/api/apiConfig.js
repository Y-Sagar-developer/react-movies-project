const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'ff23cb3081eafbd3b1786908ad4df781',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;