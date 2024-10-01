export const titleCase = (text) => {
  const result = text.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};


export const extractFromHostname = (hostname) => {
  hostname = hostname.replace(".riverworld.io", "");
  hostname = hostname.replace("-books", "");
  return hostname.toUpperCase();
};