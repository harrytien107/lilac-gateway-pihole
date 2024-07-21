import dotenv from "dotenv";

dotenv.config();

export const API_TOKEN = process.env.CLOUDFLARE_API_KEY;

export const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

export const ACCOUNT_EMAIL = process.env.CLOUDFLARE_ACCOUNT_EMAIL;

export const LIST_ITEM_LIMIT = isNaN(process.env.CLOUDFLARE_LIST_ITEM_LIMIT)
  ? 300000
  : parseInt(process.env.CLOUDFLARE_LIST_ITEM_LIMIT, 10);

export const LIST_ITEM_SIZE = 1000;

export const API_HOST = "https://api.cloudflare.com/client/v4";

export const DRY_RUN = !!parseInt(process.env.DRY_RUN, 10);

export const FAST_MODE = !!parseInt(process.env.FAST_MODE, 10);

export const PROCESSING_FILENAME = {
  ALLOWLIST: "allowlist.txt",
  BLOCKLIST: "blocklist.txt",
  OLD_ALLOWLIST: "whitelist.csv",
  OLD_BLOCKLIST: "input.csv",
};

export const LIST_TYPE = {
  ALLOWLIST: "allowlist",
  BLOCKLIST: "blocklist",
};

export const USER_DEFINED_ALLOWLIST_URLS = process.env.ALLOWLIST_URLS
  // .filter(x => x) removes empty items from the URL arrays
  ? process.env.ALLOWLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const USER_DEFINED_BLOCKLIST_URLS = process.env.BLOCKLIST_URLS
  ? process.env.BLOCKLIST_URLS.split("\n").filter(x => x)
  : undefined;

export const RECOMMENDED_ALLOWLIST_URLS = [
  //"https://raw.githubusercontent.com/im-sm/Pi-hole-Torrent-Blocklist/main/all-torrent-trackres.txt",
  "https://raw.githubusercontent.com/nextdns/click-tracking-domains/main/domains",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/banks.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/mac.txt",
  "https://raw.githubusercontent.com/AdguardTeam/HttpsExclusions/master/exclusions/windows.txt",
  "https://raw.githubusercontent.com/Dogino/Discord-Phishing-URLs/main/official-domains.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist-referral.txt",
  "https://raw.githubusercontent.com/hagezi/dns-blocklists/main/whitelist.txt",

  
];

export const RECOMMENDED_BLOCKLIST_URLS = [
  "https://filters.adtidy.org/extension/ublock/filters/2_without_easylist.txt",
  "https://cdn.jsdelivr.net/gh/hagezi/dns-blocklists@latest/adblock/doh-vpn-proxy-bypass.txt",
  "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=hosts&showintro=1&mimetype=plaintext",
  "https://big.oisd.nl/",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain-VN.txt",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/hosts".
  "https://cdn.iblockads.net/premium/kpoai.iblockads.txt",
  "https://raw.githubusercontent.com/abpvn/abpvn/master/filter/abpvn_ublock.txt",
  "https://raw.githubusercontent.com/abpvn/abpvn/master/filter/abpvn.txt",
  "https://raw.githubusercontent.com/abpvn/abpvn/master/filter/abpvn_adguard.txt",
  "https://raw.githubusercontent.com/nmtrung/FMSF-2.0/master/fmsf_2.0.txt",
  "https://raw.githubusercontent.com/bigdargon/hostsVN/master/option/domain.txt",
  "https://raw.githubusercontent.com/ethan-xd/ethan-xd.github.io/master/rdt.txt",
  "https://raw.githubusercontent.com/ethan-xd/ethan-xd.github.io/master/fb.txt",
];

