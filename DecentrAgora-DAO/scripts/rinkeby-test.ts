import { ethers } from 'hardhat';

const _gov = '0x8EAcaEdD6D3BaCBC8A09C0787c5567f86eE96d02';
const _dagora = '0xA95281904827E1758252bB49eCd5D3Cf06F2040e';

async function main () {
    const dagora = await ethers.getContractAt('DAgora', _dagora);
    console.log (await dagora.xyzStaked());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });