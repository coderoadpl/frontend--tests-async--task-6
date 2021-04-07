const makePromiseResolving = (data) => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 0))
}

const makePromiseRejecting = (error) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(error), 0))
}

it('should resolve promise with right data v1', async () => {
    expect.assertions(1)

    const promise = makePromiseResolving('some data')

    // return promise.then((data) => {
    //     expect(data).toBe('some data')
    // })

    const result = await promise

    expect(result).toBe('some data')
})

it('should resolve promise with right data v2', async () => {
    expect.assertions(1)

    const result = await makePromiseResolving('some data')

    expect(result).toBe('some data')
})

it('should reject wit right error v1', async () => {
    expect.assertions(1)

    try {
        await makePromiseRejecting('some error')
    } catch (error) {
        expect(error).toBe('some error')
    }
})

it('should reject wit right error v2', async () => {
    expect.assertions(2)

    try {
        await makePromiseRejecting(new Error('some error'))
    } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe('some error')
    }
})

it('should resolve with right data and not catch', async () => {
    expect.assertions(1)

    try {
        const result = await makePromiseResolving('some data')
        expect(result).toBe('some data')
    } catch (error) {
        expect(error).toBe('some error')
    }
})