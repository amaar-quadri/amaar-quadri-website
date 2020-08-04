ip_address=$(curl ifconfig.me --silent)
last_ip_address=$(cat last_ip_address.txt)

if [[ "$ip_address" != "$last_ip_address" ]]
then
    username=$(python3 -c "import json; print(json.load(open('/etc/website_credentials.json'))['GOOGLE_DNS_UPDATE_USERNAME'])")
    password=$(python3 -c "import json; print(json.load(open('/etc/website_credentials.json'))['GOOGLE_DNS_UPDATE_PASSWORD'])")
    wget "https://${username}:${password}@domains.google.com/nic/update?hostname=www.amaar-quadri.com&myip=${ip_address}" --quiet -O ->> dns_update_log.txt
    echo "" >> dns_update_log.txt
    echo "Date: $(date)" >> dns_update_log.txt
    echo "" >> dns_update_log.txt
    echo "$ip_address" > last_ip_address.txt
fi
