import { Subject } from 'rxjs/Subject';
import { map } from 'rxjs/operators';
import isEqual from 'lodash/isEqual';

export const intersectionObserver = (root = null) => {
  const subject = new Subject();
  const subscriber = new IntersectionObserver(
    (entries, observer) => subject.next({ entries, observer }),
    { root, rootMargin: '0px', threshold: 0.2 },
  );

  return (element) => {
    subscriber.observe(element);

    return subject.asObservable().pipe(
      map((data) => {
        const { entries, observer } = data;
        const entry = entries.find(({ target }) => isEqual(target, element));

        return entry && { entry, observer };
      }),
    );
  };
};
