export const getById = data => tag => data.find(({ label }) => label.toLowerCase() == tag.toLowerCase());

export default getById;

