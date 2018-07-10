export default function (index, template, stashPreparedData, onLoad) {
    stashPreparedData({
        calendar: [{
            date: new Date(),
            description: 'Ik ben een tof evenement'
        }, {
            date: new Date(),
            description: 'Ik ben nog wel een tikkkie toffer'
        }]
    });

    onLoad();
}