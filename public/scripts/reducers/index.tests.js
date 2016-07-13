import test from 'tape';
import userInput from './index';

test('reduce initial state without action', function(assert) {
    let state = {
        value : ''
    };
    let action = {};

    assert.deepEqual(userInput(state,action),state);
    assert.end();
});

test('reduce initial state with action', function(assert) {
    let state = {
        value : ''
    };
    let action = {
        type : 'INPUT_CHANGE',
        value: 'test'
    };

    assert.deepEqual(userInput(state,action),{value:'test'});
    assert.end();
});