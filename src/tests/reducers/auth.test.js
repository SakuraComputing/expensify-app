import authReducer  from '../../reducers/auth';

test('should set uid for login', () => {
    const uid = 'hdoehh4545';
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid: uid});
});

test('should unset uid on logout', () => {
   const action = { type: 'LOGOUT'};
   const state = authReducer({uid: 'test'}, action);
   expect(state).toEqual({});
});