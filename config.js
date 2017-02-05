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
    },
    keys: {
        id: number,
        key: string,
        name: string,
    },
};

exports.pg = "postgres://postgres:john@localhost:5432/juush";
exports.mongo = "mongodb://127.0.0.1:9876/juush";
