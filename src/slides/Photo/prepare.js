export default function (index, template, stashPreparedData, onLoad) {
    let image = new Image();
    image.src = template.url;

    image.onload = onLoad;

    stashPreparedData({
        image,
    });
}