// Books
import prepareBooks from './Books/prepare';
import renderBooks from './Books/render';
// Photo
import preparePhoto from './Photo/prepare';
import renderPhoto from './Photo/render';
// Flickr
import prepareFlickr from './Flickr/prepare';
import renderFlickr from './Flickr/render';
// Calendar
import prepareCalendar from '../slides/Calendar/prepare';
import renderCalendar from '../slides/Calendar/render';
// Quote
import prepareQuote from '../slides/Quote/prepare';
import renderQuote from '../slides/Quote/render';

const slides = [{
    type: 'QUOTE_SLIDE',
    prepare: prepareQuote,
    render: renderQuote,
}, {
    type: 'BOOKS_SLIDE',
    prepare: prepareBooks,
    render: renderBooks,
},{
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