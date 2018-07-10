export default function (index, template, stashPreparedData, onLoad) {
    stashPreparedData({
        calendar: [{
            date: new Date('2018-08-13'),
            description: 'Ik ben een tof evenement',
            location: 'Franckenroom'
        }, {
            date: new Date('2018-08-09'),
            description: 'Ik ben nog wel een tikkkie toffer',
            location: 'X0515.0020',
        }, {
            date: new Date('2018-08-23'),
            description: 'BOB Borrel',
            location: 'Franckenroom'
        }]
    });

    onLoad();
}