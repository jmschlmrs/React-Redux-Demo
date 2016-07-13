import test from 'tape';
import sinon from 'sinon';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import App from './app';

function setup(textInput,callback) {
  let renderer = TestUtils.createRenderer();
  renderer.render(<App input={textInput} handleChange={callback} />);
  let output = renderer.getRenderOutput();

  return {
    output,
    renderer
  }
}

test('app renders correctly with empty input', (assert) => {
    let {output} = setup('');

    assert.equal('div',output.type);

    let appDivClassName = output.props.className;
    let classContains = appDivClassName.indexOf('app-container') > -1

    assert.ok(classContains);

    assert.end();
});

test('app children render correctly with empty input', (assert) => {
    let {output} = setup('');
    let [h2,input,p] = output.props.children;

    assert.equal('h2',h2.type);

    assert.equal('input',input.type);
    assert.equal('app-input',input.props.className);
    assert.equal(input.props.value,'');
    assert.ok(input.props.onChange);

    assert.equal('p',p.type);
    assert.equal(p.props.className,'hidden');

    assert.end();
});

test('app should set the background color on positive input', (assert) => {
    let {output} = setup('good');
    let appDivClassName = output.props.className;
    let classContains = appDivClassName.indexOf('app-container--positive') > -1

    assert.ok(classContains);
    assert.end();
});

test('app should set the background color on negative input', (assert) => {
    let {output} = setup('bad');
    let appDivClassName = output.props.className;
    let classContains = appDivClassName.indexOf('app-container--negative') > -1

    assert.ok(classContains);
    assert.end();
});

test('input should have onChange callback function', (assert) => {
    let handleChange = function() {};
    let {output} = setup('', handleChange);
    let [h2,input,p] = output.props.children;

    assert.equal(typeof input.props.onChange, 'function');
    assert.end();
});