var parse = function(version) {
    var versioning = {
        major: null,
        minor: null,
        bugfix: null
    }
    version = version.split(".");
    versioning.major = version[0] ? isNaN(version[0]) ? null : version[0] : null;
    versioning.minor = version[1] ? isNaN(version[1]) ? null : version[1] : null;
    versioning.bugfix = version[2] ? isNaN(version[2]) ? null : version[2] : null;
    return versioning;
}

var newer = function(version, version1) {
    if (typeof version === 'string') version = parse(version);
    if (typeof version1 === 'string') version1 = parse(version1);
    if (typeof version !== 'object' || typeof version1 !== 'object') return null;
    if (version.major) {
        if (version1.major) {
            if (version.major > version1.major) return version; else if (version1.major > version.major) return version1;
        } else return version;
    } else if (version1.major) return version1;
    if (version.minor) {
        if (version1.minor) {
            if (version.minor > version1.minor) return version; else if (version1.minor > version.minor) return version1;
        } else return version;
    }
    if (version.bugfix) {
        if (version1.bugfix) {
            if (version.bugfix > version1.bugfix) return version; else if (version1.bugfix > version.bugfix) return version1;
        } else return version;
    }
    return null;
}

module.exports.newer = newer;
module.exports = parse;