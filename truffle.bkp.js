module.exports = {
  networks: {
  development: {
  host: "localhost",
  port: 9545,
  network_id: "*" // Match any network id
 },
     ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   0
}
  },
   rpc: {
     host: 'localhost',
     post:8080
   }
};
