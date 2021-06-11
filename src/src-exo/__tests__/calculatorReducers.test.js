import calculatorReducers from '../reducers/calculatorReducers'

describe('Calculator Reducers',() => {

    //check state change accordingly to action ADD_INPUTS
    it('adds correctly', () => {
        let state = {
            output: 100
        };
        let action = {type:"ADD_INPUTS", output: 500};
        state = calculatorReducers(state, action);
        expect(state).toStrictEqual({
            ...state,
            output: 500
        });
    });

    //check state change accordingly to action SUBTRACT_INPUTS
    it('delete correctly', () => {
        let state = {
            output: 100
        };
        state = calculatorReducers(state,{type:"SUBTRACT_INPUTS", output: 50});
        expect(state).toStrictEqual({
            ...state,
            output: 50
        });
    });

});
