function isValidSocialItem(item) {
    // item - object + ne null ir ne NaN?
    if (typeof item !== 'object') return false;
    // item.href - string
    // item.href - ne tuscias string
    // item.icon - string
    // item.icon - ne tuscias sting
    return true;
}

export { isValidSocialItem }