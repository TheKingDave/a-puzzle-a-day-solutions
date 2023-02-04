import {CancellablePromise, Cancellation} from "real-cancellable-promise";

export function cancellableFetch(
    input: RequestInfo,
    init: RequestInit = {}
): CancellablePromise<Response> {
    const controller = new AbortController()

    const promise = fetch(input, {
        ...init,
        signal: controller.signal,
    }).catch((e) => {
        if (e.name === 'AbortError') {
            throw new Cancellation()
        }

        // rethrow the original error
        throw e
    })

    return new CancellablePromise<Response>(promise, () => controller.abort())
}
