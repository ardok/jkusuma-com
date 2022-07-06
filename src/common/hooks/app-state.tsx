import React, { useReducer, useContext, useMemo, useEffect } from 'react';
import { GAClass } from '../utils/ga';
import {
  clearClickLetterAnimCount,
  getClickLetterAnimCount,
  setClickLetterAnimCount,
} from '../utils/local-storage';

export interface GlobalStateT {
  nameClickCount: number;
}

const DEFAULT_STATE = {
  nameClickCount: 0,
};

const AppStateContext = React.createContext<GlobalStateT>(DEFAULT_STATE);
const AppStateDispatchContext = React.createContext<any>(() => undefined);

export const APP_STATE_ACTION_TYPE: {
  nameClick: 'NAME_CLICK';
  nameClickClear: 'NAME_CLICK_CLEAR';
  nameClickSet: 'NAME_CLICK_SET';
} = {
  nameClick: 'NAME_CLICK',
  nameClickClear: 'NAME_CLICK_CLEAR',
  nameClickSet: 'NAME_CLICK_SET',
};

export type AppStateActionT =
  | {
      type: 'NAME_CLICK';
    }
  | { type: 'NAME_CLICK_CLEAR' }
  | { type: 'NAME_CLICK_SET'; payload: { value: number } };

function appStateReducer(state: GlobalStateT, action: AppStateActionT) {
  switch (action.type) {
    case APP_STATE_ACTION_TYPE.nameClick:
      const newCount = state.nameClickCount + 1;
      setClickLetterAnimCount(newCount);
      return { nameClickCount: newCount };
    case APP_STATE_ACTION_TYPE.nameClickClear:
      clearClickLetterAnimCount();
      return { nameClickCount: 0 };
    case APP_STATE_ACTION_TYPE.nameClickSet: {
      return { nameClickCount: action.payload.value };
    }
    default:
      // Using bracket instead of .type: https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never
      throw new Error(`Unhandled action type: ${action['type']}`);
  }
}

export const AppStateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(appStateReducer, DEFAULT_STATE);
  useEffect(() => {
    dispatch({
      type: APP_STATE_ACTION_TYPE.nameClickSet,
      payload: {
        value: getClickLetterAnimCount(),
      },
    });
  }, []);
  return (
    <AppStateContext.Provider value={state}>
      <AppStateDispatchContext.Provider value={dispatch}>
        {children}
      </AppStateDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

const useAppStateContext = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error(
      'useAppStateContext must be used within an AppStateProvider'
    );
  }
  return context;
};

const useAppStateContextDispatch = () => {
  const context = useContext(AppStateDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useAppStateContextDispatch must be used within an AppStateProvider'
    );
  }
  return context;
};

function dispatchNameClick(dispatch: any, ...rest: any[]) {
  GAClass.clickAnimLetter();
  dispatch({
    type: APP_STATE_ACTION_TYPE.nameClick,
  });
}

function dispatchClearNameClickCount(dispatch: any, ...rest: any[]) {
  GAClass.clickAnimLetterCount();
  dispatch({
    type: APP_STATE_ACTION_TYPE.nameClickClear,
  });
}

export const useAppState = (): [
  GlobalStateT,
  {
    dispatch: (args: AppStateActionT) => void;
    dispatchClearNameClickCount: (args?: any) => void;
    dispatchNameClick: (args?: any) => void;
  }
] => {
  const dispatch = useAppStateContextDispatch();
  const dispatchers = useMemo(() => {
    return {
      dispatch,
      dispatchClearNameClickCount: (...p: any[]) =>
        dispatchClearNameClickCount(dispatch, ...p),
      dispatchNameClick: (...p: any[]) => dispatchNameClick(dispatch, ...p),
    };
  }, [dispatch]);
  return [useAppStateContext(), dispatchers];
};
