const noop = v => v;
const string = v => String(v);
const date = v => new Date(v);
const number = v => Number(v);
const ip = v => String(v).split("/")[0];

const schema = exports.schema = {
    index: {
        id: noop,
        uploaddate: date,
        keyid: number,
        ip: ip,
        filename: string,
        mimetype: string,
        keyid: number,
        lastdownload: date,
        downloads: number,
        modifiers: () => ({}),
    },
    keys: {
        id: number,
        key: string,
        name: string,
    },
};

//exports.update = true;

exports.pg = "postgres://john2143com:a@localhost:5432/juush";
exports.mongo = "mongodb://192.168.1.11:9876/juush";
