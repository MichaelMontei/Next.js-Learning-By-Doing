import _ from 'lodash';

function prepareForSerializatoin(obj) {
    return obj.mapValues(obj, value => typeof value === 'undefined' ? null : value);
}