// 种类
const categories = ['Forum','Explorer','Validator','Wallet','Developer','Tooling']
// 标签
const tags = ['Data','Defi','Desktop','Mobile']

const mapping = [
  {
  	title: 'MathWallet',
  	category:'Wallet',
  	tags: ['Desktop','Mobile'],
    description: 'A multi-chain wallet supports Polkadot',
    image: './logos/MathWallet.png',
    verified: true,
  	proof: 'https://mathwallet.org/kusama-wallet/',
    links: {
      github: 'https://github.com/mathwallet',
      telegram: 'https://t.me/mathwallet',
      website: 'https://www.mathwallet.org/',
      twitter: 'https://twitter.com/Mathwallet',
      email: 'hello@mathwallet.org',
    },
  },{
  	title: 'Polkadot-JS Apps',
  	category:'Wallet',
  	tags: ['Desktop'],
    description: 'Polkadot Web Wallet',
    image: './logos/Polkadot-JS Apps.png',
    verified: true,
  	proof: 'https://polkadot.js.org/apps/',
    links: {
    	website: 'https://polkadot.js.org/apps/',
    },
  },{
  	title: 'BEPAL Wallet',
  	category:'Wallet',
  	tags: ['Mobile'],
    description: 'Digital asset management services specialist-BEPAL',
    image: './logos/BEPAL Wallet.png',
    verified: true,
  	proof: 'https://www.bepal.pro/',
    links: {
      website: 'https://polkadot.js.org/apps/',
      twitter: 'https://twitter.com/Bepal_Pro',
      github: 'https://github.com/bepal',
      email:'wenham@bepal.pro',
      telegram: 'https://t.me/bepaloversea',
    },
  },{
    title: 'Commonwealth.im',
    category:'Forum',
    tags: [''],
    description: 'Multi-chain governance platform and forum for Edgeware, Kusama and other chains.',
    image: './logos/Commonwealth.png',
    verified: true,
    proof: 'http://commonwealth.im/',
    links: {
      website: 'http://commonwealth.im/',
      twitter: 'https://twitter.com/HiCommonwealth',
      github: 'https://github.com/hicommonwealth',
      email:'ops@commonwealth.im',
      telegram: 'https://t.me/commonwealth_im',
    },  
  },{
    title: 'Web3 Foundation Forum',
    category:'Forum',
    tags: [''],
    description: 'A place to discuss the Web3 stack.',
    image: './logos/Web3 Foundation Forum.png',
    verified: true,
    proof: 'https://forum.web3.foundation/',
    links: {
      website: 'https://forum.web3.foundation/',
    },
  },{
    title: 'Kusama Forum',
    category:'Forum',
    tags: [''],
    description: 'Kusama is an experimental community research and development network.',
    image: './logos/Kusama Forum.png',
    verified: true,
    proof: 'https://forum.kusama.network/',
    links: {
      website: 'https://forum.kusama.network/',
    },
  },{
    title: 'Polkassembly',
    category:'Wallet',
    tags: [''],
    description: 'An open-source platform to vote and discuss governance proposals, motions, and referenda. ',
    image: './logos/Polkassembly.png',
    verified: true,
    proof: 'https://polkassembly.io/',
    links: {
      website: 'https://polkassembly.io/',
    },
  },{
    title: 'Polkawallet',
    category:'Wallet',
    tags: ['Mobile'],
    description: 'A mobile wallet for polkadot',
    image: './logos/Polkawallet.png',
    verified: true,
    proof: 'https://polkawallet.io/',
    links: {
      website: 'https://polkawallet.io/',
      twitter: 'https://twitter.com/polkawallet',
      github: 'https://github.com/polkawallet-io',
      email:'three3body@gmail.com',
    },
  },{
    title: 'Polkascan',
    category:'Explorer',
    tags: [''],
    description: 'A Multi-Chain Block Explorer',
    image: './logos/Polkascan.png',
    verified: true,
    proof: 'https://polkascan.io/',
    links: {
      website: 'https://polkascan.io/',
      twitter: 'https://twitter.com/polkascan',
      github: 'https://github.com/polkascan',
    },
  },{
    title: 'SUBSCAN',
    category:'Explorer',
    tags: [''],
    description: 'Substrate based blockchain explorer',
    image: './logos/Polkascan.png',
    verified: true,
    proof: 'https://kusama.subscan.io/',
    links: {
      website: 'https://kusama.subscan.io/',
      email: 'hello@subscan.io',
    },  
  },{
    title: 'PolkaCube',
    category:'Explorer',
    tags: [''],
    description: 'Validator, Reward, Slash records',
    image: './logos/PolkaCube.png',
    verified: true,
    proof: 'https://labs.hashquark.io/#/polka',
    links: {
      website: 'https://labs.hashquark.io/#/polka',
    },
  },
]
