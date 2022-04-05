import React from 'react'
import renderer from 'react-test-renderer'
import Playground from '../src/Playground'

test('Name changes to Bobby', () => {
    const component = renderer.create(
        <Playground />
    )
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot()

    tree.handleClick()
    tree = component.toJSON()
    expect(tree).toMatchSnapShot()
})