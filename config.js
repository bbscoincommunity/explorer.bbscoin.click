//var api = 'https://remotenode.bbscoin.click';
//var api = 'https://explorer.bbscoin.click/api';
var api = 'https://explorer-api.bbscoin.click/api';
var blockTargetInterval = 120;
var coinUnits = 100000000;
var symbol = 'BBS';
var refreshDelay = 30000;
var networkStat = {
    'bbs': [
		['pool.bbscoin.click', 'https://explorer.bbscoin.click'],
		['pool.bbscoin.xyz', 'https://explorer.bbscoin.xyz'],
		['bbscoinpool.club', 'https://explorer.bbscoin.xyz/proxy/us.bbscoinpool.club:8117'],
		['bbs.dreampool.info', 'https://bbs.dreampool.info/api'],
		['cryptoknight.cc/bbs', 'https://explorer.bbscoin.xyz/proxy/78.46.85.142:2778'],
		['bbs.gonspool.com', 'https://explorer.bbscoin.xyz/proxy/bbs.gonspool.com:8117'],
		['pool-marine.ga/bbs', 'https://explorer.bbscoin.xyz/proxy/pool-marine.ga:8028'],
		['bbs.howpool.com', 'https://explorer.bbscoin.xyz/proxy/bbs.howpool.com:8117']
    ]
};
