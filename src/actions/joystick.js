import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const BANNER_TOGGLE = 'BANNER_TOGGLE';
export const bannerToggle = () => ({
	type: BANNER_TOGGLE
})

export const DASHBOARD_TOGGLE = 'DASHBOARD_TOGGLE';
export const dashboardToggle = () => ({
	type: DASHBOARD_TOGGLE
})

export const SET_GAMEVIEW = 'SET_GAMEVIEW';
export const setGameview = (game) => ({
	type: SET_GAMEVIEW,
	game
})

export const SET_WATCHLIST_WARNING = 'SET_WATCHLIST_WARNING';
export const setWatchlistWarning = (gameId) => ({
	type: SET_WATCHLIST_WARNING,
	gameId
})

export const RESET_WATCHLIST_WARNING = 'RESET_WATCHLIST_WARNING';
export const resetWatchlistWarning = () => ({
	type: RESET_WATCHLIST_WARNING
})

export const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS';
export const setSearchResults = (searchResults) => ({
	type: SET_SEARCH_RESULTS,
	searchResults
})

export const SET_NEWS_RESULTS = 'SET_NEWS_RESULTS';
export const setNewsResults = (newsResults) => ({
	type: SET_NEWS_RESULTS,
	newsResults
})

export const searchAllGames = searchTerm => (dispatch) => {
	if(process.env.REACT_APP_STAGE === 'production'){
			return fetch(`${API_BASE_URL}/games/search/${searchTerm}`, {
			method: 'GET'
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(results => dispatch(setSearchResults(results)))
		.catch(err => console.log(err))
	}
	else {
		const fakeResults = [
		    {
		        "id": 77343,
		        "name": "Halo 4: King of the Hill Fueled by Mountain Dew",
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/edjepyopottardv28dac.jpg",
		            "cloudinary_id": "edjepyopottardv28dac",
		            "width": 1024,
		            "height": 1024
		        }
		    },
		    {
		        "id": 45149,
		        "name": "Halo 2: Limited Collector's Edition",
		        "first_release_date": 1099958400000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/uhhuqhzf83n2vfvun1im.jpg",
		            "cloudinary_id": "uhhuqhzf83n2vfvun1im",
		            "width": 1353,
		            "height": 1896
		        }
		    },
		    {
		        "id": 3122,
		        "name": "Halo 2: Multiplayer Map Pack",
		        "first_release_date": 1120521600000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/w5at3fcni81epyeltrsi.jpg",
		            "cloudinary_id": "w5at3fcni81epyeltrsi",
		            "width": 315,
		            "height": 445
		        }
		    },
		    {
		        "id": 45144,
		        "name": "Halo 5: Guardians Limited Collector's Edition",
		        "first_release_date": 1445904000000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/o4wnorswvjimtcjy3vc8.jpg",
		            "cloudinary_id": "o4wnorswvjimtcjy3vc8",
		            "width": 600,
		            "height": 600
		        }
		    },
		    {
		        "id": 45145,
		        "name": "Halo 5: Guardians Limited Edition",
		        "first_release_date": 1445904000000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/i0sfkpv9jhwayvjbiwju.jpg",
		            "cloudinary_id": "i0sfkpv9jhwayvjbiwju",
		            "width": 408,
		            "height": 500
		        }
		    },
		    {
		        "id": 45146,
		        "name": "Halo: Reach Limited Edition",
		        "first_release_date": 1287014400000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/ojgz9g1bo9tk1h5k2uod.jpg",
		            "cloudinary_id": "ojgz9g1bo9tk1h5k2uod",
		            "width": 1011,
		            "height": 1500
		        }
		    },
		    {
		        "id": 43954,
		        "name": "Halo: Reach Legendary Edition",
		        "first_release_date": 1284422400000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/rmrjw7mc1ud4qcugqgnc.jpg",
		            "cloudinary_id": "rmrjw7mc1ud4qcugqgnc",
		            "width": 600,
		            "height": 450
		        }
		    },
		    {
		        "id": 45148,
		        "name": "Halo 4: Limited Edition",
		        "first_release_date": 1352160000000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/seizoi6iwekcw8b0wlmc.jpg",
		            "cloudinary_id": "seizoi6iwekcw8b0wlmc",
		            "width": 426,
		            "height": 688
		        }
		    },
		    {
		        "id": 20855,
		        "name": "Halo 4: Champions Bundle",
		        "first_release_date": 1376956800000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/b8kpmae3hx1vt4hemuuy.jpg",
		            "cloudinary_id": "b8kpmae3hx1vt4hemuuy",
		            "width": 660,
		            "height": 388
		        }
		    },
		    {
		        "id": 43955,
		        "name": "Halo 3: Legendary Edition",
		        "first_release_date": 1190678400000,
		        "cover": {
		            "url": "//images.igdb.com/igdb/image/upload/t_thumb/jclndhmhrrdu3b9qpday.jpg",
		            "cloudinary_id": "jclndhmhrrdu3b9qpday",
		            "width": 450,
		            "height": 229
		        }
		    }
		]
		dispatch(setSearchResults(fakeResults));
	}
}

export const searchNews = () => (dispatch) => {
	console.log(process.env.REACT_APP_STAGE);
	if(process.env.REACT_APP_STAGE === 'production') {
		return fetch(`${API_BASE_URL}/games/news`, {
			method: 'GET'
		})
		.then(res => normalizeResponseErrors(res))
		.then(res => res.json())
		.then(news  => dispatch(setNewsResults(news)))
		.catch(err => console.log(err))
	}
	else {
		const fakeNews = [
		    {
		        "id": 313266,
		        "title": "Adorable PlayStation VR Title Moss Sneaks Out February 27",
		        "image": "https://techraptor.net/wp-content/uploads/2018/02/moss-forest-ground.jpg",
		        "url": "https://techraptor.net/content/adorable-playstation-vr-title-moss-sneaks-out-february-27",
		        "pulse_source": {
		            "id": 13,
		            "name": "Tech Raptor"
		        },
		        "published_at": 1519069101000
		    },
		    {
		        "id": 313263,
		        "title": "Rust review",
		        "image": "https://cdn.mos.cms.futurecdn.net/9LYHPZ22BX6ERzjs9pmyYM-1200-80.jpg",
		        "url": "http://www.pcgamer.com/rust-review",
		        "pulse_source": {
		            "id": 7,
		            "name": "PC Gamer"
		        },
		        "published_at": 1519068095000
		    },
		    {
		        "id": 313261,
		        "title": "The first 18 minutes of Ni no Kuni II: Revenant Kingdom",
		        "image": "https://gematsu.com/wp-content/uploads/2018/02/NnK2-First-18-Mins_02-19-18.jpg",
		        "url": "https://gematsu.com/2018/02/first-18-minutes-ni-no-kuni-ii-revenant-kingdom",
		        "pulse_source": {
		            "id": 15,
		            "name": "Gematsu"
		        },
		        "published_at": 1519068059000
		    },
		    {
		        "id": 313265,
		        "title": "The dumbest armour in PC gaming history",
		        "image": "https://cdn.mos.cms.futurecdn.net/PRfhJRpzTNZyjnyJMp4NFb-1200-80.jpg",
		        "url": "http://www.pcgamer.com/the-dumbest-armour-in-pc-gaming-history",
		        "pulse_source": {
		            "id": 7,
		            "name": "PC Gamer"
		        },
		        "published_at": 1519068012000
		    },
		    {
		        "id": 313260,
		        "title": "Every Bar In The Witcher 3, Reviewed",
		        "image": "https://i.kinja-img.com/gawker-media/image/upload/s--MFvC__rh--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/zeo8lrwdpb15hspvoeqn.png",
		        "url": "https://kotaku.com/every-bar-in-the-witcher-3-reviewed-1823135241",
		        "pulse_source": {
		            "id": 1,
		            "name": "Kotaku"
		        },
		        "published_at": 1519068000000
		    },
		    {
		        "id": 313259,
		        "title": "Twitch Delays New Community Guidelines",
		        "image": "http://img.wennermedia.com/social/twitch-13a2eee5-67c9-47ba-9cfb-d2e9b660de84.png",
		        "url": "https://www.rollingstone.com/glixel/news/twitch-delays-new-community-guidelines-w516895",
		        "pulse_source": {
		            "id": 43,
		            "name": "Rolling Stone"
		        },
		        "published_at": 1519067854000
		    },
		    {
		        "id": 313256,
		        "title": "DJMAX Respect Set For March 6, 2018",
		        "image": "http://www.siliconera.com/wordpress/wp-content/uploads/2018/02/djmaxrespect1_thumb.jpg",
		        "url": "http://www.siliconera.com/2018/02/19/djmax-respect-set-march-6-2018/",
		        "pulse_source": {
		            "id": 14,
		            "name": "Siliconera"
		        },
		        "published_at": 1519066857000
		    },
		    {
		        "id": 313257,
		        "title": "Guide: Kingdom Come: Deliverance Lock Picking Tips - How to Pick Locks and Get Lock Picks",
		        "image": "http://images.pushsquare.com/news/2018/02/guide_kingdom_come_deliverance_lock_picking_tips_-_how_to_pick_locks_and_get_lock_picks/large.jpg",
		        "url": "http://www.pushsquare.com/news/2018/02/guide_kingdom_come_deliverance_lock_picking_tips_-_how_to_pick_locks_and_get_lock_picks",
		        "pulse_source": {
		            "id": 39,
		            "name": "PushSquare"
		        },
		        "published_at": 1519066800000
		    },
		    {
		        "id": 313252,
		        "title": "Evo 2018 registration opens at noon today!",
		        "image": "http://shoryuken.com/wp-content/uploads/2017/10/evo-2018-logo-trailer.jpg",
		        "url": "http://shoryuken.com/2018/02/19/evo-2018-registration-opens-at-noon-today/",
		        "pulse_source": {
		            "id": 12,
		            "name": "Shoryuken"
		        },
		        "published_at": 1519065914000
		    },
		    {
		        "id": 313250,
		        "title": "How Anthem Is Possibly Shaping Up To Be Bioware’s Do Or Die Project",
		        "image": "https://gamingbolt.com/wp-content/uploads/2017/12/ea-shows-more-of-their-new-ip-anthem-696x392.jpg",
		        "url": "https://gamingbolt.com/how-anthem-is-possibly-shaping-up-to-be-biowares-do-or-die-project",
		        "pulse_source": {
		            "id": 18,
		            "name": "GamingBolt"
		        },
		        "published_at": 1519065590000
		    }
		]
		dispatch(setNewsResults(fakeNews)); 
	}
}

export const searchSingleGame = gameId => (dispatch) => {
	return fetch(`${API_BASE_URL}/games/id/${gameId}`, {
		method: 'GET'
	})
	.then(res => normalizeResponseErrors(res))
	.then(res => res.json())
	.then(game => dispatch(setGameview(game)))
	.catch(err => console.log(err))
}