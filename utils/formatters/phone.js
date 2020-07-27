const formatUS = /(\d{3})(\d{3})(\d{4})/;

export const formatPhone = separator => phone => phone.replace(formatUS, `$1${separator}$2${separator}$3`);

export default formatPhone;

