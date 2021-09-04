const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = async (deployer, network, addresses) => {
    const [admin, admin2] = addresses
    const feeToSetter = admin;

    deployer.deploy(PancakeFactory, feeToSetter, { from: admin });

    // const FACTORY = await PancakeFactory.deployed();
    // await FACTORY.setFeeTo("0x4b7b6fA91148ADcD31b6999AC2DC85694ac05803");

    // console.log("Factory", addresses)
};