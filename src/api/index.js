const { load } = require('cheerio');
const cloudscraper = require('cloudscraper');
const { BASE_URL } = require('./urls/index');


const getGames = async(page) =>{
  const res = await cloudscraper.get(`${BASE_URL}/page/${page}`)
  const $ = load(res);

  const games = $('body.home div#main div.site-content article')
    .map((index, element) => new Promise((resolve, reject) =>{
      try{
        const $element = $(element);
        const title = $element.find('header.entry-header h1.entry-title a').text() || null;
        const poster = $element.find('div.entry-content p a img.alignleft').attr('src') || null;
        const date = $element.find('header.entry-header div.entry-meta span.entry-date time.entry-date').text() || null;
        let _torrent = $element.find('div.entry-content ul li').html().match(/magnet:\?xt=urn:btih:[a-zA-Z0-9]*/g) || null
        
        const torrent = _torrent ?  _torrent[0] : null;
        
        resolve({
          title: title,
          poster: poster,
          date: date,
          torrent: torrent
        });
      }catch(err){
        reject(err)
      }
    })).get();
    
    return Promise.all(games);
};  

module.exports = {
  getGames
}