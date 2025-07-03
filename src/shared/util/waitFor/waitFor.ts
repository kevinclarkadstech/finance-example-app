export function waitFor<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    promise.then((result) => resolve(result)).catch((error) => reject(error));
  });
}
