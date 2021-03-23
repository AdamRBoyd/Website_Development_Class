const { Resolver } = require('dns').promises;
const resolver = new Resolver();

let servers = resolver.getServers();
console.log("DNS Servers:");
console.log(servers);

resolver.resolve4('disney.com').then((addresses) => {
    console.log('Address for Disney.com')
    console.log(addresses);
});