import cryptoReducer, { coinList } from '../Redux/cryptoData';

describe('check reducer', () => {
  test('return initail state', () => {
    expect(cryptoReducer(undefined, {})).toEqual(coinList);
  });

  test('should fetch list of coins', () => {
    const action = {
      type: 'crypto-hunter/crytoData/load/fulfilled',
      payload: [
        {
          id: 'bitcoin',
          name: 'Bitcoin',
          symbol: 'BTC',
          rank: '1',
        },
        {
          id: 'ethereum',
          name: 'Ethereum',
          symbol: 'ETH',
          rank: '2',
        },
        {
          id: 'ripple',
          name: 'Ripple',
          symbol: 'XRP',
          rank: '3',
        },
      ],
    };
    expect(cryptoReducer(coinList, action)).toEqual([
      {
        id: 'bitcoin',
        name: 'Bitcoin',
        symbol: 'BTC',
        rank: '1',
      },
      {
        id: 'ethereum',
        name: 'Ethereum',
        symbol: 'ETH',
        rank: '2',
      },
      {
        id: 'ripple',
        name: 'Ripple',
        symbol: 'XRP',
        rank: '3',
      },
    ]);
  });
});
