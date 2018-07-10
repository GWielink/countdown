// Photo
import preparePhoto from './Photo/prepare';
import renderPhoto from './Photo/render';
// Flickr
import prepareFlickr from './Flickr/prepare';
import renderFlickr from './Flickr/render';
// Calendar
import prepareCalendar from '../slides/Calendar/prepare';
import renderCalendar from '../slides/Calendar/render';


const slides = [{
    type: 'FLICKR_SLIDE',
    prepare: prepareFlickr,
    render: renderFlickr,
}, {
    type: 'CALENDAR_SLIDE',
    prepare: prepareCalendar,
    render: renderCalendar,
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