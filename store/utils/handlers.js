import axios from 'axios'
// CHECK IS EMPTY OBJECT
export const isEmpty = value => (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
);

// VALIDATE ON SUBMIT
export const validate = (Joi, schema, validateobj, options = { abortEarly: false }) => {
    const { error } = Joi.object(schema).validate(validateobj, options);
    if (!error) return {};
    let errorObj = {};
    for (let item of error.details) {
        errorObj[item.path[0]] = item.message;
    }
    return errorObj;
}

// VALIDATE ON CHANGE
export const validatefield = (Joi, schema, { name, value }) => {
    const obj = { [name]: value };
    const subschema = Joi.object({ [name]: schema[name] });
    const { error } = subschema.validate(obj);
    return error ? error.details[0].message : null;
}

// SET AUTH TOKEN
export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

// FORMDATE
export const formatdate = (time) => {
    const since = new Date(time);
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const year = since.getFullYear();
    const month = since.getMonth();

    return `${monthNames[month]} ${year}`;
}