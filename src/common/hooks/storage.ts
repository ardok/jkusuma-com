import { useCallback, useState } from 'react';
import { useCookies } from 'react-cookie';

/*
Storage using combination of cookie, and local state
*/

export function useCardDataStorage() {
  const [cookies, setCookie] = useCookies(['seenCards']);

  const [seenCardIdsState, setSeenCardIdsState] = useState<string[]>(() => {
    const cookieValue = cookies.seenCards;
    return cookieValue || [];
  });

  const addSeenCardId = useCallback(
    (id: string) => {
      setSeenCardIdsState((p) => {
        const newState = p.includes(id) ? p : [...p, id];
        setCookie('seenCards', newState, { path: '/' });
        return newState;
      });
    },
    [setCookie]
  );

  const removeSeenCardId = useCallback(
    (id: string) => {
      setSeenCardIdsState((p) => {
        // Keep the ones that are not matching with `id`
        const newState = p.filter((i) => i !== id);
        setCookie('seenCards', newState);
        return newState;
      });
    },
    [setCookie]
  );

  const deleteAllSeenCardIds = useCallback(() => {
    setSeenCardIdsState([]);
    setCookie('seenCards', null);
  }, [setCookie]);

  return {
    seenCardIds: seenCardIdsState,
    addSeenCardId,
    removeSeenCardId,
    deleteAllSeenCardIds,
  };
}
