import React from "react";
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", ()=>{
    test('status from props should be in the state', ()=>{
        const TEST_STRING = "test status";
        const component = create(<ProfileStatus status={TEST_STRING}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe(TEST_STRING);
    });
    test("after creation span should be displayed", ()=>{
        const TEST_STRING = "test status";
        const component = create(<ProfileStatus status={TEST_STRING}/>);
        const root = component.root;
        let span = root.findAllByType("span")
        expect(span.length).toBe(1);
    });
    test("the span should contains correct status", ()=>{
        const TEST_STRING = "test status";
        const component = create(<ProfileStatus status={TEST_STRING}/>);
        const root = component.root;
        let span = root.findByType("span")
        expect(span.props.children).toBe(TEST_STRING);
    });
    test("after creation input should not be displayed", ()=>{
        const TEST_STRING = "test status";
        const component = create(<ProfileStatus status={TEST_STRING}/>);
        const root = component.root;
        expect(()=>{
            const input = root.findByType("input")
        }).toThrow();
    });
    test("input should be displayed in edit mode instead of span", ()=>{
        const TEST_STRING = "test status";
        const component = create(<ProfileStatus status={TEST_STRING}/>);
        const root = component.root;
        let span = root.findByType("span")
        span.props.onDoubleClick();
        const input = root.findByType("input")
        expect(()=>{
            const spanShouldBeHidden = root.findByType("span")
        }).toThrow();
        expect(input.props.value).toBe(TEST_STRING);
    });
    test("callback should be called", ()=>{
        const TEST_STRING = "test status";
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={TEST_STRING} updateUserStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
})