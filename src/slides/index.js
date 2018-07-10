// Photo
import preparePhoto from './Photo/prepare';
import renderPhoto from './Photo/render';
// Flickr
import prepareFlickr from './Flickr/prepare';
import renderFlickr from './Flickr/render';

const slides = [{
    type: 'FLICKR_SLIDE',
    prepare: prepareFlickr,
    render: renderFlickr,
}, {
    type: 'FLICKR_SLIDE',
    prepare: prepareFlickr,
    render: renderFlickr,
}, {
    type: 'PHOTO_SLIDE',
    prepare: preparePhoto,
    render: renderPhoto,
    url: 'https://0297.nl/images/news/detail/famke-louise_1518891397.jpg',
}];

export default slides;