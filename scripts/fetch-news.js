const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function fetchNews() {
    try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
            params: { country: 'us', apiKey: process.env.NEWS_API_KEY },
        });
        const news = response.data;
        const outputDir = path.join(__dirname, '../src/posts');
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }
        fs.writeFileSync(path.join(outputDir, 'news.json'), JSON.stringify(news, null, 2));
        console.log('News fetched successfully!');
    } catch (error) {
        console.error('Error fetching news:', error.message);
        process.exit(1);
    }
}

fetchNews();
