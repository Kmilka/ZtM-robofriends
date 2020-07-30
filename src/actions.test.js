import { 
    REQUEST_FAILED, 
    REQUEST_PENDING, 
    REQUEST_SUCCESS, 
    CHANGE_SEARCHFIELD
} from './constants.js';
import * as actions from './actions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

describe('search field', () => {
    const text = 'woo';
    const expectedAction = {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
    it('should create an action CHANGE_SEARCHFIELD', () => {
        expect(actions.searchField(text)).toEqual(expectedAction);
    })
})

describe('fetch robots', () => {
    const middlewares = [thunk]
    const mockStore = configureMockStore(middlewares)
    it('handles pending state', () => {
        const fetchMockToJsonPending = jest.fn(() => Promise.resolve('pending'))
        const expectedAction = {
                type: REQUEST_PENDING
            }
        const store = mockStore()
        store.dispatch(actions.requestAnything(fetchMockToJsonPending))
        expect(store.getActions()[0]).toEqual(expectedAction)
    })
    it('handles success', () => {
        const users = [
            {
                id: 123,
                name: 'test',
                email: 'mymail@com'
            },
            {
                id: 1,
                name: 'test2',
                email: 'mymail2@com'
            }
        ]
        const fetchMockToJsonSuccess = jest.fn(() => Promise.resolve(users))
        const expectedActions = [
            {
                type: REQUEST_PENDING
            },
            {
                type: REQUEST_SUCCESS,
                payload: users
            }
        ]
        const store = mockStore()
        return store.dispatch(actions.requestAnything(fetchMockToJsonSuccess))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
    it('handles failure', () => {
        const err = new Error('failed');
        const fetchMockToJsonFailure = jest.fn(() => Promise.reject(err))
        const expectedActions = [
            {
                type: REQUEST_PENDING
            },
            {
                type: REQUEST_FAILED,
                payload: err
            }
        ]
        const store = mockStore()
        return store.dispatch(actions.requestAnything(fetchMockToJsonFailure))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions)
            })
    })
})