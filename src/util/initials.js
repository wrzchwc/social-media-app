const getInitials = (name, surname) => {
    try {
        return name.substr(0, 1).concat(surname.substr(0, 1));
    } catch (e) {
        return '?'
    }
}

export default getInitials;