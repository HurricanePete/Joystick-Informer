import * as actions from './users';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

describe('registerUser', () => {
	it('Should retun the action', () => {
		const user = 'Atlas';
		const jsonUser = JSON.stringify(user);
		const method = 'POST';
		const headers = {
			'content-type': 'application/json'
		};
		const response = {
            user: {
            	username: 'Atlas',
            	email: 'atlas@shrugged.com',
            	watchlist: []
            }
        };
        global.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json() {
                    return response;
                }
            })
        );

        const dispatch = jest.fn();
        return actions.registerUser(user)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/users/`,{ "body": `${jsonUser}`, "headers": headers, "method": method});
        });
	});
});