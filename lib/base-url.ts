const getBaseUrl = (req?) => {
    const protocol = req
        ? req.headers["x-forwarded-proto"] || "http"
        : location.protocol.slice(0, -1);
    const host = req
        ? req.headers["x-forwarded-host"] || "localhost"
        : location.host;
    return `${protocol}://${host}`;
};

export default getBaseUrl;
