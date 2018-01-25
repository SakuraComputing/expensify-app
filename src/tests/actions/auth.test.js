import { login, logout } from '../../actions/auth';

test('should setup the login action object', () => {
    const uid = '4r447ffuf';
    const action = login(uid);
    expect(action).toEqual({
       type: 'LOGIN',
       uid: uid
    })
});

test('should setup logout action object', () => {
    const action = logout();
    expect(action).toEqual({ type: 'LOGOUT'})
});