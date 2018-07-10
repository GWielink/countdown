export default function (index, template, stashPreparedData, onLoad) {
    stashPreparedData({
        quote: 'Als je een hoop la trappjes drinkt word je ladderzat',
        author: 'Edwin',
    });

    onLoad();
}