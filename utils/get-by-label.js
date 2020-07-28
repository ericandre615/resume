export const getByLabel = data => tag => data.find(({ label }) => label.toLowerCase() == tag.toLowerCase());

export default getByLabel;

