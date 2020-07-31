// @flow
import React, { useReducer, useContext, useMemo } from 'react';
import { GAClass } from './ga';
import {
  clearClickLetterAnimCount,
  getClickLetterAnimCount,
  setClickLetterAnimCount,
} from './local-storage';

export type TGlobalState = {
  nameClickCount: number,
};

const DEFAULT_STATE = {
  nameClickCount: getClickLetterAnimCount(),
};

const AppStateContext = React.createContext<any>();
const AppStateDispatchContext = React.createContext<any>();

export const APP_STATE_ACTION = {
  NAME_CLICK: 'NAME_CLICK',
  NAME_CLICK_CLEAR: 'NAME_CLICK_CLEAR',
};

function appStateReducer(
  state: TGlobalState,
  action: { type: $Keys<typeof APP_STATE_ACTION> }
) {
  switch (action.type) {
    case APP_STATE_ACTION.NAME_CLICK:
      const newCount = state.nameClickCount + 1;
      setClickLetterAnimCount(newCount);
      return { nameClickCount: newCount };
    case APP_STATE_ACTION.NAME_CLICK_CLEAR:
      clearClickLetterAnimCount();
      return { nameClickCount: 0 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const AppStateProvider = ({ children }: { children: React$Node }) => {
  const [state, dispatch] = useReducer(appStateReducer, DEFAULT_STATE);
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

function dispatchNameClick(dispatch: any) {
  GAClass.clickAnimLetter();
  dispatch({
    type: APP_STATE_ACTION.NAME_CLICK,
  });
}

function dispatchClearNameClickCount(dispatch: any) {
  GAClass.clickAnimLetterCount();
  dispatch({
    type: APP_STATE_ACTION.NAME_CLICK_CLEAR,
  });
}

export const useAppState = () => {
  const dispatch = useAppStateContextDispatch();
  const dispatchers = useMemo(() => {
    return {
      dispatch,
      dispatchClearNameClickCount: (...p: any) =>
        dispatchClearNameClickCount(dispatch, ...p),
      dispatchNameClick: (...p: any) => dispatchNameClick(dispatch, ...p),
    };
  }, [dispatch]);
  return [useAppStateContext(), dispatchers];
};
