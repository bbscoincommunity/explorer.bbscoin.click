# BBSCoin Blockchain Explorer
Block explorer for BBSCoin CryptoNote based cryptocurrency.

#### Installation

1) It takes data from daemon bbscoind. It should be accessible from the Internet. Run bbscoind with open port as follows:
```bash
./bbscoind --enable-cors=* --enable_blockexplorer
```
2) Just upload to your website and change 'api' variable in config.js to point to your daemon.
