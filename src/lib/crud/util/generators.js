/**Returns an unique time based id. */
export const getUniqueId = () =>
    new Date().getUTCMilliseconds()
