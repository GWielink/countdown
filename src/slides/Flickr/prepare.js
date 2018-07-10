import fetchRandomFlickrPhoto from "../../functions/fetch-random-flickr-photo";

export default function (index, template, stashPreparedData, onLoad) {
    fetchRandomFlickrPhoto().then(({url, title}) => {
        let image = new Image();
        image.src = url;

        image.onload = onLoad;

        stashPreparedData({
            image,
            title,
        });
    });
}
