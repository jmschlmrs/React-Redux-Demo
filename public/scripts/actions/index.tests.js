import test from 'tape';
import inputChange from './index';

test('INPUT_CHANGE action creator without input', function(assert) {

    let expected = {type: 'INPUT_CHANGE',value: ''};

    assert.deepEqual(inputChange(''),expected);
    assert.end();
});

test('INPUT_CHANGE action creator with input', function(assert) {

    let expected = {type: 'INPUT_CHANGE',value: 'test text'};

    assert.deepEqual(inputChange('test text'),expected);
    assert.end();
});