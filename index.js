const config = { subnet: "", keyword: "" };
const dns = require('dns');
const { getIPRange } = require('get-ip-range');

const ipv4CIDR = getIPRange(config.subnet);

ipv4CIDR.forEach(function(ip) {
    dns.reverse(ip, (err, hostnames) => {
        if(!hostnames) return;
        let filter = hostnames.filter(hostname => hostname.includes(config.keyword))
        if (filter.length === 0) return;
        console.log({ ip: ip, reverse: filter });
    });
});
