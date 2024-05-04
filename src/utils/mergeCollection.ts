type Collection<T> = {
  id: number;
} & T;

export function mergeCollectionsByKey<T>(
  original: Collection<T>[],
  cached: Collection<T>[],
  keys: (keyof T)[]
): Collection<T>[] {
  const mergedArray: Collection<T>[] = [];

  original.forEach((record) => {
    const matchingRecord = cached.find((r) => r.id === record.id);
    let newRecord = {} as Collection<T>;

    if (matchingRecord) {
      Object.keys(record).forEach((key) => {
        if (keys.includes(key as keyof T)) {
          newRecord[key as keyof T] = matchingRecord[key as keyof T];
        } else {
          newRecord[key as keyof T] = record[key as keyof T];
        }
      });
    } else {
      newRecord = record;
    }

    mergedArray.push(newRecord);
  });

  return mergedArray;
}
