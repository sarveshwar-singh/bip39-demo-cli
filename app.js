const bip32 = require('bip39');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = "Choose count of mnemonic:\n1 for 12\n2 for 15\n3 for 18\n4 for 21\n5 for 24\n\n";
rl.question(question, (answer) => {
  let entrophy = undefined;
  switch(parseInt(answer)) {
    case 1:
      entrophy = 128;
      console.log('Mnemonic count: 12');
      break;
    case 2:
      entrophy = 160;
      console.log('Mnemonic count: 15');
      break;
    case 3:
      entrophy = 192;
      console.log('Mnemonic count: 18');
      break;
    case 4:
      entrophy = 224;
      console.log('Mnemonic count: 21');
      break;
    case 5:
      entrophy = 256;
      console.log('Mnemonic count: 24');
      break;
  }

  if(entrophy) {
    console.log('\n');
    for(let index = 1; index<= 5; index++) {
      const mnemonic = bip32.generateMnemonic(entrophy);
      bip32.mnemonicToSeed(mnemonic).then(bytes => bytes.toString('hex')).then((seed) => {
        console.log(`Mnemonic: ${index}`);
        console.log(mnemonic);
        console.log(seed);
        console.log('\n');
      });
    }
  } else {
    console.log('Invalid input');
  }
  rl.close();
});