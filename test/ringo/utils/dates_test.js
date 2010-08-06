var assert = require("assert");
var dates = require("ringo/utils/dates");

exports.testParse = function() {
    
    // cases map datestrings to objects with corresponding UTC date properties
    var cases = {
        "2000": {
            year: 2000,
            month: 0,
            date: 1
        },
        "2005-10": {
            year: 2005,
            month: 9,
            date: 1
        },
        "1971-07-23": {
            year: 1971,
            month: 6,
            date: 23
        },
        "1801-11-20T04:30:15Z": {
            year: 1801,
            month: 10,
            date: 20,
            hour: 4,
            minutes: 30,
            seconds: 15
        },
        "1989-06-15T18:30:15.91Z": {
            year: 1989,
            month: 5,
            date: 15,
            hour: 18,
            minutes: 30,
            seconds: 15,
            milliseconds: 910
        },
        "1989-06-15T18:30:15.9105Z": {
            year: 1989,
            month: 5,
            date: 15,
            hour: 18,
            minutes: 30,
            seconds: 15,
            milliseconds: 911
        },
        "2010-08-06T15:21:25-06": { // MDT
            year: 2010,
            month: 7,
            date: 6,
            hour: 21,
            minutes: 21,
            seconds: 25
        },
        "2010-08-07T06:21:25+9": { // JSP
            year: 2010,
            month: 7,
            date: 6,
            hour: 21,
            minutes: 21,
            seconds: 25
        },
        "2010-08-07T02:51:25+05:30": { // IST
            year: 2010,
            month: 7,
            date: 6,
            hour: 21,
            minutes: 21,
            seconds: 25
        }
    };

    var o, got, exp;
    for (var str in cases) {
        o = cases[str];
        got = dates.parse(str);
        exp = new Date(Date.UTC(o.year, o.month, o.date, o.hour || 0, o.minutes || 0, o.seconds || 0, o.milliseconds || 0));
        assert.strictEqual(got.getUTCFullYear(), exp.getUTCFullYear(), str + ": correct UTCFullYear");
        assert.strictEqual(got.getUTCMonth(), exp.getUTCMonth(), str + ": correct UTCMonth");
        assert.strictEqual(got.getUTCDate(), exp.getUTCDate(), str + ": correct UTCDate");
        assert.strictEqual(got.getUTCHours(), exp.getUTCHours(), str + ": correct UTCHours");
        assert.strictEqual(got.getUTCMinutes(), exp.getUTCMinutes(), str + ": correct UTCMinutes");
        assert.strictEqual(got.getUTCSeconds(), exp.getUTCSeconds(), str + ": correct UTCSeconds");
        assert.strictEqual(got.getUTCMilliseconds(), exp.getUTCMilliseconds(), str + ": correct UTCMilliseconds");
    }
    
   return;

};

if (require.main == module.id) {
    require("test").run(exports);
}