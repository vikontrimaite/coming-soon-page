function isValidSocialItem(item) {
    if (typeof item !== 'object') return false;

    if (typeof item.href !== 'string' || item.href.length === 0) return false;

    if (typeof item.icon !== 'string' || item.icon.length === 0) return false;
    
    return true;
}

export { isValidSocialItem }