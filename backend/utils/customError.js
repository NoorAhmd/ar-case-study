// Custome error which will be thrown upon wrong URL.
class PathNotFoundError extends Error {
    constructor(msg) {
        super(msg)
        this.statusCode = 404
    }
}

// Custome error which will be thrown upon wrong requested body sent.
class bodyValidationError extends Error {
    constructor(msg) {
        super(msg)
        this.statusCode = 400
    }
}

class bodyNotFoundError extends Error {
    constructor(msg) {
        super(msg)
        this.statusCode = 404
    }
}

module.exports = {PathNotFoundError, bodyValidationError, bodyNotFoundError}
