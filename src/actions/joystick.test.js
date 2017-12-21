import * as actions from './joystick';
import {API_BASE_URL} from '../config';

describe('bannerToggle', () => {
	it('Should return the action', () => {
		const action = actions.bannerToggle();
		expect(action.type).toEqual(actions.BANNER_TOGGLE);
	});
});

describe('dashboardToggle', () => {
	it('Should return the action', () => {
		const action = actions.dashboardToggle();
		expect(action.type).toEqual(actions.DASHBOARD_TOGGLE);
	});
});

describe('setGameview', () => {
	it('Should return the action', () => {
		const game = 'My game';
		const action = actions.setGameview(game);
		expect(action.type).toEqual(actions.SET_GAMEVIEW);
		expect(action.game).toEqual(game);
	});
});

describe('setWatchlistWarning', () => {
	it('Should return the action', () => {
		const gameId = 45;
		const action = actions.setWatchlistWarning(gameId);
		expect(action.type).toEqual(actions.SET_WATCHLIST_WARNING);
		expect(action.gameId).toEqual(gameId);
	});
});

describe('resetWatchlistWarning', () => {
	it('Should return the action', () => {
		const action = actions.resetWatchlistWarning();
		expect(action.type).toEqual(actions.RESET_WATCHLIST_WARNING);
	});
});

describe('setSearchResults', () => {
	it('Should return the action', () => {
		const searchResults = 'Fancy Search Results'
		const action = actions.setSearchResults(searchResults);
		expect(action.type).toEqual(actions.SET_SEARCH_RESULTS);
		expect(action.searchResults).toEqual(searchResults);
	});
});

describe('setNewsResults', () => {
	it('Should return the action', () => {
		const newsResults = 'Fancy Search Results';
		const action = actions.setNewsResults(newsResults);
		expect(action.type).toEqual(actions.SET_NEWS_RESULTS);
		expect(action.newsResults).toEqual(newsResults);
	});
});

describe('searchAllGames', () => {
	it('Should retun the action', () => {
		const searchTerm = 'haloTest';
		const method = 'GET';
		const response = {
            games: []
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
        return actions.searchAllGames(searchTerm)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/games/search/${searchTerm}`, {"method": method});
            expect(dispatch).toHaveBeenCalledWith(actions.setSearchResults(response));
        });
	});
});

describe('searchNews', () => {
	it('Should retun the action', () => {
		const method = 'GET';
		const response = {
            news: []
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
        return actions.searchNews()(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/games/news`, {"method": method});
            expect(dispatch).toHaveBeenCalledWith(actions.setNewsResults(response));
        });
	});
});

describe('searchSingleGame', () => {
	it('Should retun the action', () => {
		const gameId = 45;
		const method = 'GET';
		const response = {
            game: {}
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
        return actions.searchSingleGame(gameId)(dispatch).then(() => {
            expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/games/id/${gameId}`, {"method": method});
            expect(dispatch).toHaveBeenCalledWith(actions.setGameview(response));
        });
	});
});