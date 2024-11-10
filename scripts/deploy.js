async function main() {
    const initialSupply = ethers.utils.parseEther("1000"); // 1000 tokens iniciales
    const Token = await ethers.getContractFactory("MyBusinessToken");
    const token = await Token.deploy(initialSupply);
  
    await token.deployed();
  
    console.log("Token deployed to:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  