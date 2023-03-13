export const getGifs= async(category) => {
    const url =`https://api.giphy.com/v1/gifs/search?api_key=jt0ORBqxS7VCLOJCjxE2OQHKKBYbrWkI&q=${category}&limit=20`;
    const resp =await fetch(url);
    const {data} =await resp.json();

    const gifs = data.map(gif =>({
       id:gif.id,
       title:gif.title,
       img:gif.images.downsized.url
    }));

    //console.log(gifs);
    return gifs;
}