import { addInputs , subtractInputs } from '../actions/calculatorActions'

describe('ACTIONS - Test calculatorActions',() => {

    //check addInputs() create the right action
    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        expect(add).toStrictEqual({
            type: "ADD_INPUTS",
            output: 50
        });
    });

    //check subtractInputs() create the right action
    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);
        expect(subtract).toStrictEqual({
            type: "SUBTRACT_INPUTS",
            output: -50
        });
    });

});

