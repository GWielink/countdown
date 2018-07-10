import Flickr from 'flickr-sdk';
import key from '../api_key';

export default function fetchRandomFlickrPhoto (setCount = 3) {
    // TODO: move to seperate file
    const userId = '70039121@N02';
    let flickr = new Flickr(key);

    const randInt = (n) => {
        return Math.floor(n * Math.random());
    }

    const getPhotoUrl = (photosList, setTitle) => {
        const i = randInt(photosList.length);

        const {farm, id, server, secret} = photosList[i];
        return new Promise((resolve) => {
            return resolve({
                url: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_h.jpg`,
                title: setTitle,
            });
        });
    }

    const getPhotosFromRandomSet = (photosets) => {
        const set = photosets[randInt(setCount)];
        return flickr.photosets.getPhotos({
            user_id: userId,
            photoset_id: set.id
        }).then(({ body: { photoset: { photo }}}) => {
            return getPhotoUrl(photo, set.title._content);
        }).catch((err) => {
            console.error(err);
        })
    }

    return flickr.photosets.getList({
        user_id: userId,
    }).then(({ body: { photosets: { photoset } } }) => {
        return getPhotosFromRandomSet(photoset);
    }).catch((err) => {
        console.error(err);
    });
}